const isValid_HTTP_URL = require("is-valid-http-url");

const validUrls = [
    "http://example.com",
    "https://example.com",
    "https://www.example.com",
    "http://subdomain.example.com",
    "http://example.com:8080",
    "https://example.com:443",
    "http://localhost:3000",
    "http://192.168.1.1",
    "https://10.0.0.1",
    "http://172.16.0.10:8080",
    "http://172.16.0.10:8080",
    "http://example.com/path/to/resource",
    "https://example.com/abc/123/",
    "http://example.com/path?param1=value1&param2=value2",
    "https://example.com/path?search=test&sort=asc",
    "https://example.com/path???????search=test&sort====asc/location/city/street/?houseNumber=3",
    "http://example.com/path#fragment",
    "https://example.com/path?query=value#section",
    "https://example.com/path/to/file?query=hello%20world",
    "http://example.com/file%20with%20spaces",
    "http://localhost",
    "https://localhost:3000",
    "http://127.0.0.1:5000",
    "http://127.0.0.1:70000",
    "http://example.xyz",
    "https://example.museum",
    "http://127.0.0.1:5000/path/to#anchor"
];

// Array of invalid URLs (should not match)
const invalidUrls = [
    "htp://example.com",               // Invalid scheme
    "://example.com",                  // Missing scheme
    "http://.com",                     // Invalid domain
    "https://..example.com",           // Invalid domain
    "http://example..com",             // Invalid domain
    "http://example.com:",             // Invalid port
    "https://com",                     // Missing domain part`
    "http:///path/to/resource",        // Missing domain
    "https:///path/to/resource",       // Missing domain
    "http://example.com:abc",          // Invalid port
    "https://example.com:abc",         // Invalid port
    "ftp://example.com",               // Unsupported protocol
];


const unclassifiedUrls = [
    'http://pgca-test:8443/cms-fo',
    'http://localhost:8443/cms-fo',
    'http://127.0.0.1:5000/path/to#anchor"',
    "http://127.0.0.1:5000/path/to#anchor'",
    'https://localhost.c.c.c.co'

];
const currURLs = ['http://localkhs.asdfas/asdf:2345',
    'https://balls:324/ads:3939'
];

currURLs.forEach((url, idx) => console.log(`${idx + 1}. ${url} is ${isValid_HTTP_URL(url) ? '✅ Valid' : '❌ InValid'}`));


