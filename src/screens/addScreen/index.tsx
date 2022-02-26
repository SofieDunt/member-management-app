import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { PageContainer, ContentContainer, Line } from '../../theme';
import { MemberProps } from '../../ducks/types';
import { useForm } from 'antd/es/form/Form';
import MemberForm from '../../components/memberForm';
import ExitButton from '../../components/exitButton';

const AddScreen: React.FC = () => {
  const [addMemberForm] = useForm();

  // todo implement
  const addMember = (member: MemberProps) => {};

  return (
    <PageContainer>
      <ContentContainer>
        <ExitButton />
        <ScreenHeader
          title={'Add a team member'}
          subtitle={'Set email, location and role.'}
        />
        <Line />
        <MemberForm onSubmit={addMember} formInstance={addMemberForm} />
      </ContentContainer>
    </PageContainer>
  );
};

export default AddScreen;
