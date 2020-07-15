import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private readonly tasksSvc;
    constructor(tasksSvc: TasksService);
    getTasks(): Promise<Task[]>;
    getOne(id: string): Promise<Task>;
    addTask(createTask: CreateTaskDto): Promise<Task>;
    updateTask(id: string, updateTaskDto: CreateTaskDto): Promise<Task | string>;
    removeTask(id: string): Promise<Task>;
}
