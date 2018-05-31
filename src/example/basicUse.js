import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';

class BasicForm extends Component {
  static propTypes = {
    form: formShape
  }

  submit = () => {
    const { form } = this.props;
    form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  render() {
    const { form } = this.props;
    const { getFieldProps, getFieldError } = form;

    let errors;

    return (
      <div>
        <input {...getFieldProps('name', {
          rules: [{required: true, message: '姓名必填'}],
        })}/>
        <div>
          {(errors = getFieldError('name')) ? errors.join(',') : null}
        </div>
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }

}

export default createForm()(BasicForm);
