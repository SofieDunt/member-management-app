import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { ContentContainer, PageContainer, Line, BLUE } from '../../theme';
import { MemberProps, MemberRoles } from '../../ducks/types';
import MemberPortfolio from '../../components/memberPortfolio';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const AddIcon = styled(PlusOutlined)`
  color: ${BLUE};
  font-size: 24px;
  float: right;
`;

const ListScreen: React.FC = () => {
  // todo connect to store
  const memberList: MemberProps[] = [
    {
      firstName: 'First',
      lastName: 'Last',
      email: 'email@email.com',
      phone: '111-222-3333',
      role: MemberRoles.ADMIN,
    },
    {
      firstName: 'Second',
      lastName: 'Again',
      email: 'again@email.com',
      phone: '777-888-9999',
      role: MemberRoles.REGULAR,
    },
    {
      firstName: 'Second',
      lastName: 'Again',
      email: 'again@email.com',
      phone: '777-888-9999',
      role: MemberRoles.REGULAR,
    },
    {
      firstName: 'Second',
      lastName: 'Again',
      email: 'again@email.com',
      phone: '777-888-9999',
      role: MemberRoles.REGULAR,
    },
  ];

  return (
    <PageContainer>
      <ContentContainer>
        <AddIcon />
        <ScreenHeader
          title={'Team members'}
          subtitle={`You have ${memberList.length} team members.`}
        />
          <Line />
          {memberList.map((member: MemberProps) => {
            return <MemberPortfolio member={member} />;
          })}
      </ContentContainer>
    </PageContainer>
  );
};

export default ListScreen;
