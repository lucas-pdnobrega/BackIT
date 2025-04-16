import {
    IsOptional,
    IsString,
    IsInt,
    IsEmail,
    MinLength,
    MaxLength
} from 'class-validator';
import {
    Type
} from 'class-transformer';

export class CreateUserDTO {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(32)
    password: string;
}

export class QueryUserDTO {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsOptional()
    @IsEmail()
    email?: string;
}

export class UserParamIdDTO {
    @IsInt()
    @Type(() => Number)
    id: number;
}
