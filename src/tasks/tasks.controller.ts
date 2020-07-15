import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksSvc: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.tasksSvc.getTasks();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Task> {
        return this.tasksSvc.getOne(id);
    }

    @Post()
    addTask(@Body() createTask: CreateTaskDto): Promise<Task> {
        return this.tasksSvc.addTask(createTask);
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() updateTaskDto: CreateTaskDto): Promise<Task | string> {
       return this.tasksSvc.updateTask(id, updateTaskDto); 
    }

    @Delete(':id')
    removeTask(@Param('id') id: string): Promise<Task> {
        return this.tasksSvc.removeTask(id);
    }

}
