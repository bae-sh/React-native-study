import React from 'react';
import styled from 'styled-components';
import User from './components/User';
import UserContext from './contexts/User';
import {UserProvier} from './contexts/User';
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  return (
    <UserProvier>
      <Container>
        <User />
      </Container>
    </UserProvier>
  );
};

export default App;
