// src/currency/currency.schema.ts

import { Schema, Document } from 'mongoose';

export interface CurrencyDocument extends Document {
  base_code: string;
  conversion_rates: Record<string, number>;
  updatedAt: Date;
}

export const CurrencySchema = new Schema<CurrencyDocument>(
  {
    base_code: { type: String, required: true },
    conversion_rates: { type: Object, required: true },
  },
  { timestamps: true }
);
