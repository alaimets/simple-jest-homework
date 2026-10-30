"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseContract = void 0;
class BaseContract {
    constructor(contactId, clientName, isActive) {
        this.contactId = contactId;
        this.clientName = clientName;
        this.isActive = isActive;
    }
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
exports.BaseContract = BaseContract;
