import React, { useState } from 'react';
import styled from 'styled-components';
import { Radio, Typography } from 'antd';
import { MemberRoles } from '../../ducks/types';
import { BACKGROUND_GREY } from '../../theme';

const { Text } = Typography;

const RoleSelectRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: solid 2px ${BACKGROUND_GREY};
`;

interface RoleSelectProps {
  readonly onSelect: (role: MemberRoles) => void;
  readonly defaultChecked: MemberRoles;
}

const RoleSelect: React.FC<RoleSelectProps> = ({
  onSelect,
  defaultChecked,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const onClick = (clicked: MemberRoles) => {
    setChecked(clicked);
    onSelect(clicked);
  };

  return (
    <>
      <RoleSelectRow>
        <Text>Regular - Can't delete members</Text>
        <Radio
          onClick={() => onClick(MemberRoles.REGULAR)}
          checked={checked === MemberRoles.REGULAR}
        />
      </RoleSelectRow>
      <RoleSelectRow>
        <Text>Admin - Can delete members</Text>
        <Radio
          onClick={() => onClick(MemberRoles.ADMIN)}
          checked={checked === MemberRoles.ADMIN}
        />
      </RoleSelectRow>
    </>
  );
};

export default RoleSelect;
