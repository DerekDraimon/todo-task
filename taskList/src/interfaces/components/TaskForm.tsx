import React, { useState, useEffect } from "react";
import { FormModal } from "../../components/FormModal/FormModal";
import { Status, Priority, Category } from "../../domain/entities/TaskEnums";
import { TextInput } from "../../components/ImputText/ImputText";
import { TextArea } from "../../components/ImputTextArea/ImputTextArea";
import { DateInput } from "../../components/ImputDate/ImputDate";
import { SelectList } from "../../components/SelectList/SelectList";
import { Button } from "../../components/Button/Button";
import type { Task } from "../../domain/entities/Task";

interface TaskFormProps {
  title: string;
  onSubmit: (data: Task) => Promise<void>;
  initialData?: Partial<Task>;
}

export const TaskForm = ({ title, onSubmit, initialData }: TaskFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showErrors, setShowErrors] = useState(false);


  const [formData, setFormData] = useState<{
    id?: string;
    title: string;
    description: string;
    dueDate: string;
    priority: Priority | "";
    category: Category | "";
    status: Status;
    isActive: boolean;
  }>({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    category: "",
    status: Status.PENDING,
    isActive: true
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id || "",
        title: initialData.title || "",
        description: initialData.description || "",
        dueDate: initialData.dueDate ? new Date(initialData.dueDate).toISOString().split("T")[0] : "",
        priority: initialData.priority || "",
        category: initialData.category || "",
        status: initialData.status || Status.PENDING,
        isActive: initialData.isActive !== undefined ? initialData.isActive : true
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {

    if (
      formData.title.trim() === "" ||
      formData.description.trim() === "" ||
      formData.dueDate === "" ||
      formData.priority === "" ||
      formData.category === ""
    ) {
      setShowErrors(true);
      return;
    }

    const taskToSend = {
      ...formData,
      dueDate: new Date(formData.dueDate),
      priority: formData.priority as Priority,
      category: formData.category as Category,
      status: formData.status as Status
    };

    await onSubmit(taskToSend);
    resetForm();
  };


  const resetForm = () => {
    setIsOpen(false);
    setShowErrors(false);
    setFormData({
      id: "",
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      category: "",
      status: Status.PENDING,
      isActive: true
    });
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        {initialData ? "Editar" : "Nueva tarea"}
      </Button>

      <FormModal
        isOpen={isOpen}
        onClose={() => resetForm()}
        onSubmit={handleSubmit}
        title={title}
      >
        <TextInput
          label="Título"
          name="title"
          value={formData.title}
          required
          error={formData.title.trim() === "" && showErrors}
          onChange={handleChange}
        />
        <TextArea
          label="Descripción"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          error={formData.description.trim() === "" && showErrors}
        />
        <DateInput
          label="Fecha límite"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
          error={formData.description.trim() === "" && showErrors}
        />

        <SelectList
          label="Prioridad"
          name="priority"
          value={formData.priority}
          options={Object.values(Priority)}
          onChange={handleChange}
          required
          error={formData.description.trim() === "" && showErrors}
        />
        <SelectList label="Categoría"
          name="category"
          value={formData.category}
          options={Object.values(Category)}
          onChange={handleChange}
          required
          error={formData.description.trim() === "" && showErrors}
        />
        <SelectList
          label="Estado"
          name="status"
          value={formData.status}
          options={Object.values(Status)}
          onChange={handleChange}
          required
          error={formData.description.trim() === "" && showErrors}
        />
      </FormModal>
    </>
  );
};
