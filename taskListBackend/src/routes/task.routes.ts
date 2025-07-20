import { Router } from "express";
import { completeTask, createTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller";
import { validateTask } from "../validators/task.validator";

const router = Router();

router.post("/", validateTask, createTask);
router.put("/:id", validateTask, updateTask);
router.get("/", getTasks);
router.patch("/:id/complete", completeTask);
router.delete("/:id", deleteTask);

export default router;
