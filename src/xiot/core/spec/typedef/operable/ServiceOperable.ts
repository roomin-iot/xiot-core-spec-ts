import {Service} from '../instance/Service';
import {PropertyOperation} from '../operation/PropertyOperation';
import {ActionOperation} from '../operation/ActionOperation';
import {PropertyOperable} from './PropertyOperable';
import {OperationStatus} from '../status/OperationStatus';
import {ActionOperable} from './ActionOperable';
import {ServiceType} from '../definition/urn/ServiceType';
import {Property} from '../instance/Property';
import {Action} from '../instance/Action';
import {Event} from '../instance/Event';

export class ServiceOperable extends Service {

  constructor(iid: number,
              type: ServiceType,
              description: Map<String, String>,
              properties: Property[],
              actions: Action[],
              events: Event[]) {
    super(iid, type, description, properties, actions, events);
  }

  tryRead(o: PropertyOperation) {
    if (o.pid == null) {
      return;
    }

     const p = this.properties.get(o.pid.iid);
     if (p != null) {
       if (p instanceof PropertyOperable) {
         p.tryRead(o);
       } else {
         o.status = (<number>OperationStatus.UNDEFINED);
       }
     } else {
       o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
     }
  }

  tryWrite(o: PropertyOperation, save: boolean) {
    if (o.pid == null) {
      return;
    }

    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof PropertyOperable) {
        p.tryWrite(o, save);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
    }
  }

  tryInvoke(o: ActionOperation) {
    if (o.aid == null) {
      return;
    }

    const a = this.actions.get(o.aid.iid);
    if (a != null) {
      if (a instanceof ActionOperable) {
        a.tryInvoke(o, this.properties);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.ACTION_NOT_FOUND);
    }
  }

  update(o: PropertyOperation) {
    if (o.pid == null) {
      return;
    }

    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof PropertyOperable) {
        p.update(o);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
    }
  }

  onPropertiesChanged(o: PropertyOperation) {
    if (o.pid == null) {
      return;
    }

    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof PropertyOperable) {
        p.onPropertiesChanged(o);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
    }
  }
}
