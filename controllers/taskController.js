const TaskManagerUriPaths = require("../constants/uriPaths");
const tasksList = require("../data/taskList");

exports.getAllTasks = (req, res, next) => {
  let list = tasksList.sort(
    (task1, task2) => task2.creationDate - task1.creationDate
  );
  const completed = req.query.completed;

  if (completed) {
    list = list.filter((task) => task.completed == JSON.parse(completed));
    return res.send(list);
  }
  res.send(list);
};

exports.getTaskByID = (req, res, next) => {
  const id = req.params.id;
  const task = tasksList.find((task) => task.id == id);

  if (!task) {
    return res
      .status(404)
      .send(
        "Error 404! The Requested Resource or Page doesn't seems to exists."
      );
    // return res.redirect(TaskManagerUriPaths.Error);
  }

  res.send(task);
};

exports.createTask = (req, res, next) => {
  const task = req.body;
  if (!task.title || !task.description || typeof task.completed != "boolean") {
    return res.status(400).send("Invalid Input Entered");
    // return res.redirect(TaskManagerUriPaths.Error400);
  }
  task.id = tasksList.length + 1;
  task.creationDate = new Date();
  /**
   * Assuming Priority will be one of: ["low", "medium", "high"]
   * Not Making Priority as required parameter in body the reason being my test cases will break;
   */
  task.priority = task.priority ? task.priority : "low";
  tasksList.push(task);
  res.status(201).send(task);
};

exports.updateAnExistingTask = (req, res, next) => {
  const id = req.params.id;
  const index = tasksList.findIndex((item) => item.id == id);

  if (index == -1) {
    return res
      .status(404)
      .send(
        "Error 404! The Requested Resource or Page doesn't seems to exists."
      );
  }

  const task = tasksList[index];
  const incomingTask = req.body;

  if (
    !incomingTask.title ||
    !incomingTask.description ||
    typeof incomingTask.completed != "boolean"
  ) {
    return res.status(400).send("Invalid Input Entered");
  }
  /**
   * Assuming Priority will be one of: ["low", "medium", "high"]
   * Not Making Priority as required parameter in body the reason being my test cases will break;
   */
  task.priority = incomingTask.priority ? incomingTask.priority : "low";
  task.title = incomingTask.title;
  task.description = incomingTask.description;
  task.completed = incomingTask.completed;

  tasksList[index] = task;
  res.status(200).send(task);
};

exports.deleteAnExistingTask = (req, res, next) => {
  const id = req.params.id;
  const index = tasksList.findIndex((item) => item.id == id);

  if (index == -1) {
    return res
      .status(404)
      .send(
        "Error 404! The Requested Resource or Page doesn't seems to exists."
      );
    // return res.redirect(TaskManagerUriPaths.Error);
  }

  tasksList.splice(index, 1);
  return res.status(200).send(tasksList);
  // res.redirect(TaskManagerUriPaths.GetAllTasks);
};

exports.getTasksByPriority = (req, res, next) => {
  const priority = req.params.level;

  if (priority == "low" || priority == "medium" || priority == "high") {
    const lists = tasksList.filter((task) => task.priority == priority);
    return res.status(200).send(lists);
  }

  return res.status(400).send("Invalid Priority Entered in URL");
};
