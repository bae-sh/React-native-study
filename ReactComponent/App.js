import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextPropTypes,
  TextInput,
  Pressable,
} from 'react-native';
import styled from 'styled-components';

const App = () => {
  const name = 'bae';
  return (
    <View>
      {/* <Count></Count>
      <EventInput></EventInput>
      <Button2></Button2>

      <View style={textStyle.container}>
        <Text style={[textStyle.text, {color: 'green'}]}>text</Text>
        <Text style={textStyle.error}>erorr</Text>
      </View> */}
      <View style={[styles.container, styles.header]}></View>
      <View style={[styles.container, styles.contents]}></View>
      <View style={[styles.container, styles.footer]}></View>
    </View>
  );
};
const ButtonContainer = styled.TouchableOpacity`
  background-color: #9b59b6;
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;
const Button2 = props => {
  return (
    <Pressable style={{backgroundColor: 'green', width: 200, backg}}>
      <Text>123</Text>
    </Pressable>
  );
};
function EventInput(props) {
  let [text, setText] = useState('2');
  return (
    <View>
      <TextInput
        style={{borderWidth: 1, padding: 10, fontSize: 20}}
        placeholder="Enter a text.."
        onChange={e => {
          setText(e.nativeEvent.text);
        }}></TextInput>
    </View>
  );
}

function MyButton(props) {
  return (
    <TouchableOpacity
      style={{backgroundColor: 'blue', margin: 10, padding: 16}}
      onPress={() => props.onPress()}>
      <Text style={{color: 'white', fontSize: 24}}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function Count() {
  let [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <MyButton
        title="+1"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <MyButton
        title="-1"
        onPress={() => {
          setCount(count - 1);
        }}></MyButton>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  header: {
    height: 80,
    backgroundColor: 'red',
  },
  contents: {
    backgroundColor: 'yellow',
    height: 320,
  },
  footer: {
    height: 80,
    backgroundColor: 'green',
  },
});
let textStyle = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
    backgroundColor: 'yellow',
    margin: 20,
  },
  error: {
    fontWeight: '400',
    color: 'red',
  },
});
export default App;
