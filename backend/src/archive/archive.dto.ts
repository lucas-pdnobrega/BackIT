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
import { CommonQueryDTO } from 'src/common/common.dto';


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

export class QueryArchiveDTO extends CommonQueryDTO {

    @IsString()
    @MaxLength(128)
    @IsOptional()
    title?: string;
    
    @IsDateString()
    @IsOptional()
    upload: string;

    @IsDateString()
    @IsOptional()
    upload_start: string;

    @IsDateString()
    @IsOptional()
    upload_end: string;
    
    @IsEnum(StatusEnum)
    @IsOptional()
    status: string;
    
    @IsString()
    @IsOptional()
    hash: string;
    
    @IsNumber()
    @IsOptional()
    @Min(0)
    size: number;
    
    @IsInt()
    @IsOptional()
    authorId: number;

}
