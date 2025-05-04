const express = require("express");
const router = express.Router();

const errorController = require("../controllers/errorController");
const TaskManagerUriPaths = require("../constants/uriPaths");

router.get(TaskManagerUriPaths.Error, errorController.getError404);

router.get(TaskManagerUriPaths.Error400, errorController.getError400);

//Catch any improper url
router.use(errorController.getError404);

module.exports = router;
