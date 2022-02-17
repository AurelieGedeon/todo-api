const { response } = require("express");
const { connectDb } = require("./connectDb");

// exports.createTask = (req, res) => {

// }

exports.getTasks = (req, res) => {
  const db = connectDb();
  db.collection("tasks")
    .get()
    .then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => {
        let task = dot.data();
        task.id = doc.id;
        return task;
      });
      res.send(taskList);
    })
    .catch((err) => res.status(500).send(err));
};

// exports.updateTask = (req, res) => {

// }
