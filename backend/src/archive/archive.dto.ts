import {
    IsOptional,
    IsString,
    IsInt,
    MinLength,
    MaxLength,
    IsEnum,
    IsDateString,
    IsNumber,
    Min
} from 'class-validator';
import {
    Type
} from 'class-transformer';
import { StatusEnum } from './archive.enum';


export class CreateArchiveDTO {

    @IsString()
    @MinLength(4)
    @MaxLength(128)
    title: string;
    
    @IsDateString()
    upload: string;
    
    @IsEnum(StatusEnum)
    status: string;
    
    @IsString()
    @IsOptional()
    hash?: string;
    
    @IsNumber()
    @IsOptional()
    @Min(0)
    size?: number;
    
    @IsInt()
    authorId: number;

}

export class ArchiveParamIdDTO {
    @IsInt()
    @Type(() => Number)
    id: number;
}
