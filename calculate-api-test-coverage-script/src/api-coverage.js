const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configurable root directory name
const ROOT_DIR = process.argv[2] || 'sso'; // Pass the root dir name as an argument
const SRC_DIR = path.join(ROOT_DIR, 'src');
const ROUTES_DIR = path.join(SRC_DIR, 'routes');
const TESTS_DIR = path.join(SRC_DIR, 'tests');
const APP_FILE = path.join(SRC_DIR, 'app.ts');

// Configurable base route regexes
const ROUTER_ENDPOINT_REGEX = /router\.(get|post|put|delete)\(['"`](\/api\/auth\/[^'"`]+)['"`]/g;
const APP_ENDPOINT_REGEX = /app\.(get|post|put|delete)\(['"`](\/api\/auth\/[^'"`]+)['"`]/g;


// Helper function to extract routes from files
function extractRoutesFromFile(filePath) {
    const routes = [];
    let match;

    // Match routes from router files
    while ((match = ROUTER_ENDPOINT_REGEX.exec(fs.readFileSync(filePath, 'utf8')))) {
        routes.push(
            {
                method: match[1],
                endpoint: match[2],
                count: 0
            }
        );
    }

    // Match routes directly defined in app.ts
    while ((match = APP_ENDPOINT_REGEX.exec(fs.readFileSync(filePath, 'utf8')))) {
        routes.push(
            {
                method: match[1],
                endpoint: match[2],
                count: 0
            }
        );
    }

    return routes;
}

// Function to collect all endpoints from routes directory and app.ts
function collectAllEndpoints() {
    const endpoints = [];

    fs.readdirSync(ROUTES_DIR).filter((file) => file.endsWith('.ts')).forEach(file => endpoints.push(...extractRoutesFromFile(path.join(ROUTES_DIR, file))));

    if (fs.existsSync(APP_FILE)) {
        endpoints.push(...extractRoutesFromFile(APP_FILE));
    }

    const uniqueEndpoints = [];
    const seen = new Set();

    endpoints.forEach(endpoint => {
        const uniqueKey = `${endpoint.method}|${endpoint.endpoint}|${endpoint.count}`;

        if (!seen.has(uniqueKey)) {
            seen.add(uniqueKey);
            uniqueEndpoints.push(endpoint);
        }
    });

    return uniqueEndpoints;
}

// Function to check how many tests exist for each endpoint
function checkTestCoverage(routeObjects) {
    const coverage = {};

    // Scan all test files for endpoint names
    const testFiles = glob.sync(path.join(TESTS_DIR, '**/*.ts'));

    const fileContents = testFiles.map((file) => fs.readFileSync(file, 'utf8'));

    routeObjects.forEach((route) => {
        let { method, endpoint, count } = route;
        fileContents.forEach((file) => {
            // Default regex for static endpoints
            let routerRegex = new RegExp(`\\.${method}\\(['"\`]${endpoint}['"\`]`, 'g');

            // If the endpoint contains dynamic route parameters (e.g., :id), we need to adjust the regex
            if (endpoint.includes(':')) {
                // Replace :param with [^/]+ to match any non-slash characters
                let endpointRegex = endpoint.replace(/:\w+/g, '([^/]+)');
                routerRegex = new RegExp(`\\.${method}\\(['"\`]${endpointRegex}['"\`]`, 'g');
            }

            // Execute the regex match for each file
            while (routerRegex.exec(file)) {
                count++;
            }
        });

        // Update the route with the test count
        route.count = count;
        coverage[`${method.toUpperCase()} ${endpoint}`] = count;
    });

    return coverage;
}



// Convert the object into a formatted table string
function formatTable(data) {
    // If data is an object (coverage), convert it to an array of objects
    const formattedData = Object.keys(data).map((key, index) => ({
        endpoint: key,
        count: data[key],
        verdict: data[key] > 0 ? (data[key] > 3 ? "✅ Heavy Coverage": (data[key] > 1 ? "✅ Moderate Coverage":"✅ Basic Coverage")) : '❌ No Coverage'
    }));
    console.table(formattedData);

    const headers = Object.keys(formattedData[0]);

    // Create a separator line for the table
    const separator = headers.map(() => '─'.repeat(20)).join('│');

    // Generate the table rows, including headers
    const tableRows = formattedData.map(row => {
        return headers.map(header => {
            const value = row[header] || '';
            // Pad each value to ensure a uniform width
            return value.toString().padEnd(20);
        }).join('│');
    });

    // Join everything to form the final table string
    const tableString = [
        headers.map(header => header.padEnd(20)).join('│'),
        separator,
        ...tableRows
    ].join('\n');

    return tableString;
}

fs.writeFileSync(path.join(__dirname, 'api_test_coverage.txt'), formatTable(checkTestCoverage(collectAllEndpoints())));