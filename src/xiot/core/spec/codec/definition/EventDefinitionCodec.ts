import {Spec} from '../../typedef/constant/Spec';
import {EventDefinition} from '../../typedef/definition/EventDefinition';
import {EventType} from '../../typedef/definition/urn/EventType';
import {ArgumentDefinitionCodec} from './ArgumentDefinitionCodec';
import {DescriptionCodec} from './DescriptionCodec';

export class EventDefinitionCodec {

    static decodeArray(list: any[]): EventDefinition[] {
        const array: EventDefinition[] = [];

        list.forEach(o => {
            array.push(EventDefinitionCodec.decode(o));
        });

        return array;
    }

    static decode(o: any): EventDefinition {
        let type = new EventType(o[Spec.TYPE]);
        let description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        let list = ArgumentDefinitionCodec.decodeArray(o[Spec.ARGUMENTS]);
        return new EventDefinition(type, description, list);
    }

    static encode(def: EventDefinition): any {
        const o: any = {
            type: def.type.toString(),
            description: DescriptionCodec.encode(def.type.description),
        };

        if (def.arguments.length > 0) {
            o[Spec.ARGUMENTS] = ArgumentDefinitionCodec.encodeArray(def.arguments);
        }

        return o;
    }

    static encodeArray(list: EventDefinition[]): any[] {
        return list.map(x => EventDefinitionCodec.encode(x));
    }
}
