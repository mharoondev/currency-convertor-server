// src/currency/currency.module.ts

import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencySchema } from './currency.schema';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';

// @Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Currency', schema: CurrencySchema },
        ]),
    ],
    providers: [CurrencyService],
    exports: [CurrencyService],
    controllers: [CurrencyController],
})
export class CurrencyModule { }
