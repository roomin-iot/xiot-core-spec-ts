import {ActionType} from '../../../typedef/definition/urn/ActionType';

export class ActionTypeCodec {

    static decodeArray(array: any[]): ActionType[] {
        const list: ActionType[] = [];

        if (array != null) {
            for (const v of array) {
                list.push(new ActionType(v));
            }
        }
  
      return list;
    }

    static encodeArray(actions: ActionType[]): any[] {
        const array: any[] = [];

        actions.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
