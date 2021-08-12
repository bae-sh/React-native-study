import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import { Image, Input, Button } from "../components";
import { images } from "../utils/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail, removeWhitespace } from "../utils/common";
import { useSafeAreaInsets } from "react-native-safe-area-context"; // 안됨?

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;
const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;
const Login = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef(); //next 누를 시 포커스 이동
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!(email && password && !errorMessage));
  }, [email, password, errorMessage]);
  const _handleEmailChange = (email) => {
    const chagedEmail = removeWhitespace(email);
    setEmail(chagedEmail);
    setErrorMessage(
      validateEmail(chagedEmail) ? "" : "Please verify your email."
    );
  };
  const _handlePasswordChange = (password) => {
    setPassword(removeWhitespace(password));
  };
  const _handleLoginButtonPress = () => {};
  return (
    //다른 배경 터치시 포커스 이동
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container insets={insets}>
        <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
        <Input
          label="Email"
          value={email}
          onChangeText={_handleEmailChange} //왜 ()를 안쓰는가? function이 아니기 떄문 parameter 은 value 값으로 보내지는거같음
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={_handlePasswordChange}
          onSubmitEditing={_handleLoginButtonPress}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <Button
          title="Login"
          onPress={_handleLoginButtonPress}
          disabled={disabled}
        />
        <Button
          title="Sign up with email"
          onPress={() => navigation.navigate("Signup")}
          isFilled={false}
        ></Button>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
