import { UID, Callbacks } from 'grim.lib';
import { ISchema, Schema } from './schema';
import { IUISchema, IUISchemaProps, UISchema } from './uischema';

const uid = new UID.Queue();

interface IEventsProps {}

export interface IField {
    getSchema(): ISchema;
    getUISchema(): IUISchema;
}

export class Field implements IField {
    protected uid = uid.getNext();

    protected schema: ISchema;

    protected uischema: IUISchema;

    protected events: Callbacks;

    constructor(schema: ISchemaProps, uischema: IUISchemaProps, events: IEventsProps) {
        this.schema = new Schema(schema);
        this.uischema = new UISchema(uischema);
        this.events = new Callbacks(events as any);
    }

    public getSchema(): ISchema {
        return this.schema;
    }

    public getUISchema(): IUISchema {
        return this.uischema;
    }
}
