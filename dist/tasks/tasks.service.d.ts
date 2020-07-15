import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    getTasks(): Promise<Task[]>;
    getOne(id: string): Promise<Task>;
    addTask(taskDto: CreateTaskDto): Promise<Task>;
    updateTask(id: string, taskDto: CreateTaskDto): Promise<Task>;
    removeTask(id: string): Promise<Task>;
}
