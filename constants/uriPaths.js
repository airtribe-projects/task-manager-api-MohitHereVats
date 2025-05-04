const TaskManagerUriPaths = {
  Index: "/",
  GetAllTasks: "/tasks",
  GetSpecificTaskById: "/tasks/:id",
  CreateTask: "/tasks",
  UpdateAnExistingTask: "/tasks/:id",
  DeleteAnExistingTask: "/tasks/:id",
  GetTasksByPriority: "/tasks/priority/:level",
  Error: "/error/404",
  Error400: "/error/400",
};

module.exports = TaskManagerUriPaths;
