import React from 'react';
import {Input} from "../../common/form/formFields";
import {required} from "../../validators/required";
import {Field} from "redux-form";
import Form from 'react-bootstrap/Form';
import {formWrapper} from "../../common/form/formWrapper";
import {FormNames} from "../../constants";

const KeyForm = () => (
    <Form>
      <Form.Row>
        <Form.Label column lg={1}>Key</Form.Label>
        <Field component={Input} type="text" name="key" label="Key" placeholder="Enter Key"
               validate={required}/>
      </Form.Row>
    </Form>
  );

export default formWrapper({form: FormNames.Key})(KeyForm);