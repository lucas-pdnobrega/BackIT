import { IsOptional, IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CommonQueryDTO {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  skip?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  take?: number;

  @IsOptional()
  @IsString()
  orderBy?: string;

  @IsOptional()
  @IsString()
  order?: 'asc' | 'desc';
}
