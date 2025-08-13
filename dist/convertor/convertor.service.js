"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertorService = void 0;
const common_1 = require("@nestjs/common");
let ConvertorService = class ConvertorService {
    async getExchangeRate(body) {
        const { from, to, amount } = body;
        const calculatedRate = amount * to.rate / from.rate;
        return {
            status: 'success',
            message: 'Exchange rate fetched successfully',
            fromCurrency: from.code,
            toCurrency: to.code,
            exchangeRate: calculatedRate,
            amount: amount,
        };
    }
};
exports.ConvertorService = ConvertorService;
exports.ConvertorService = ConvertorService = __decorate([
    (0, common_1.Injectable)()
], ConvertorService);
//# sourceMappingURL=convertor.service.js.map