import React, {useState} from 'react';
import styled from 'styled-components';
import Counter from './components/Counter';
import Button from './components/Button';
import Form from './components/Form';
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container>
      {/* <Counter /> */}
      <Button
        title={isVisible ? 'hide' : 'show'}
        onPress={() => setIsVisible(prev => !prev)}></Button>
      {isVisible && <Form />}
    </Container>
  );
};

export default App;
