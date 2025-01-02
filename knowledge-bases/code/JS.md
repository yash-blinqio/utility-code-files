# flatMap() method
- we can directly accumulate data from objects, see this convincing example:
```tsx
const posts = [
  { title: "Post 1", tags: ["javascript", "web"] },
  { title: "Post 2", tags: ["python", "data"] },
  { title: "Post 3", tags: ["javascript", "node"] },
];

const allTags = posts.flatMap(post => post.tags);

console.log(allTags); // Output: ["javascript", "web", "python", "data", "javascript", "node"]
```
- with `flatMap()` remember that in the callback you return an array which gets flattened, and only level is flattened (for multiple levels use `flat()` instead).

- toSorted property doesn't exist due to es6

- tsc --watch && vite ? for npm  run start
