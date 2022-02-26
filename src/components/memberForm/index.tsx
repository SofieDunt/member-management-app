import React from 'react';
import { MemberProps, MemberRoles } from '../../ducks/types';
import { Button, Form, FormInstance, Input } from 'antd';
import { BACKGROUND_GREY, TextHeader } from '../../theme';
import styled from 'styled-components';
import RoleSelect from '../roleSelect';

const SaveButton = styled(Button)`
  margin-top: 25px;
  float: right;
`;

const FormInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: solid 1px ${BACKGROUND_GREY};
  border-radius: 5px;
`;

interface MemberFormProps {
  readonly onSubmit: (memberRequest: MemberProps) => void;
  readonly formInstance: FormInstance;
}

const MemberForm: React.FC<MemberFormProps> = ({ onSubmit, formInstance }) => {
  return (
    <Form form={formInstance} onFinish={onSubmit}>
      <TextHeader strong>Info</TextHeader>
      <Form.Item
        name={'firstName'}
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <FormInput placeholder={'First Name'} />
      </Form.Item>
      <Form.Item
        name={'lastName'}
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <FormInput placeholder={'Last Name'} />
      </Form.Item>
      <Form.Item
        name={'email'}
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <FormInput placeholder={'Email'} />
      </Form.Item>
      <Form.Item
        name={'phone'}
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <FormInput placeholder={'Phone Number'} />
      </Form.Item>
      <TextHeader strong>Role</TextHeader>
      <RoleSelect
        onSelect={(role) =>
          formInstance.setFields([{ name: 'role', value: role }])
        }
        defaultChecked={MemberRoles.REGULAR}
      />

      <SaveButton type={'primary'} htmlType={'submit'} size={'large'}>
        Save
      </SaveButton>
    </Form>
  );
};

export default MemberForm;
