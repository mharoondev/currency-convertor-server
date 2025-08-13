import { Injectable } from '@nestjs/common';
import { stat } from 'fs';

@Injectable()
export class ConvertorService {
    async getExchangeRate(body): Promise<any> {
        // console.log('Fetching exchange rate for:', body);
        const { from, to, amount } = body;

        const calculatedRate = amount *  to.rate / from.rate;
        // console.log(`Calculated exchange rate from ${from.code} to ${to.code}:`, calculatedRate);
        return {
            status: 'success',
            message: 'Exchange rate fetched successfully',
            fromCurrency: from.code,
            toCurrency: to.code,
            exchangeRate: calculatedRate,
            amount: amount,
        };
    }
}
