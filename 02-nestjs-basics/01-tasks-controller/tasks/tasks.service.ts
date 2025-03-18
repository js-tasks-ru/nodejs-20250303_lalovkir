import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (task === undefined) {
      throw new NotFoundException('Unknown task');
    }

    return task;
  }

  createTask(task: CreateTaskDto): Task {
    this.tasks.push(Object.assign(task, { id: String(this.tasks.length + 1) }));
    return this.tasks.at(-1);
  }

  updateTask(id: string, update: UpdateTaskDto): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (task === undefined) {
      throw new NotFoundException('Unknown task');
    }

    return Object.assign(task, update);
  }

  deleteTask(id: string): Task {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    const task = this.tasks[taskIndex];

    if (task === undefined) {
      throw new NotFoundException('Unknown task');
    }

    this.tasks.splice(taskIndex, 1);
    return task;
  }
}
