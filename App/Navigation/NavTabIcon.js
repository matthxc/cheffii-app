import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import styled from 'styled-components';

const CustomIcon = styled(Icon)`
  color: ${props => props.color};
`;

const NavTabIcon = ({ tintColor, testIDTabName, iconName, iconType }) => (
  <View testID={testIDTabName}>
    <CustomIcon name={iconName} type={iconType} color={tintColor} />
  </View>
);

NavTabIcon.defaultProps = {
  iconType: 'Ionicons',
};

NavTabIcon.propTypes = {
  tintColor: PropTypes.any.isRequired,
  testIDTabName: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string,
};

export default NavTabIcon;
