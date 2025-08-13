import { CurrencyService } from './currency.service';
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    getCurrency(): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
}
