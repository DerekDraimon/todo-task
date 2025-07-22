import { TaskCard } from "../../components/Card/Card";
import type { Task } from "../../domain/entities/Task";
import { useContext } from "react";
import { TaskContext } from "../../infrastructure/context/TaskContext";

interface TaskListProp {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProp> = ({ tasks }) => {

  const { deleteTask, completeTask, updateTask } = useContext(TaskContext);

  return (
    <div>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          handleComplete={completeTask}
          handleDelete={deleteTask}
          handleUpdate={updateTask}
        />
      ))}
    </div>
  );
};
