import { Injectable } from "@nestjs/common";
// import { Logger } from "@nestjs/common";
// import { HttpService } from "@nestjs/axios";
// import { AxiosError } from "axios";
// import { firstValueFrom } from "rxjs";

@Injectable()
export class ArchivematicaService {
    /*
    constructor(private readonly httpService: HttpService) {}

    private readonly apiUrl = process.env.ARCHIVEMATICA_API_URL;
    private readonly apiKey = process.env.ARCHIVEMATICA_API_KEY;
    private readonly apiUser = process.env.ARCHIVEMATICA_API_USER;

    async startTransfer(data: {
        name: string;
        type: string;
        accession: string;
        paths: string[];
    }): Promise<any> {
        try {
            const response = this.httpService.post(
                `${this.apiUrl}/transfer/start_transfer/`,
                data,
                {
                    headers: {
                        Authorization: `ApiKey ${this.apiUser}:${this.apiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const { data: responseData } = await firstValueFrom(response);

            return responseData;
        } catch (err) {
            const axiosError = err as AxiosError;
            Logger.error(`Archivematica error: ${axiosError.message}`);
            if (axiosError.response) {
                Logger.error(`Response: ${JSON.stringify(axiosError.response.data)}`);
            }
            throw err;
        }
    }
    */
}