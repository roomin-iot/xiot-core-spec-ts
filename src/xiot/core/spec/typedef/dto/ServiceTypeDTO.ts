import {ServiceType} from '../../../../..';

export class ServiceTypeDTO {

    type: ServiceType;
    description: Map<string, string> = new Map<string, string>();

    constructor(type: ServiceType, description: Map<string, string>) {
        this.type = type;
        this.description = description;
    }
}
