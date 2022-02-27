import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { BLUE } from '../../theme';
import { CurrentScreenProps, Screens } from '../../App';

export const ExitIcon = styled(CloseOutlined)`
  color: ${BLUE};
  font-size: 24px;
  float: right;
`;

// Props to enable the button to redirect
interface ExitButtonProps {
  readonly setCurrentScreen: (screen: CurrentScreenProps) => void;
}

// A button that redirects back to the List screen
const ExitButton: React.FC<ExitButtonProps> = ({ setCurrentScreen }) => {
  return (
    <ExitIcon onClick={() => setCurrentScreen({ screen: Screens.LIST })} />
  );
};

export default ExitButton;
