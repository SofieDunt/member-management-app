import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { ContentContainer, ScreenContainer } from '../../theme';
import MemberForm from '../../components/memberForm';
import { useForm } from 'antd/es/form/Form';
import { MemberAppState, MemberProps } from '../../ducks/types';
import ExitButton from '../../components/exitButton';
import { connect, useDispatch } from 'react-redux';
import { Screens, ScreenProps } from '../../App';
import { deleteMember, editMember } from '../../ducks/thunks';

// Extends the screen props to also indicate the current member being edited
// ASSUME the given id will be valid
interface EditScreenProps extends ScreenProps {
  readonly id?: number;
}

// A screen where users can edit or delete existing members (and return to List Screen upon completion)
const EditScreen: React.FC<EditScreenProps> = ({
  id = 0,
  members,
  setCurrentScreen,
}) => {
  const [editMemberForm] = useForm();
  const dispatch = useDispatch();

  const dispatchEditMember = async (newMember: MemberProps) => {
    // edit member in store
    dispatch(editMember(id, newMember));

    // navigate back to list screen
    setCurrentScreen({ screen: Screens.LIST });
  };

  const dispatchDeleteMember = async () => {
    // delete member in store
    dispatch(deleteMember(id));

    // navigate back to list screen
    setCurrentScreen({ screen: Screens.LIST });
  };

  return (
    <ScreenContainer>
      <ContentContainer>
        <ExitButton setCurrentScreen={setCurrentScreen} />
        <ScreenHeader
          title={'Edit team member'}
          subtitle={'Edit contact info, location and role.'}
        />
        <MemberForm
          onSubmit={dispatchEditMember}
          onDelete={dispatchDeleteMember}
          formInstance={editMemberForm}
          defaultMember={members[id]}
        />
      </ContentContainer>
    </ScreenContainer>
  );
};

const mapStateToProps = (state: MemberAppState) => {
  return {
    members: state.members,
  };
};
export default connect(mapStateToProps)(EditScreen);
