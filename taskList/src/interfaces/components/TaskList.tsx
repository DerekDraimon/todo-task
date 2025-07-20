import { Status } from "../../domain/entities/TaskEnums";
import { useTasks } from "../../infrastructure/context/TaskContext";



export const TaskList = () => {
  const { tasks, completeTask, deleteTask } = useTasks();

  const handleComplete = async (id: string) => {
    await completeTask(id);
  };

  const handleDelete = async (id: string) => {
    await deleteTask(id);
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No hay tareas registradas.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold">{task.title}</h2>
                <p className="text-secondary">{task.description}</p>
                <p className="text-xs text-gray-800 mt-1">
                  Vence: {new Date(task.dueDate).toLocaleDateString()} | Prioridad: {task.priority}
                  <br />
                  Categoría: {task.category} | Estado: {task.status}
                </p>
              </div>
              <div className="flex gap-2">
                {task.status !== Status.COMPLETED && (
                  <button
                    className="text-green-600 hover:underline text-sm"
                    onClick={() => handleComplete(task.id)}
                  >
                    Completar
                  </button>
                )}
                <button
                  className="text-red-600 hover:underline text-sm"
                  onClick={() => handleDelete(task.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
