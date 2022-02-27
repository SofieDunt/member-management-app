import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { PageContainer, ContentContainer, Line } from '../../theme';
import { MemberAppState, MemberProps } from '../../ducks/types';
import { useForm } from 'antd/es/form/Form';
import MemberForm from '../../components/memberForm';
import ExitButton from '../../components/exitButton';
import { connect, useDispatch } from 'react-redux';
import { Screens, ScreenProps } from '../../App';
import { addMember } from '../../ducks/thunks';

const AddScreen: React.FC<ScreenProps> = ({ setCurrentScreen }) => {
  const [addMemberForm] = useForm();
  const dispatch = useDispatch();

  const dispatchAddMember = (member: MemberProps) => {
    dispatch(addMember(member));
    setCurrentScreen({ screen: Screens.LIST });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <ExitButton setCurrentScreen={setCurrentScreen} />
        <ScreenHeader
          title={'Add a team member'}
          subtitle={'Set email, location and role.'}
        />
        <Line />
        <MemberForm onSubmit={dispatchAddMember} formInstance={addMemberForm} />
      </ContentContainer>
    </PageContainer>
  );
};

const mapStateToProps = (state: MemberAppState) => {
  return {
    members: state.members,
  };
};
export default connect(mapStateToProps)(AddScreen);
