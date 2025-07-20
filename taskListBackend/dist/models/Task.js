"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    priority: {
        type: String,
        enum: ["Alta", "Media", "Baja"],
        required: true
    },
    category: {
        type: String,
        enum: ["Trabajo", "Personal", "Estudio"],
        required: true
    },
    status: {
        type: String,
        enum: ["Pendiente", "Completada"],
        default: "Pendiente"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
exports.TaskModel = (0, mongoose_1.model)("Task", TaskSchema);
