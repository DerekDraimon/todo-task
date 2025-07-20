import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

// Conexión a la base de datos
connectDB();

// Rutas (se conectarán después)
app.get("/", (req, res) => {
  res.send("API Todo funcionando 🎯");
});

app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
