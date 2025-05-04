const express = require("express");

const TaskManagerUriPaths = require("../constants/uriPaths");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.get(TaskManagerUriPaths.GetAllTasks, taskController.getAllTasks);

router.get(TaskManagerUriPaths.GetSpecificTaskById, taskController.getTaskByID);

router.get(
  TaskManagerUriPaths.GetTasksByPriority,
  taskController.getTasksByPriority
);

router.post(TaskManagerUriPaths.CreateTask, taskController.createTask);

router.put(
  TaskManagerUriPaths.UpdateAnExistingTask,
  taskController.updateAnExistingTask
);

router.delete(
  TaskManagerUriPaths.DeleteAnExistingTask,
  taskController.deleteAnExistingTask
);

module.exports = router;
