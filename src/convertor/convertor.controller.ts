import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'axios';
import { ConvertorService } from './convertor.service';

@Controller('convertor')
export class ConvertorController {
constructor(private ConvertorService: ConvertorService) {}

    @Post('exchange-rate')
    async exchangeRate(@Body() body: any) {
    return this.ConvertorService.getExchangeRate(body);
  }

 }
