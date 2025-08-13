import { Schema, Document } from 'mongoose';
export interface CurrencyDocument extends Document {
    base_code: string;
    conversion_rates: Record<string, number>;
    updatedAt: Date;
}
export declare const CurrencySchema: Schema<CurrencyDocument, import("mongoose").Model<CurrencyDocument, any, any, any, Document<unknown, any, CurrencyDocument, any, {}> & CurrencyDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CurrencyDocument, Document<unknown, {}, import("mongoose").FlatRecord<CurrencyDocument>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<CurrencyDocument> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
