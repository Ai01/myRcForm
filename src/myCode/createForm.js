import React, { Component } from 'react';
// import hoistStatics from 'hoist-non-react-statics';
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

    getFieldProps(name, usersFieldOptions = {}){

    }

    getFieldDecorator(id, options) {
      // TODO: 返回的组件需要添加update函数。来实现在chang的时候update

      return fieldElem => {
        return React.cloneElement(fieldElem, {
          ...this.fieldsStore.getFieldValuePropValue(id),
          onChange: e => {
            //TODO: 应该将onChange注册到filedStore中
            this.setFieldValue(id, e.target.value);
          },
        });
      };
    }

    setFieldValue(fieldName, value) {
      this.fieldsStore.setFields({
        [fieldName]: value,
      });

      //TODO: 当field改变的时候不需要触发整个form的update
      //TODO: 应该触发field的onChange
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

  // return hoistStatics(Form, WrappedComponent);
  return Form;
};

export default createForm;
