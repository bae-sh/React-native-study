import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <StyledText>count: {count}</StyledText>
      <Button
        title="+"
        onPress={() => {
          setCount(prevCount => prevCount + 1); // 이전값을 가져와서 설정??
          console.log(`count: ${count}`);
        }}></Button>
      <Button
        title="-"
        onPress={() => {
          setCount(count - 1);
        }}></Button>
    </>
  );
};

export default Counter;
