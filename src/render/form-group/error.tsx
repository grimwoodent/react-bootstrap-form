import * as React from 'react';
import { IField } from '../../field/field';

interface IProps {
    field: IField;
    className?: string;
}

export class FormGroupError extends React.Component<IProps, any> {
    public render(): any {
        const { field, className } = this.props;
        const schema = field.getSchema();
        const error = schema.getError();

        return error ? <p className={`help-block ${className || ''}`}>{error}</p> : null;
    }
}
