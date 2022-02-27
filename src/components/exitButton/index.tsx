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

interface ExitButtonProps {
  readonly setCurrentScreen: (screen: CurrentScreenProps) => void;
}

const ExitButton: React.FC<ExitButtonProps> = ({ setCurrentScreen }) => {
  return (
    <ExitIcon onClick={() => setCurrentScreen({ screen: Screens.LIST })} />
  );
};

export default ExitButton;
