import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { BLUE, ContentContainer, Line, ScreenContainer } from '../../theme';
import { MemberAppState, MemberProps } from '../../ducks/types';
import MemberPortfolio from '../../components/memberPortfolio';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Screens, ScreenProps } from '../../App';
import { connect } from 'react-redux';
import { List } from 'antd';

// An icon to click on to navigate to the Add screen
const AddIcon = styled(PlusOutlined)`
  color: ${BLUE};
  font-size: 24px;
  float: right;
`;

// A screen where users can view all their team members and navigate to Add/Edit screens
const ListScreen: React.FC<ScreenProps> = ({ members, setCurrentScreen }) => {
  return (
    <ScreenContainer>
      <ContentContainer>
        <AddIcon onClick={() => setCurrentScreen({ screen: Screens.ADD })} />
        <ScreenHeader
          title={'Team members'}
          subtitle={`You have ${members.length} team members.`}
        />
        <Line />
        <List
          dataSource={members}
          renderItem={(member: MemberProps, id: number) => {
            return (
              <MemberPortfolio
                key={id}
                member={{ id, ...member }}
                setCurrentScreen={setCurrentScreen}
              />
            );
          }}
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
export default connect(mapStateToProps)(ListScreen);
