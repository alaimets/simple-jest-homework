import {BaseContract} from "./base-contract";

export class DepositContract extends BaseContract {
    amount: number;
    interestRate: number;

    constructor(contactId: string, clientName: string, isActive: boolean, amount: number, interestRate: number) {
        super(contactId, clientName, isActive);
        this.amount = amount;
        this.interestRate = interestRate;
    }

    calculateInterest(): number {
        return this.amount * this.interestRate / 100;
    }
}