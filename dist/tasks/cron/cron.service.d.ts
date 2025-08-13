import { CurrencyService } from '../../currency/currency.service';
export declare class CronService {
    private readonly currencyService;
    private readonly logger;
    constructor(currencyService: CurrencyService);
    handleCron(): Promise<void>;
}
