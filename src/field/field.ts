import { UID, Callbacks } from 'grim.lib';
import { TFieldType } from './type';
import { IFieldStrategy, IFieldStrategyProps } from './strategy';
import { StrategyFactory } from './strategy-factory';

interface ISchemaProps {
    type?: TFieldType;
    strategy?: IFieldStrategyProps;
}

interface IUISchemaProps {}

interface IEventsProps {}

export interface IField {

}

export class Field implements IField {
    protected schema: ISchemaProps;

    protected uischema: IUISchemaProps;

    protected events: Callbacks;

    protected fieldStrategy: IFieldStrategy;

    constructor(schema: ISchemaProps, uischema: IUISchemaProps, events: IEventsProps) {
        const {
            type,
            strategy,
        } = schema;

        this.schema = {
            type: strategy.type || type,
        };

        this.uischema = uischema;

        this.events = new Callbacks(events as any);

        this.fieldStrategy = (new StrategyFactory()).create(strategy || { type });
    }

    protected getStrategy() {

    }
}
