import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  border: 1px solid #757575;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
`;
const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const refName = useRef(null);
  const refEmail = useRef(null);

  useEffect(() => {
    console.log(`name: ${name}, email: ${email}\n`);
  });
  useEffect(() => {
    console.log('mount');
    refName.current.focus();
    return console.log('unmount'); //언마운트 될떄
  }, []); //마운트 될때
  return (
    <>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Email: {email}</StyledText>
      <StyledTextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="name"
        ref={refName}
        returnKeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
      />
      <StyledTextInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
        ref={refEmail}
        returnKeyType="done"
      />
    </>
  );
};

export default Form;
