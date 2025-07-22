
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Status } from "../../domain/entities/TaskEnums";
import type { Task } from "../../domain/entities/Task";
import { TaskCard } from "./Card";

const mockTask: Task = {
    id: "1",
    title: "Tarea de prueba",
    description: "Descripción de prueba",
    dueDate: new Date(),
    priority: "Alta",
    category: "Estudio",
    status: Status.PENDING,
    isActive: true
};

describe("TaskCard", () => {
    it("muestra el contenido de la tarea", () => {
        render(
            <TaskCard
                task={mockTask}
                handleComplete={vi.fn()}
                handleDelete={vi.fn()}
                handleUpdate={vi.fn()}
            />
        );

        expect(screen.getByText("Tarea de prueba")).toBeInTheDocument();
        expect(screen.getByText("Descripción de prueba")).toBeInTheDocument();
        expect(screen.getByText(/Vence:/)).toBeInTheDocument();
        expect(screen.getByText("Completar")).toBeInTheDocument();
        expect(screen.getByText("Eliminar")).toBeInTheDocument();
        expect(screen.getByText("Editar")).toBeInTheDocument();
    });

    it("ejecuta handleComplete al hacer clic en 'Completar'", () => {
        const handleComplete = vi.fn();

        render(
            <TaskCard
                task={mockTask}
                handleComplete={handleComplete}
                handleDelete={vi.fn()}
                handleUpdate={vi.fn()}
            />
        );

        fireEvent.click(screen.getByText("Completar"));
        expect(handleComplete).toHaveBeenCalledWith("1");
    });

    it("ejecuta handleDelete al hacer clic en 'Eliminar'", () => {
        const handleDelete = vi.fn();

        render(
            <TaskCard
                task={mockTask}
                handleComplete={vi.fn()}
                handleDelete={handleDelete}
                handleUpdate={vi.fn()}
            />
        );

        fireEvent.click(screen.getByText("Eliminar"));
        expect(handleDelete).toHaveBeenCalledWith("1");
    });
});
