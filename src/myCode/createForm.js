import React, { Component } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import createFieldsStore from './createFieldStore';

const createForm = WrappedComponent => {
  // form应该是一个component
  class Form extends Component {
    constructor(props) {
      super(props);
      this.getFieldDecorator = this.getFieldDecorator.bind(this);
      this.setFieldValue = this.setFieldValue.bind(this);
      this.getForm = this.getForm.bind(this);
      this.fieldsStore = createFieldsStore();
    }

    getFieldDecorator(id, options) {
      return fieldElem => {
        return React.cloneElement(fieldElem, {
          ...this.fieldsStore.getFieldValuePropValue(id),
          onChange: e => {
            this.setFieldValue(id, e.target.value);
          },
        });
      };
    }

    setFieldValue(fieldName, value) {
      this.fieldsStore.setFields({
        [fieldName]: value,
      });

      this.forceUpdate();
    }

    getForm() {
      return {
        getFieldsValue: this.fieldsStore.getFieldsValue,
        getFieldValue: this.fieldsStore.getFieldValue,
        getFieldInstance: this.getFieldInstance,
        setFieldsValue: this.setFieldsValue,
        setFieldValue: this.setFieldValue,
        setFields: this.setFields,
        setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
        getFieldDecorator: this.getFieldDecorator,
        getFieldProps: this.getFieldProps,
        getFieldsError: this.fieldsStore.getFieldsError,
        getFieldError: this.fieldsStore.getFieldError,
        isFieldValidating: this.fieldsStore.isFieldValidating,
        isFieldsValidating: this.fieldsStore.isFieldsValidating,
        isFieldsTouched: this.fieldsStore.isFieldsTouched,
        isFieldTouched: this.fieldsStore.isFieldTouched,
        isSubmitting: this.isSubmitting,
        submit: this.submit,
        validateFields: this.validateFields,
        resetFields: this.resetFields,
      };
    }

    render() {
      const formProps = this.getForm();

      const props = {
        form: formProps,
      };

      return <WrappedComponent {...props} />;
    }
  }

  return hoistStatics(Form, WrappedComponent);
};

export default createForm;
