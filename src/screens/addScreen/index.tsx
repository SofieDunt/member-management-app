import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { ScreenContainer, ContentContainer, Line } from '../../theme';
import { MemberAppState, MemberProps } from '../../ducks/types';
import { useForm } from 'antd/es/form/Form';
import MemberForm from '../../components/memberForm';
import ExitButton from '../../components/exitButton';
import { connect, useDispatch } from 'react-redux';
import { Screens, ScreenProps } from '../../App';
import { addMember } from '../../ducks/thunks';

// A screen where users can add new members (and return to List Screen upon completion)
const AddScreen: React.FC<ScreenProps> = ({ setCurrentScreen }) => {
  const [addMemberForm] = useForm();
  const dispatch = useDispatch();

  const dispatchAddMember = (member: MemberProps) => {
    // add new member to store
    dispatch(addMember(member));

    // navigate back to list screen
    setCurrentScreen({ screen: Screens.LIST });
  };

  return (
    <ScreenContainer>
      <ContentContainer>
        <ExitButton setCurrentScreen={setCurrentScreen} />
        <ScreenHeader
          title={'Add a team member'}
          subtitle={'Set email, location and role.'}
        />
        <Line />
        <MemberForm onSubmit={dispatchAddMember} formInstance={addMemberForm} />
      </ContentContainer>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: MemberAppState) => {
  return {
    members: state.members,
  };
};
export default connect(mapStateToProps)(AddScreen);
