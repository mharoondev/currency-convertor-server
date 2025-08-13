"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CronService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const currency_service_1 = require("../../currency/currency.service");
const axios_1 = __importDefault(require("axios"));
let CronService = CronService_1 = class CronService {
    currencyService;
    logger = new common_1.Logger(CronService_1.name);
    constructor(currencyService) {
        this.currencyService = currencyService;
    }
    async handleCron() {
        this.logger.log('Starting scheduled currency data fetch...');
        try {
            const response = await axios_1.default.get('https://v6.exchangerate-api.com/v6/86dc2e9c5b1e62d5ad5464da/latest/USD');
            const { base_code, conversion_rates } = response.data;
            const saved = await this.currencyService.saveCurrencyData(base_code, conversion_rates);
            this.logger.log(`Currency data saved: ${saved.base_code}`);
        }
        catch (error) {
            this.logger.error('Error fetching currency data', error.message);
        }
    }
};
exports.CronService = CronService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_2AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "handleCron", null);
exports.CronService = CronService = CronService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [currency_service_1.CurrencyService])
], CronService);
//# sourceMappingURL=cron.service.js.map