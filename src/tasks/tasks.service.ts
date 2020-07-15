import { Injectable, Body } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

    async getTasks(): Promise<Task[]> {
        return this.taskModel.find();
    }

    async getOne(id: string): Promise<Task> {
        return this.taskModel.findById(id);
    }

    async addTask(taskDto: CreateTaskDto): Promise<Task>
    {
        const createTodo = new this.taskModel(taskDto);
        return createTodo.save();
    }

    async updateTask(id: string, taskDto: CreateTaskDto): Promise<Task> {
        return this.taskModel.findByIdAndUpdate(id, taskDto, {new: true});
    }
    
    async removeTask(id: string): Promise<Task> {
        return this.taskModel.findByIdAndDelete(id);
    }
}
