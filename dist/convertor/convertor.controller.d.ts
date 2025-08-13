import { ConvertorService } from './convertor.service';
export declare class ConvertorController {
    private ConvertorService;
    constructor(ConvertorService: ConvertorService);
    exchangeRate(body: any): Promise<any>;
}
