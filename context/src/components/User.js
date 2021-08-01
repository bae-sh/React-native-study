import React from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/User';
import {UserComsumer} from '../contexts/User';
const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;
const User = () => {
  return (
    <UserComsumer>
      {({user}) => <StyledText> Name: {user.name}</StyledText>}
    </UserComsumer>
  );
};

export default User;
