import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { PageContainer, ContentContainer, Line, BLUE } from '../../theme';
import { MemberProps } from '../../ducks/types';
import { useForm } from 'antd/es/form/Form';
import MemberForm from '../../components/memberForm';
import { Routes } from '../../App';
import { Link } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ExitIcon = styled(CloseOutlined)`
  color: ${BLUE};
  font-size: 24px;
  float: right;
`;

const AddScreen: React.FC = () => {
  const [addMemberForm] = useForm();

  // todo implement
  const addMember = (member: MemberProps) => {};

  return (
    <PageContainer>
      <ContentContainer>
        <Link to={Routes.LIST}>
          <ExitIcon />
        </Link>
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
