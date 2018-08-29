import { TFieldType } from './type';

export interface IFieldStrategyProps {
    type: TFieldType;
    toValue?: (data: any) => any;
    toData?: (value: any) => any;
}

export interface IFieldStrategy {
    getType(): TFieldType;
    getValueByData(data: any): any;
    getDataByValue(value: any): any;
}

export class FieldStrategy implements IFieldStrategy {
    protected props: IFieldStrategyProps;

    constructor(props: IFieldStrategyProps) {
        this.props = props;
    }

    public getType(): TFieldType {
        return this.props.type;
    }

    public getValueByData(data: any): any {
        return typeof(this.props.toValue) === 'function' ? this.props.toValue(data) : data;
    }

    public getDataByValue(value: any): any {
        return typeof(this.props.toData) === 'function' ? this.props.toData(value) : value;
    }
}
