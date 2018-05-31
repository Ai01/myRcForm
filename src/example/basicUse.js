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
        <input {...getFieldProps('normal')}/>
        <input {...getFieldProps('required', {
          onChange(){}, // have to write original onChange here if you need
          rules: [{required: true}],
        })}/>
        {(errors = getFieldError('required')) ? errors.join(',') : null}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }

}

export default createForm()(BasicForm);
