"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const Task_1 = require("../models/Task");
const createTask = async (req, res) => {
    try {
        const task = await Task_1.TaskModel.create(req.body);
        res.status(201).json(task);
    }
    catch (error) {
        console.error("Error al crear tarea:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
exports.createTask = createTask;
