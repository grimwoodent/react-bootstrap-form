import * as React from 'react';
import { IField } from '../../field/field';

interface IProps {
    field: IField;
    className?: string;
}

export class FormGroupLabel extends React.Component<IProps, any> {
    public render(): any {
        const { field, className } = this.props;
        const id = ''; // field get
        const label = ''; // field get

        return <label className={className} htmlFor={id}>
            {label}
        </label>;
    }
}
