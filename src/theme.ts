import styled from 'styled-components';

export const WHITE = '#FFF';
export const DARK_GREY = '#4E4D4D';
export const LIGHT_GREY = '#9EA2A2';
export const BACKGROUND_GREY = '#EFEFEF';
export const BLUE = '#0055ff';

export const PageContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 5vh;
  gap: 0;
  height: max-content;
`;

export const ContentContainer = styled.div`
  box-sizing: border-box;
  background: ${WHITE};
  width: 50%;
  min-height: 90vh;
  padding: 20px;
`;

export const Line = styled.div`
  height: 2px;
  width: 100%;
  background: ${BACKGROUND_GREY};
`;
