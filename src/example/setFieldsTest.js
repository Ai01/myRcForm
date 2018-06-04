import React, { Component } from 'react';
import { createForm } from 'rc-form';

class SetFieldsTest extends Component {
  componentDidMount() {
    this.props.form.getFieldProps('a');
    this.props.form.setFields({ a: { value: 'a', errors: ['test'] }});
  }

  render() {
    return (
      <div>
        <h1>setFieldsTest</h1>
        <p>l have already setFields(a,b,c) in componentWillMount lifecycle</p>
        <button
          onClick={() => {
            const fields = this.props.form.getFieldsValue();
            const error = this.props.form.getFieldsError();
            console.log(fields, error);
          }}
        >
          test(check the console)
        </button>
      </div>
    );
  }
}

export default createForm()(SetFieldsTest);
