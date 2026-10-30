"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_contract_1 = require("./base-contract");
class InsuranceContract extends base_contract_1.BaseContract {
    constructor(contactId, clientName, isActive, insuranceType, premium, termYears) {
        super(contactId, clientName, isActive);
        this.insuranceType = insuranceType;
        this.premium = premium;
        this.termYears = termYears;
    }
    calculateTotalPremium() {
        return this.premium * this.termYears;
    }
}
