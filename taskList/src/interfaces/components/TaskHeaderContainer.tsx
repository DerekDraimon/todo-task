import React, { useContext, useEffect, useState } from "react";
import { TaskHeaderLayout } from "../../components/Layout/TaskHeaderLayout";
import type { TaskFilter } from "../../domain/repositories/ITaskRepository";
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
