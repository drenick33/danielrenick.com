import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

const Contact = (props: any) => {
  const [disableSubmit, setDisableSubmit] = useState(true);

  const onFinish = (values: any) => {
    console.log(values);
    //Send Email
  };

  const onFieldsChange = (_: any, allFields: any) => {
    const hasErrors = allFields.some((el: any) => el.errors.length);
    const hasEmptyFields = allFields.some((el: any) => !el.value);
    setDisableSubmit(hasErrors || hasEmptyFields);
  };

  return (
    <div>
      <h1>Message Me</h1>
      <Form size='large' onFieldsChange={onFieldsChange} onFinish={onFinish}>
        <Form.Item name='email' rules={[{ type: 'email' }]} required={true}>
          <Input
            addonBefore={<MailOutlined className='site-form-item-icon' />}
            placeholder='Email'
          />
        </Form.Item>
        <Form.Item name='name' required={true}>
          <Input
            addonBefore={<UserOutlined className='site-form-item-icon' />}
            placeholder='Name'
          />
        </Form.Item>
        <Form.Item name='message' required={true}>
          <Input.TextArea placeholder='Message' rows={5} />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
            disabled={disableSubmit}
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
