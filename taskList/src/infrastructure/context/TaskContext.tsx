import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from "react";

import { TaskService } from "../../infrastructure/services/TaskService";
import type { Task } from "../../domain/entities/Task";
import type { NewTask } from "../../domain/entities/NewTask";
import type { TaskFilter } from "../../domain/repositories/ITaskRepository";

import { GetTasksUseCase } from "../../application/use-cases/GetTasksUseCase";
import { CreateTaskUseCase } from "../../application/use-cases/CreateTaskUseCase";
import { UpdateTaskUseCase } from "../../application/use-cases/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "../../application/use-cases/DeleteTaskUseCase";
import { MarkTaskAsCompletedUseCase } from "../../application/use-cases/MarkTaskAsCompletedUseCase";
import { Category, Priority, Status } from "../../domain/entities/TaskEnums";

const repository = new TaskService();

interface ITaskContextType {
    tasks: Task[];
    loadTasks: (filter?: TaskFilter) => Promise<void>;
    createTask: (task: NewTask) => Promise<void>;
    updateTask: (id: string, data: Partial<NewTask>) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    completeTask: (id: string) => Promise<void>;
    search: string;
    status: Status;
    priority: Priority;
    category: Category;
    setSearch: (search: string) => void;
    setStatus: (status: string) => void;
    setPriority: (priority: string) => void;
    setCategory: (category: string) => void;
}

export const TaskContext = createContext<ITaskContextType>({
    tasks: [],
    loadTasks: async () => { },
    createTask: async () => { },
    updateTask: async () => { },
    deleteTask: async () => { },
    completeTask: async () => { },
    search: "",
    status: Status,
    priority: Priority,
    category: Category,
    setSearch: () => { },
    setStatus: () => { },
    setPriority: () => { },
    setCategory: () => { },
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(Status);
    const [priority, setPriority] = useState(Priority);
    const [category, setCategory] = useState(Category);

    const getTasks = new GetTasksUseCase(repository);
    const create = new CreateTaskUseCase(repository);
    const update = new UpdateTaskUseCase(repository);
    const remove = new DeleteTaskUseCase(repository);
    const complete = new MarkTaskAsCompletedUseCase(repository);

    const loadTasks = async (filter?: TaskFilter) => {
        const data = await getTasks.execute(filter);
        setTasks(data);
    };

    const createTask = async (task: NewTask) => {
        await create.execute(task);
        await loadTasks();
    };

    const updateTask = async (id: string, data: Partial<NewTask>) => {
        await update.execute(id, data);
        await loadTasks();
    };

    const deleteTask = async (id: string) => {
        await remove.execute(id);
        await loadTasks();
    };

    const completeTask = async (id: string) => {
        await complete.execute(id);
        await loadTasks();
    };

    useEffect(() => {
        loadTasks({
            searchTerm: search,
            status:  Status,
            priority: Priority,
            category: Category
        });
    }, [search, status, priority, category]);

    return (
        <TaskContext.Provider value={{ tasks, loadTasks, createTask, updateTask, deleteTask, completeTask, search, status, priority, category, setSearch, setStatus, setPriority, setCategory }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
