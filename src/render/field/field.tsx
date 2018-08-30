import * as React from 'react';
import { FormGroup } from '../form-group/element';
import { IField } from '../../field/field';
import { FormGroupLabel } from '../form-group/label';
import { FormGroupError } from '../form-group/error';

interface IProps {
    field: IField;
    widget: any;
}

export class Field extends React.Component<IProps, any> {
    public render(): any {
        const { field, widget } = this.props;
        const Widget = widget || <div>TODO create by factory</div>;

        return <FormGroup field={field}>
            <FormGroupLabel field={field} />
            {Widget}
            <FormGroupError field={field} />
        </FormGroup>
    }
}
