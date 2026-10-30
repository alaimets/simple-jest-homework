import {BaseContract} from "./base-contract";

export class LoanContract extends BaseContract {
    loanAmount: number;
    monthlyPayment: number;
    loanTermMonths: number;

    constructor(contactId: string, clientName: string, isActive: boolean, loanAmount: number, monthlyPayment: number, loanTermMonths: number) {
        super(contactId, clientName, isActive);
        this.loanAmount = loanAmount;
        this.monthlyPayment = monthlyPayment;
        this.loanTermMonths = loanTermMonths;
    }

    calculateTotalPayment(): number {
        return this.monthlyPayment * this.loanTermMonths;
    }
}