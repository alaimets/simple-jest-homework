import {BaseContract} from "../src/classes/base-contract";
import {DepositContract} from "../src/classes/deposit-contract";
import {InsuranceContract} from "../src/classes/insurance-contract";
import {LoanContract} from "../src/classes/loan-contract";


describe('BaseContract test', () => {

    let contract: BaseContract;
    beforeEach(() => {
        contract = new BaseContract('123', 'Mihhail', true);
        contract.activate();
    })
    afterEach(() => {
        contract.deactivate();
        console.log(`Contract ${contract.contactId} has been deactivated after test`);
    })

    test('TEST-01 All fields in BaseContract are correctly filled', () => {
        expect(contract.contactId).toBe('123');
        expect(contract.clientName).toBe('Mihhail');
        expect(contract.isActive).toBe(true);
        console.log(`All fields in BaseContract are correctly filled. 
        contactId: ${contract.contactId}
        clientName: ${contract.clientName}
        isActive: ${contract.isActive}`);
    })

    test('TEST-02 All fields in BaseContract are filled with correct type', () => {
        expect(typeof contract.contactId).toBe('string');
        expect(typeof contract.clientName).toBe('string');
        expect(typeof contract.isActive).toBe('boolean');
        console.log('All fields in BaseContract filled with correct type');
    })

    test('TEST-03 Contract is active after using function activate()', () => {
        contract.activate();
        expect(contract.isActive).toBe(true);
    })

    test('TEST-04 Contract is not active after using function deactivate()', () => {
        contract.activate();
        expect(contract.isActive).toBe(true);
        contract.deactivate();
        expect(contract.isActive).toBe(false);
    })
})

describe('DepositContract test', () => {

    let contract: DepositContract;
    beforeEach(() => {
        contract = new DepositContract('123', 'Mihhail', true, 1000, 3);
        contract.activate();
    })
    afterEach(() => {
        contract.deactivate();
        console.log(`Contract ${contract.contactId} has been deactivated after test`);
    })
    test('TEST-05 All fields in DepositContract are correctly filled', () => {
        expect(contract.contactId).toBe('123');
        expect(contract.clientName).toBe('Mihhail');
        expect(contract.isActive).toBe(true);
        expect(contract.amount).toBe(1000);
        expect(contract.interestRate).toBe(3);

        console.log(`All fields in DepositContract are correctly filled. 
        contactId: ${contract.contactId}
        clientName: ${contract.clientName}
        isActive: ${contract.isActive}
        amount: ${contract.amount}
        interestRate: ${contract.interestRate}`);
    })

    test('TEST-06 All fields in DepositContract are filled with correct type', () => {
        expect(typeof contract.contactId).toBe('string');
        expect(typeof contract.clientName).toBe('string');
        expect(typeof contract.isActive).toBe('boolean');
        expect(typeof contract.amount).toBe('number');
        expect(typeof contract.interestRate).toBe('number');
        console.log('All fields in DepositContract filled with correct type');
    })

    test('TEST-07 Method calculateInterest returns correct interest', () => {
        const interest: number = contract.calculateInterest()
        expect(interest).toBe(30);
        console.log(`With amount ${contract.amount} and interestRate ${contract.interestRate}, your interest is ${interest}`);
    })
})

describe('InsuranceContract test', () => {

    let contract: InsuranceContract;
    beforeEach(() => {
        contract = new InsuranceContract('123', 'Mihhail', true, 'Property', 1300, 20);
        contract.activate();
    })
    afterEach(() => {
        contract.deactivate();
        console.log(`Contract ${contract.contactId} has been deactivated after test`);
    })

    test('TEST-08 All fields in InsuranceContract are correctly filled', () => {
        expect(contract.contactId).toBe('123');
        expect(contract.clientName).toBe('Mihhail');
        expect(contract.isActive).toBe(true);
        expect(contract.insuranceType).toBe('Property');
        expect(contract.premium).toBe(1300);
        expect(contract.termYears).toBe(20);

        console.log(`All fields in InsuranceContract are correctly filled. 
        contactId: ${contract.contactId}
        clientName: ${contract.clientName}
        isActive: ${contract.isActive}
        insuranceType: ${contract.insuranceType}
        premium: ${contract.premium}
        termYears: ${contract.termYears}`);
    })

    test('TEST-09 All fields in InsuranceContract are filled with correct type', () => {
        expect(typeof contract.contactId).toBe('string');
        expect(typeof contract.clientName).toBe('string');
        expect(typeof contract.isActive).toBe('boolean');
        expect(typeof contract.insuranceType).toBe('string');
        expect(typeof contract.premium).toBe('number');
        expect(typeof contract.termYears).toBe('number');
        console.log('All fields in InsuranceContract filled with correct type');
    })

    test('TEST-09 Method calculateTotalPremium correctly calculates the total insurance premium for the entire term', () => {
        const totalPremium: number = contract.calculateTotalPremium();
        expect(totalPremium).toBe(26000);
        console.log(`For ${contract.termYears} years with ${contract.premium} payment, your total amount will be ${totalPremium}`);
    })
})

describe('LoanContract test', () => {

    let contract: LoanContract;
    beforeEach(() => {
        contract = new LoanContract('123', 'Mihhail', true, 300000, 1500, 360);
        contract.activate();
    })
    afterEach(() => {
        contract.deactivate();
        console.log(`Contract ${contract.contactId} has been deactivated after test`);
    })

    test('TEST-10 All fields in LoanContract are correctly filled', () => {
        expect(contract.contactId).toBe('123');
        expect(contract.clientName).toBe('Mihhail');
        expect(contract.isActive).toBe(true);
        expect(contract.loanAmount).toBe(300000);
        expect(contract.monthlyPayment).toBe(1500);
        expect(contract.loanTermMonths).toBe(360);

        console.log(`All fields in LoanContract are correctly filled. 
        contactId: ${contract.contactId}
        clientName: ${contract.clientName}
        isActive: ${contract.isActive}
        insuranceType: ${contract.loanAmount}
        premium: ${contract.monthlyPayment}
        termYears: ${contract.loanTermMonths}`);
    })

    test('TEST-11 All fields in LoanContract are filled with correct type', () => {
        expect(typeof contract.contactId).toBe('string');
        expect(typeof contract.clientName).toBe('string');
        expect(typeof contract.isActive).toBe('boolean');
        expect(typeof contract.loanAmount).toBe('number');
        expect(typeof contract.monthlyPayment).toBe('number');
        expect(typeof contract.loanTermMonths).toBe('number');
        console.log('All fields in LoanContract filled with correct type');
    })

    test('TEST-12 Method calculateTotalPayment correctly calculates the total payment', () => {
        const totalPayment: number = contract.calculateTotalPayment();
        expect(totalPayment).toBe(540000);
        console.log(`Your total payment is ${totalPayment}`);
    })
})