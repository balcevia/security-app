import React from 'react';
import {Field} from "redux-form";
import {Input} from "../../common/form/formFields";
import {FormNames} from "../../constants";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "../../common/Button";
import {required} from "../../validators/required";
import './RegistrationForm.scss';
import {validatePassword, validatePasswordEquality} from "../../validators/passwordValidators";
import {emailValidator} from "../../validators/emailValidator";
import {formWrapper} from "../../common/form/formWrapper";

const RegistrationForm = ({onClick, handleSubmit}) => {
  return (
    <div className="registration-form-container">
      <Card>
        <Card.Body>
          <Form className="registration-form" onSubmit={handleSubmit}>
            <Form.Row className="registration-form-row">
              <Form.Label column lg={3}>Username</Form.Label>
              <Field component={Input} name="email" placeholder="Enter Email" validate={[required, emailValidator]}/>
            </Form.Row>
            <Form.Row className="registration-form-row">
              <Form.Label column lg={3}>Password</Form.Label>
              <Field component={Input} type="password" name="password" label="Password" placeholder="Enter Password"
                     validate={[required, validatePassword]}/>
            </Form.Row>
            <Form.Row className="registration-form-row">
              <Form.Label column lg={3}>Confirm Password</Form.Label>
              <Field component={Input} type="password" name="confirmPassword" label="Password" placeholder="Confirm Password"
                     validate={[required, validatePasswordEquality]}/>
            </Form.Row>
            <div className="registration-form-actions">
              <Button title="Sign Up" type="submit"/>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
};

export default formWrapper({form: FormNames.RegistrationForm})(RegistrationForm);