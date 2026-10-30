import {BaseContract} from "./base-contract";

export class InsuranceContract extends BaseContract {
    insuranceType: string;
    premium: number;
    termYears: number;

    constructor(contactId: string, clientName: string, isActive: boolean, insuranceType: string, premium: number, termYears: number) {
        super(contactId, clientName, isActive);
        this.insuranceType = insuranceType;
        this.premium = premium;
        this.termYears = termYears;
    }

    calculateTotalPremium(): number {
        return this.premium * this.termYears;
    }
}