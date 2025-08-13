// src/tasks/cron.service.ts

import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CurrencyService } from '../../currency/currency.service';
import axios from 'axios';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name);

    constructor(private readonly currencyService: CurrencyService, 
        
     ) { }

    @Cron(CronExpression.EVERY_DAY_AT_2AM)
    async handleCron() {
        this.logger.log('Starting scheduled currency data fetch...');

        try {
            const response = await axios.get(
                'https://v6.exchangerate-api.com/v6/86dc2e9c5b1e62d5ad5464da/latest/USD'
            );

            const { base_code, conversion_rates } = response.data;

            const saved = await this.currencyService.saveCurrencyData(
                base_code,
                conversion_rates
            );

            this.logger.log(`Currency data saved: ${saved.base_code}`);
        } catch (error) {
            this.logger.error('Error fetching currency data', error.message);
        }
    }
}
