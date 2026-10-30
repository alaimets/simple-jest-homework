"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_contract_1 = require("./base-contract");
class DepositContract extends base_contract_1.BaseContract {
    constructor(contactId, clientName, isActive, amount, interestRate) {
        super(contactId, clientName, isActive);
        this.amount = amount;
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.amount * this.interestRate / 100;
    }
}
