import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectModel('Currency') private currencyModel: Model<any>,
  ) {}

  async saveCurrencyData(base_code: string, conversion_rates: any) {
    // Optional: remove previous data
    await this.currencyModel.deleteMany({ base_code });

    const result = await this.currencyModel.create({
      base_code,
      conversion_rates,
    });

    return result;
  }

  async getCurrency() {
    const currencyData = await this.currencyModel.find().exec();
    return {
      status: 'success',
      message: 'Currency data retrieved successfully',
      data: currencyData[0],
    }
  }
}
