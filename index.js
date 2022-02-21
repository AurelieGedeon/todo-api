const express = require("express"); //imports express
const cors = require("cors"); //imports cors

const { getTasks, createTask, updateTask, deleteTask } = require("./src/tasks");

const PORT = process.env.PORT || 3008;

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.post("/tasks", createTask);
app.get("/tasks", getTasks);
app.patch("/tasks/:taskId", updateTask);
app.delete("/tasks/:taskId", deleteTask);

app.listen(PORT, () => {
  console.log(`Listening in on Port: ${PORT}`);
});
