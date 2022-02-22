import React from 'react';
import ScreenHeader from '../../components/screenHeader';
import { PageContainer, ContentContainer } from '../../theme';

const EditScreen: React.FC = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <ScreenHeader
          title={'Edit team member'}
          subtitle={'Edit contact info, location and role.'}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default EditScreen;
