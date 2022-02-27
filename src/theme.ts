import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

export const WHITE = '#FFF';
export const DARK_GREY = '#4E4D4D';
export const LIGHT_GREY = '#9EA2A2';
export const BACKGROUND_GREY = '#EFEFEF';
export const BLUE = '#0055ff';

// A container to center the screen in the browser window
export const ScreenContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 5vh;
  gap: 0;
  height: max-content;
`;

// A container for the content of the screen to be in a white box
export const ContentContainer = styled.div`
  box-sizing: border-box;
  background: ${WHITE};
  width: 50%;
  min-height: 90vh;
  padding: 20px;
`;

// A thin grey line
export const Line = styled.div`
  height: 2px;
  width: 100%;
  background: ${BACKGROUND_GREY};
`;

// Block-display text
export const BlockText = styled(Text)`
  display: block;
  font-size: 13px;
  line-height: 20px;
`;

// Block-display light grey text
export const LightText = styled(BlockText)`
  color: ${LIGHT_GREY};
`;

// Text to use as a header
export const TextHeader = styled(Text)`
  display: block;
  font-size: 16px;
  line-height: 20px;
  color: ${DARK_GREY};
  margin: 20px 0;
`;
