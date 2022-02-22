import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { PageContainer, ContentContainer } from '../../theme';

const AddScreen: React.FC = () => {
  // todo implement
  return (
    <PageContainer>
      <ContentContainer>
        <ScreenHeader
          title={'Add a team member'}
          subtitle={'Set email, location and role.'}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default AddScreen;
