import { IsArray, IsEnum, IsString } from "class-validator";
import { TransferTypeEnum } from "./archivematica.enum";

export class startTransferDTO {
    @IsString()
    name: string;

    @IsEnum(TransferTypeEnum)
    type: string;

    @IsString()
    accession: string;

    @IsArray()
    paths: Array<string>;

    @IsArray()
    row_ids: Array<number>;
}