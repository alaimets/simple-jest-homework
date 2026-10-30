"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_contract_1 = require("./base-contract");
class LoanContract extends base_contract_1.BaseContract {
    constructor(contactId, clientName, isActive, loanAmount, monthlyPayment, loanTermMonths) {
        super(contactId, clientName, isActive);
        this.loanAmount = loanAmount;
        this.monthlyPayment = monthlyPayment;
        this.loanTermMonths = loanTermMonths;
    }
    calculateTotalPayment() {
        return this.monthlyPayment * this.loanTermMonths;
    }
}
