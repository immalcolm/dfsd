// we use the file 'index.js' to run our express server
// if we are to rename this file, we need to update the script in package.json
// to point to the new file name, e.g. "start": "node index.js"
// This is a simple Express server setup
// It serves static files from the 'public' directory and listens on a specified port
//base of our express server
const express = require("express");
const app = express();
const PORT_NUMBER = 3000; // Default port number
const PORT = process.env.PORT || PORT_NUMBER; // Default port
const router = express.Router(); // Create a new router instance

// Middleware to parse JSON and URL-encoded bodies
// This allows us to handle incoming requests with JSON payloads and form data
// Important to place these middleware before defining routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies // allow us to send form data
app.use(express.static("public"));//lets serve from public folder

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World! This is a simple Express server.");
});

let goals = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Build a web app", completed: false },
  { id: 3, title: "Master Node.js", completed: false },
];
let id = 4; // Initialize ID for new goals

// let's create a route for goals
// This route will handle GET requests to fetch all goals
// use app.get() if using normal routing
router.get("/goals", (req, res) => {
  // In a real application, you would fetch goals from a database
  console.log("Fetching goals");
  res.json(goals);
});

router.get("/goals/:id", (req, res) => {
    const goalId = parseInt(req.params.id, 10); //ensure we parse the
    console.log(`Fetching goal with ID: ${goalId}`);
    const goal = goals.find((g) => g.id === goalId);
    if (goal) {
        console.log(`Goal found: ${JSON.stringify(goal)}`);
        res.json(goal);
    } else {
        console.log(`Goal with ID ${goalId} not found`);
        res.status(404).json({ error: "Goal not found" });
    }
});

// Create a new goal
router.post("/goals", (req, res) => {
  // In a real application, you would save the goal to a database
  // assume req.body contains the new goal data
  console.log("Creating a new goal");
  // writing a simple validation to check if the goal has a title
  // good practice is to validate the request body before processing it
  console.log(`Request method: ${req.method}`);
  console.log(req.body);
  console.log(`Request body: ${JSON.stringify(req.body)}`);
  if (!req.body || !req.body.title) {
    console.log("Invalid goal data");
    return res.status(400).json({ error: "Goal title is required" });
  }

  //completed validation logic here
  if(!req.body.completed){
    req.body.completed = false; //default value for completed
  }
  
  // Create a new goal object with an auto-incremented ID
  const goal = { id: id++, ...req.body };
  console.log(`Goal created: ${JSON.stringify(goal)}`);
  goals.push(goal);
  res.status(201).json(goal);
});

// Update a goal by ID
router.put("/goals/:id", (req, res) => {
  const goalId = parseInt(req.params.id, 10); //ensure we parse the ID as an integer

  console.log(`Updating goal with ID: ${goalId}`);
  const goalIndex = goals.findIndex((g) => g.id === goalId);
  if (goalIndex !== -1) {
    const updatedGoal = { ...goals[goalIndex], ...req.body };
    goals[goalIndex] = updatedGoal;
    console.log(`Goal updated: ${JSON.stringify(updatedGoal)}`);
    res.json(updatedGoal);
  } else {
    console.log(`Goal with ID ${goalId} not found`);
    res.status(404).json({ error: "Goal not found" });
  }
});


// Delete a goal by ID
router.delete("/goals/:id", (req, res) => {
  const goalId = parseInt(req.params.id, 10);
  console.log(`Deleting goal with ID: ${goalId}`);
  const goalIndex = goals.findIndex((g) => g.id === goalId);
  if (goalIndex !== -1) {
    const deletedGoal = goals.splice(goalIndex, 1);
    console.log(`Goal deleted: ${JSON.stringify(deletedGoal)}`);
    res.json(deletedGoal);
  } else {
    console.log(`Goal with ID ${goalId} not found`);
    res.status(404).json({ error: "Goal not found" });
  }
});

//let's add a route prefix for API versioning
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
