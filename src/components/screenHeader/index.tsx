import React from 'react';
import styled from 'styled-components';
import { DARK_GREY, LIGHT_GREY } from '../../theme';

const ScreenHeaderContainer = styled.div`
  margin-bottom: 40px;
`;

const ScreenTitle = styled.h1`
  color: ${DARK_GREY};
  font-size: 20px;
`;

const ScreenSubtitle = styled.p`
  color: ${LIGHT_GREY};
  font-size: 12px;
`;

// Props for component content
interface ScreenHeaderProps {
  readonly title: string;
  readonly subtitle: string;
}

// A component to style the screen title/subtitle
const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle }) => {
  return (
    <ScreenHeaderContainer>
      <ScreenTitle>{title}</ScreenTitle>
      <ScreenSubtitle>{subtitle}</ScreenSubtitle>
    </ScreenHeaderContainer>
  );
};

export default ScreenHeader;
