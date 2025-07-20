import { Schema, model } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  dueDate: Date;
  priority: "Alta" | "Media" | "Baja";
  category: "Trabajo" | "Personal" | "Estudio";
  status: "Pendiente" | "Completada";
  isActive: boolean; // para soft delete
}

const TaskSchema = new Schema<ITask>(
  {
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
  },
  {
    timestamps: true
  }
);

export const TaskModel = model<ITask>("Task", TaskSchema);
