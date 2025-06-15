const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

//Server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
