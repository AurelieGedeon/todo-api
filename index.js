const express = require("express"); //imports express
const cors = require("cors"); //imports cors

const { getTasks, createTask, updateTask } = require("./src/tasks");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.post("/tasks", createTask);
app.get("/tasks", getTasks);
app.patch("/tasks/:taskId", updateTask);

app.listen(PORT, () => {
  console.log(`Listening in on Port: ${PORT}`);
});
