import { Request, Response } from "express";
import { TaskModel } from "../models/Task";

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        console.error("Error al crear tarea:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updated = await TaskModel.findByIdAndUpdate(id, req.body, {
      new: true,      
      runValidators: true 
    });

    if (!updated) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { status, priority, category, search, sort } = req.query;

    const filters: any = { isActive: true };

    if (status) filters.status = status;
    if (priority) filters.priority = priority;
    if (category) filters.category = category;

    if (search) {
      filters.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ];
    }

    const sortOptions: any = {};

    if (sort === "asc") sortOptions.dueDate = 1;
    if (sort === "desc") sortOptions.dueDate = -1;

    const tasks = await TaskModel.find(filters).sort(sortOptions);

    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const completeTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updated = await TaskModel.findByIdAndUpdate(
      id,
      { status: "Completada" },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error al completar tarea:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updated = await TaskModel.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(200).json({ message: "Tarea desactivada correctamente" });
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

