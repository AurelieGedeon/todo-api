"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTasks = exports.createTask = void 0;
// const { FieldValue, Timestamp } = require("firebase-admin/firestore");
const connectDb_1 = require("./connectDb");
const createTask = (request, response) => {
    const newTask = {
        task: request.body.task,
        done: false,
        deleted: false,
    };
    const db = (0, connectDb_1.connectDb)();
    db.collection("tasks")
        .add(newTask)
        .then((doc) => response.status(201).send(doc.id))
        .catch((err) => response.status(500).send(err));
};
exports.createTask = createTask;
const getTasks = (request, response) => {
    const db = (0, connectDb_1.connectDb)();
    db.collection("tasks")
        .where("deleted", "==", false)
        .get()
        .then((snapshot) => {
        const taskList = snapshot.docs.map((doc) => {
            let task = doc.data();
            task.id = doc.id;
            return task;
        });
        response.send(taskList);
    })
        .catch((err) => response.status(500).send(err));
};
exports.getTasks = getTasks;
const updateTask = (request, response) => {
    const { taskId } = request.params;
    const isDone = request.body.done;
    const db = (0, connectDb_1.connectDb)();
    db.collection("tasks")
        .doc(taskId)
        .update({ done: isDone })
        .then((doc) => response.status(202).send(doc))
        .catch((err) => response.status(500).send(err));
};
exports.updateTask = updateTask;
const deleteTask = (request, response) => {
    const { taskId } = request.params;
    const db = (0, connectDb_1.connectDb)();
    db.collection("tasks")
        .doc(taskId)
        .delete()
        .then(() => {
        response.send("Deleted task");
    })
        .catch((err) => response.status(500).send(err));
};
exports.deleteTask = deleteTask;
