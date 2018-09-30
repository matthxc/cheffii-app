import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'native-base';

const NavTabIcon = ({ tintColor, testIDTabName, iconName, iconType }) => (
  <View
    testID={testIDTabName}
    style={{
      width: 25,
      height: 25,
      padding: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Icon
      name={iconName}
      type={iconType}
      style={[
        {
          tintColor,
        },
      ]}
    />
  </View>
);

NavTabIcon.defaultProps = {
  iconType: 'Entypo',
};

NavTabIcon.propTypes = {
  tintColor: PropTypes.any.isRequired,
  testIDTabName: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string,
};

export default NavTabIcon;
