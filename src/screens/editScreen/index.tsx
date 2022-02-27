import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { ContentContainer, PageContainer } from '../../theme';
import MemberForm from '../../components/memberForm';
import { useForm } from 'antd/es/form/Form';
import { MemberAppState, MemberProps } from '../../ducks/types';
import ExitButton from '../../components/exitButton';
import { connect, useDispatch } from 'react-redux';
import { Screens, ScreenProps } from '../../App';
import { deleteMember, editMember } from '../../ducks/thunks';

interface EditScreenProps extends ScreenProps {
  readonly id?: number;
}

const EditScreen: React.FC<EditScreenProps> = ({
  id = 0,
  members,
  setCurrentScreen,
}) => {
  const [editMemberForm] = useForm();
  const dispatch = useDispatch();

  const dispatchEditMember = async (newMember: MemberProps) => {
    await dispatch(editMember(id, newMember));
    setCurrentScreen({ screen: Screens.LIST });
  };

  const dispatchDeleteMember = async () => {
    await dispatch(deleteMember(id));
    setCurrentScreen({ screen: Screens.LIST });
  };

  return (
    <PageContainer>
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
    </PageContainer>
  );
};

const mapStateToProps = (state: MemberAppState) => {
  return {
    members: state.members,
  };
};
export default connect(mapStateToProps)(EditScreen);
