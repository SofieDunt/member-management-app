import React from 'react';
import { MemberProps, MemberRoles } from '../../ducks/types';
import { Avatar } from 'antd';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import { Line, LIGHT_GREY, WHITE, BlockText, LightText } from '../../theme';

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

interface MemberPortfolioProps {
  readonly member: MemberProps;
}

const MemberPortfolio: React.FC<MemberPortfolioProps> = ({ member }) => {
  return (
    <>
      <MemberPortfolioContainer>
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
