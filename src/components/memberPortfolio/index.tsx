import React from 'react';
import { IdMemberProps, MemberRoles } from '../../ducks/types';
import { Avatar } from 'antd';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { Line, LIGHT_GREY, WHITE, BlockText, LightText } from '../../theme';
import { CurrentScreenProps, Screens } from '../../App';

const MemberPortfolioContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 20px 0;
`;

const MemberInfoContainer = styled.div`
  display: inline-block;
`;

const MemberAvatar = styled(Avatar)`
  background: ${LIGHT_GREY};
  border-radius: 50%;
  text-align: center;
  color: ${WHITE};
`;

// Props for what informaation to display and to enable navigation
interface MemberPortfolioProps {
  readonly member: IdMemberProps;
  readonly setCurrentScreen: (screen: CurrentScreenProps) => void;
}

// A component to display information about a member and enable navigation to an Edit screen for that member
const MemberPortfolio: React.FC<MemberPortfolioProps> = ({
  member,
  setCurrentScreen,
}) => {
  const redirectToEdit = () => {
    setCurrentScreen({ screen: Screens.EDIT, member: member.id });
  };

  return (
    <>
      <MemberPortfolioContainer onClick={redirectToEdit}>
        <MemberAvatar size={40} icon={<UserOutlined />} />
        <MemberInfoContainer>
          <BlockText strong>{`${member.firstName} ${member.lastName}${
            member.role === MemberRoles.ADMIN ? ' (admin)' : ''
          }`}</BlockText>
          <LightText>{member.phone}</LightText>
          <LightText>{member.email}</LightText>
        </MemberInfoContainer>
      </MemberPortfolioContainer>
      <Line />
    </>
  );
};

export default MemberPortfolio;
