import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateTask = [
  body("title").notEmpty().withMessage("El título es obligatorio"),
  body("description").notEmpty().withMessage("La descripción es obligatoria"),
  body("dueDate").isISO8601().toDate().withMessage("Fecha inválida"),
  body("priority")
    .isIn(["Alta", "Media", "Baja"])
    .withMessage("Prioridad inválida"),
  body("category")
    .isIn(["Trabajo", "Personal", "Estudio"])
    .withMessage("Categoría inválida"),
  body("status")
    .optional()
    .isIn(["Pendiente", "Completada"])
    .withMessage("Estado inválido"),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
