import React from 'react';
import {FileInput, Multiselect, Input} from "../../common/form/formFields";
import {Card, Form} from "react-bootstrap";
import Button from "../../common/Button";
import {Field} from "redux-form";
import {formWrapper} from "../../common/form/formWrapper";
import {FormNames} from "../../constants";
import './UploadFile.scss';
import {required} from "../../validators/required";
import _ from 'lodash';
import renderIf from 'render-if';

const UploadFile = ({users, handleSubmit, formValues}) => {
  return (
    <div className="upload-form-container">
      <Card>
        <Card.Body>
          <Form className="upload-form" onSubmit={handleSubmit}>
            <Form.Row className="upload-form-row">
              <Form.Label column lg={1}>Choose Users</Form.Label>
              <Field component={Multiselect} name="allowedTo" placeholder="Choose Users" options={users} valueKey="id" labelKey="email" disabled={!_.get(formValues, "isPrivate")}/>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={1}>Is Private</Form.Label>
              <Field component={Input} name="isPrivate" type="checkbox"/>
              <Form.Label column lg={1}>Should Encrypt</Form.Label>
              <Field component={Input} name="shouldEncrypt" type="checkbox"/>
              <Field component={FileInput} name="file" title="Choose File" validate={required}/>
            </Form.Row>
            {renderIf(_.get(formValues, 'shouldEncrypt', false))(() => (
              <Form.Row>
                <Form.Label column lg={1}>Key</Form.Label>
                <Field component={Input} name="key" validate={required}/>
              </Form.Row>
            ))}
            <div className="upload-form-actions">
              <Button title="Upload" type="submit" disabled={!formValues || ! formValues.file}/>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
};

export default  formWrapper({form: FormNames.UploadFileForm})(UploadFile);