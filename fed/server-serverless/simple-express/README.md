# Simple Express with Goals API
Simple Express server that has basic routing to perform CRUD for goals

## API Breakdown

### Handling middleware
- Use raw + JSON for APIs expecting JSON (with app.use(express.json())).
- Use form for traditional HTML form submissions (with app.use(express.urlencoded(...))).
- For most REST APIs, raw + JSON is the standard.

## Spread Operator `(...)`
The spread operator `(...)` in JavaScript is used to expand the elements of an iterable (like an array or object) into individual elements or properties.

**// Example with objects**
```js
const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26, city: 'New York' };
// updatedUser: { name: 'Alice', age: 26, city: 'New York' }

// Example with arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
// moreNumbers: [1, 2, 3, 4,5]
```


## Using Express Router
`express.Router()` is a feature in Express.js that lets you create modular, mountable route handlers. It helps organize your code by grouping related routes together, making your application easier to maintain and scale. You can define routes on a router instance and then mount that router under a specific path in your main app.

**Example Usage**
Suppose you want to organize all your users routes in a separate module:
```js
// users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all users');
});

router.post('/', (req, res) => {
  res.send('Create a user');
});

module.exports = router;
```

Then, in your main index.js or app.js file:
```js
const express = require('express');
const app = express();
const usersRouter = require('./users');

app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

**Result:**
- GET /users → "Get all users"
- POST /users → "Create a user"

**Benefits:**
- Keeps route logic modular and organized
- Makes it easy to add versioning or group routes under a common path
- Simplifies maintenance as your app grows

**Best Practice:**
Use `express.Router()` for all but the simplest Express apps.