import { IsInt, IsString } from 'class-validator';

export class CreateTaskDto {
    @IsInt()
    readonly id: number;

    @IsString()
    readonly task: string;

    @IsString()
    readonly status: string;
}