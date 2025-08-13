"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencySchema = void 0;
const mongoose_1 = require("mongoose");
exports.CurrencySchema = new mongoose_1.Schema({
    base_code: { type: String, required: true },
    conversion_rates: { type: Object, required: true },
}, { timestamps: true });
//# sourceMappingURL=currency.schema.js.map