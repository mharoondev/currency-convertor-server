import { Module } from '@nestjs/common';
import { ConvertorController } from './convertor.controller';
import { ConvertorService } from './convertor.service';

@Module({
  controllers: [ConvertorController],
  providers: [ConvertorService]
})
export class ConvertorModule {}
