import { Controller, Get, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TaskListDto } from "./dto/task-list.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Query() { status, page, limit, sortBy }: TaskListDto) {
    return this.tasksService.getFilteredTasks(status, page, limit, sortBy);
  }
}
