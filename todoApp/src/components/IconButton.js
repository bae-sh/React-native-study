import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {images} from '../images';
import Proptypes from 'prop-types';

const Icon = styled.Image`
  tint-color: ${({theme, completed}) => (completed ? theme.done : theme.text)};
  width: 30px;
  height: 30px;
  margin: 10px;
`;
const IconButton = ({type, onPressOut, id, completed}) => {
  const _onPressOut = () => {
    onPressOut(id);
  };
  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} completed={completed} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  onPressOut: () => {},
};
IconButton.propTypes = {
  type: Proptypes.oneOf(Object.values(images)).isRequired,
  onPressOut: Proptypes.func,
  id: Proptypes.string,
  completed: Proptypes.bool,
};
export default IconButton;
