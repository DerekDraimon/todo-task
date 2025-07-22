import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from "react";

import { TaskService } from "../../infrastructure/services/TaskService";
import type { Task } from "../../domain/entities/Task";
import type { TaskFilter } from "../../domain/repositories/ITaskRepository";

import { GetTasksUseCase } from "../../application/use-cases/GetTasksUseCase";
import { CreateTaskUseCase } from "../../application/use-cases/CreateTaskUseCase";
import { UpdateTaskUseCase } from "../../application/use-cases/UpdateTaskUseCase";
import { DeleteTaskUseCase } from "../../application/use-cases/DeleteTaskUseCase";
import { MarkTaskAsCompletedUseCase } from "../../application/use-cases/MarkTaskAsCompletedUseCase";
import { Category, Priority, SortByDueDate, Status } from "../../domain/entities/TaskEnums";

const repository = new TaskService();

interface ITaskContextType {
    tasks: Task[];
    loadTasks: (filter?: TaskFilter) => Promise<void>;
    createTask: (task: Task) => Promise<void>;
    updateTask: (data: Task) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    completeTask: (id: string) => Promise<void>;
    search: string;
    status: Status;
    priority: Priority;
    category: Category;
    sortByDueDate: SortByDueDate;
    setSearch: (search: string) => void;
    setStatus: (status: Status) => void;
    setPriority: (priority: Priority) => void;
    setCategory: (category: Category) => void;
    setSortByDueDate: (sortByDueDate: SortByDueDate) => void;
}

export const TaskContext = createContext<ITaskContextType>({
    tasks: [],
    loadTasks: async () => { },
    createTask: async () => { },
    updateTask: async () => { },
    deleteTask: async () => { },
    completeTask: async () => { },
    search: "",
    status: Status.PENDING,
    priority: "" as Priority,
    category: "" as Category,
    sortByDueDate: "" as SortByDueDate,
    setSearch: () => { },
    setStatus: () => { },
    setPriority: () => { },
    setCategory: () => { },
    setSortByDueDate: () => { },
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<Status>(Status.PENDING);
    const [priority, setPriority] = useState<Priority>("" as Priority);
    const [category, setCategory] = useState<Category>("" as Category);
    const [sortByDueDate, setSortByDueDate] = useState<SortByDueDate>("" as SortByDueDate);

    const getTasks = new GetTasksUseCase(repository);
    const create = new CreateTaskUseCase(repository);
    const update = new UpdateTaskUseCase(repository);
    const remove = new DeleteTaskUseCase(repository);
    const complete = new MarkTaskAsCompletedUseCase(repository);

    const loadTasks = async (filter?: TaskFilter) => {
        const data = await getTasks.execute(filter);
        const mappedData = data.map(task => ({
            ...task,
            id: (task as any)._id ?? task.id,
        }));
        setTasks(mappedData);
    };

    const createTask = async (task: Task) => {
        await create.execute(task);
        await loadTasks(getCurrentFilter());
    };

    const updateTask = async (data: Task) => {
        await update.execute(data);
        await loadTasks(getCurrentFilter());
    };

    const deleteTask = async (id: string) => {
        await remove.execute(id);
        await loadTasks(getCurrentFilter());
    };

    const completeTask = async (id: string) => {
        await complete.execute(id);
        await loadTasks(getCurrentFilter());
    };

    const getCurrentFilter = (): TaskFilter => ({
        searchTerm: search,
        status,
        priority,
        category,
    });

    useEffect(() => {
        loadTasks({
            searchTerm: search,
            status: status,
            priority: priority,
            category: category,
            sortByDueDate: sortByDueDate,
        });
    }, [search, status, priority, category, sortByDueDate]);

    return (
        <TaskContext.Provider value={{ tasks, loadTasks, createTask, updateTask, deleteTask, completeTask, search, status, priority, category, sortByDueDate, setSearch, setStatus, setPriority, setCategory, setSortByDueDate }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);
