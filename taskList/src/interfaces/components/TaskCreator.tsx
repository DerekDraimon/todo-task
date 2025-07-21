import React, { useState } from "react";
import { FormModal } from "../../components/FormModal/FormModal";
import { Status } from "../../domain/entities/TaskEnums";
import { TextInput } from "../../components/ImputText/ImputText";
import { TextArea } from "../../components/ImputTextArea/ImputTextArea";
import { DateInput } from "../../components/ImputDate/ImputDate";
import { SelectList } from "../../components/SelectList/SelectList";
import { Button } from "../../components/Button/Button";


export const TaskCreator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    category: "",
    status: Status.PENDING
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Error al crear tarea");

      const newTask = await response.json();
      console.log("✅ Tarea creada:", newTask);

      setIsOpen(false);
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        category: "",
        status: Status.PENDING
      });

    } catch (error) {
      console.error("❌", error);
      // Opcional: mostrar error al usuario
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Nueva tarea</Button>

      <FormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        title="Crear nueva tarea"
      >
        <TextInput
          label="Título"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextArea
          label="Descripción"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <DateInput
          label="Fecha límite"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
        <SelectList
          label="Prioridad"
          name="priority"
          value={formData.priority}
          options={["Alta", "Media", "Baja"]}
          onChange={handleChange}
        />
        <SelectList
          label="Categoría"
          name="category"
          value={formData.category}
          options={["Estudio", "Trabajo", "Personal"]}
          onChange={handleChange}
        />
        <SelectList
          label="Estado"
          name="status"
          value={formData.status}
          options={Object.values(Status)}
          onChange={handleChange}
        />
      </FormModal >
    </>
  );
};
