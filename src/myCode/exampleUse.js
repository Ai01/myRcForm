import React, { Component } from 'react';
import createForm from './createForm';

class ExampleForm extends Component {
  render() {
    const { form } = this.props;
    const { getFieldDecorator, getFieldsValue, setFieldValue } = form;

    const style = { display: 'inline-block', margin: '5px 15px' };

    return (
      <div>
        <div>
          <div style={style}>a</div>
          <div style={style}>
            {getFieldDecorator('a', {
              onChange: () => {
                // getFieldsValue();
              },
            })(<input type="text" style={{ width: 100 }} />)}
          </div>
        </div>
        <div>
          <div style={style}>b</div>
          <div style={style}>
            {getFieldDecorator('b', {
              onChange: () => {
                getFieldsValue();
              },
            })(<input type="text" style={{ width: 100 }} />)}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setFieldValue('a', 'test');
            }}
          >
            点击重置a的值为test
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              console.log(getFieldsValue(['a', 'b']));
            }}
          >
            获取value(查看console)
          </button>
        </div>
      </div>
    );
  }
}

export default createForm(ExampleForm);
