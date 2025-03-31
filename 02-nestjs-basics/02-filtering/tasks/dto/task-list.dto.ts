import { IsEnum, IsOptional, IsInt, Min } from "class-validator";
import { Type } from 'class-transformer';
import { TaskStatus, SortBy } from "../task.model";

export class TaskListDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  readonly status?: TaskStatus;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly limit?: number;

  @IsOptional()
  @IsEnum(SortBy)
  readonly sortBy?: SortBy;
}
