export class BaseContract {
    contactId: string;
    clientName: string;
    isActive: boolean;

    constructor(contactId: string, clientName: string, isActive: boolean) {
        this.contactId = contactId;
        this.clientName = clientName;
        this.isActive = isActive;
    }

    activate(): void {
        this.isActive = true;
    }

    deactivate(): void {
        this.isActive = false;
    }
}