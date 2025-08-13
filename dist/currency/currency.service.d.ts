import { Model } from 'mongoose';
export declare class CurrencyService {
    private currencyModel;
    constructor(currencyModel: Model<any>);
    saveCurrencyData(base_code: string, conversion_rates: any): Promise<any>;
    getCurrency(): Promise<{
        status: string;
        message: string;
        data: any;
    }>;
}
