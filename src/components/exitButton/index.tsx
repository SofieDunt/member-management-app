import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { BLUE } from '../../theme';
import { Routes } from '../../App';
import { Link } from 'react-router-dom';

export const ExitIcon = styled(CloseOutlined)`
  color: ${BLUE};
  font-size: 24px;
  float: right;
`;

const ExitButton: React.FC = () => {
  return (
    <Link to={Routes.LIST}>
      <ExitIcon />
    </Link>
  );
};

export default ExitButton;
