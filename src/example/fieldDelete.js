// clearField的验证

import React, { Component } from 'react';
import { createForm } from 'rc-form';

class FieldDeleteText extends Component {
  state = {
    uuid: 0,
  };

  addItem = () => {
    const { form } = this.props;
    let { uuid } = this.state;

    const keys = form.getFieldValue('keys');

    const nextKeys = keys.concat(uuid);
    this.setState({
      uuid: uuid + 1,
    });

    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  removeItem = index => {
    const { form } = this.props;

    const keys = form.getFieldValue('keys');

    console.log(index, keys);
    form.setFieldsValue({
      keys: keys.filter(i => i !== index),
    });
  };

  validate = () => {
    const { form } = this.props;

    let errors;
    form.validateFields((err, values) => {
      if (err) errors = err;
    });

    console.log(errors);
    return errors;
  };

  render() {
    const { form } = this.props;

    form.getFieldDecorator('keys', { initialValue: [] });

    const keys = form.getFieldValue('keys');

    return (
      <div>
        {keys.map(item => {
          return (
            <div>
              {form.getFieldDecorator(`name-${item}`, {
                rules: [{ required: true, message: '必填' }],
              })(<input />)}
              <span
                onClick={() => {
                  this.removeItem(item);
                }}
              >
                delete
              </span>
            </div>
          );
        })}
        <div
          onClick={() => {
            this.addItem();
          }}
        >
          add
        </div>
        <div
          onClick={() => {
            this.validate();
          }}
        >
          validate
        </div>
      </div>
    );
  }
}

export default createForm()(FieldDeleteText);
