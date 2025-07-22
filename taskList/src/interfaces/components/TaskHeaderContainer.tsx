import React, { useContext } from "react";
import { TaskHeaderLayout } from "../../components/Layout/TaskHeaderLayout";
import { TaskContext } from "../../infrastructure/context/TaskContext";
import { TaskList } from "./TaskList";


export const TaskHeaderContainer: React.FC = () => {

    const { tasks } = useContext(TaskContext);

    return (
        <>
            <TaskHeaderLayout
                title="Tareas"
            />
            <TaskList tasks={tasks} />
        </>
    );
};
