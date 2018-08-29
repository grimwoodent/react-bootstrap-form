import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Form from 'react-bootstrap-form';

const schema = {
    firstName: new Form.Field({
        type: 'string',
    }, {}, {})
};

ReactDom.render(<form>
    <Form.Render.FormGroup field={schema.firstName}>
        <Form.Render.FormGroupLabel field={schema.firstName} />
        <input
            className="form-control"
        />
        <Form.Render.FormGroupError field={schema.firstName} />
    </Form.Render.FormGroup>
</form>, document.getElementById('form'));
