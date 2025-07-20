"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/tasks", task_routes_1.default);
// Conexión a la base de datos
(0, db_1.connectDB)();
// Rutas (se conectarán después)
app.get("/", (req, res) => {
    res.send("API Todo funcionando 🎯");
});
app.listen(port, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
