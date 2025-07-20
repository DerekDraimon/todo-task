"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = void 0;
const express_validator_1 = require("express-validator");
exports.validateTask = [
    (0, express_validator_1.body)("title").notEmpty().withMessage("El título es obligatorio"),
    (0, express_validator_1.body)("description").notEmpty().withMessage("La descripción es obligatoria"),
    (0, express_validator_1.body)("dueDate").isISO8601().toDate().withMessage("Fecha inválida"),
    (0, express_validator_1.body)("priority")
        .isIn(["Alta", "Media", "Baja"])
        .withMessage("Prioridad inválida"),
    (0, express_validator_1.body)("category")
        .isIn(["Trabajo", "Personal", "Estudio"])
        .withMessage("Categoría inválida"),
    (0, express_validator_1.body)("status")
        .optional()
        .isIn(["Pendiente", "Completada"])
        .withMessage("Estado inválido"),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
