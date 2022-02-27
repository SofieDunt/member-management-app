import React from 'react';
import { MemberProps, MemberRoles } from '../../ducks/types';
import { Button, Form, FormInstance, Input } from 'antd';
import { BACKGROUND_GREY, TextHeader } from '../../theme';
import styled from 'styled-components';
import RoleSelect from '../roleSelect';

const DeleteButton = styled(Button)`
  margin-top: 25px;
  float: left;
  border: 1px solid ${BACKGROUND_GREY};
`;

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

// Props for the form for what to do on completion and form state
interface MemberFormProps {
  readonly onSubmit: (memberRequest: MemberProps) => void;
  readonly onDelete?: () => void;
  readonly formInstance: FormInstance;
  readonly defaultMember?: MemberProps;
}

// A form with items for all member props with two possible actions: save and delete
const MemberForm: React.FC<MemberFormProps> = ({
  onSubmit,
  onDelete,
  formInstance,
  defaultMember,
}) => {
  // If a default member was given, set the form to show the default values
  if (defaultMember !== undefined) {
    formInstance.setFields([
      { name: 'firstName', value: defaultMember.firstName },
      { name: 'lastName', value: defaultMember.lastName },
      { name: 'email', value: defaultMember.email },
      { name: 'phone', value: defaultMember.phone },
      { name: 'role', value: defaultMember.role },
    ]);
  }

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

      <Form.Item name={'role'}>
        <RoleSelect
          onSelect={(role) =>
            formInstance.setFields([{ name: 'role', value: role }])
          }
          defaultChecked={
            defaultMember ? defaultMember.role : MemberRoles.REGULAR
          }
        />
      </Form.Item>

      {onDelete && (
        <DeleteButton danger size={'large'} onClick={onDelete}>
          Delete
        </DeleteButton>
      )}

      <SaveButton type={'primary'} htmlType={'submit'} size={'large'}>
        Save
      </SaveButton>
    </Form>
  );
};

export default MemberForm;
