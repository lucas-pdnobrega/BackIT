import {
    //Body, 
    Controller,
    //Post,
} from '@nestjs/common';
//import { startTransferDTO } from './archivematica.dto';
import { ArchivematicaService } from './archivematica.service';


@Controller('archivematica')
export class ArchivematicaController {
    constructor(
        private archivematicaService: ArchivematicaService
    ) {}
    
    /*
    TEMPO LIMITE NÃO SUFICIENTE PARA CONFECCIONAR MOCKUPS DE TRANSFERÊNCIAS COM ARCHIVEMATICA

    @Post("transfer")
    startTransfer(@Body() data: startTransferDTO): Promise<any> {
        return this.archivematicaService.startTransfer({
            name: data.name,
            type: data.type,
            accession: data.accession,
            paths: data.paths
        });
    }
    */
}
