"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const task_validator_1 = require("../validators/task.validator");
const router = (0, express_1.Router)();
router.post("/", task_validator_1.validateTask, task_controller_1.createTask);
exports.default = router;
