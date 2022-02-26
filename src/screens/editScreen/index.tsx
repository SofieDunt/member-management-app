import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { PageContainer, ContentContainer } from '../../theme';
import MemberForm from '../../components/memberForm';
import { useForm } from 'antd/es/form/Form';
import { MemberProps } from '../../ducks/types';
import ExitButton from '../../components/exitButton';

const EditScreen: React.FC = () => {
  const [editMemberForm] = useForm();

  // todo implement
  const editMember = (member: MemberProps) => {};

  const deleteMember = () => {};

  return (
    <PageContainer>
      <ContentContainer>
        <ExitButton />
        <ScreenHeader
          title={'Edit team member'}
          subtitle={'Edit contact info, location and role.'}
        />
        <MemberForm
          onSubmit={editMember}
          onDelete={deleteMember}
          formInstance={editMemberForm}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default EditScreen;
