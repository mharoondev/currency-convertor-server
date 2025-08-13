import { Module } from '@nestjs/common';
import { CronService } from './cron/cron.service';
import { CurrencyModule } from 'src/currency/currency.module';

@Module({
  providers: [CronService],
  imports: [
    CurrencyModule
  ],
})
export class TasksModule { }
