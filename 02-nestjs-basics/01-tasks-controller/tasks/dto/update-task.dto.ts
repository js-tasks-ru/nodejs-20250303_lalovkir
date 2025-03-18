import { IsString, IsEnum, IsOptional } from "class-validator";
import { TaskStatus } from "../task.model";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  readonly status?: TaskStatus;
}
