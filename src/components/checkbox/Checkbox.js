import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { styles } from './styles';

const Checkbox = ({ checked, onPress, label, styleType }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { borderColor: theme[styleType].border, backgroundColor: theme[styleType].background }
      ]}
    >
      <View style={[styles.checkbox, { backgroundColor: checked ? theme[styleType].primary : 'transparent' }]} />
      {label && <Text style={[styles.label, { color: theme[styleType].text }]}>{label}</Text>}
    </TouchableOpacity>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string,
  styleType: PropTypes.oneOf(['default', 'outlined', 'filled']),
};

Checkbox.defaultProps = {
  label: '',
  styleType: 'default',
};

export default Checkbox;
