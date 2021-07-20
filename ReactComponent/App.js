import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextPropTypes,
} from 'react-native';

function App() {
  const name = 'bae';
  return (
    <View style={styles.container}>
      {/* <Button
          title="버튼"
          onPress={() => {
            alert('Click!!');
          }}
        /> */}
      <Count></Count>
    </View>
  );
}

function MyButton(props) {
  return (
    <Button
      title={props.title}
      style={{
        backgroundColor: '#3498db',
        padding: 16,
        margin: 10,
        borderRadius: 8,
      }}
      onPress={() => {
        props.onPress();
      }}></Button>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
