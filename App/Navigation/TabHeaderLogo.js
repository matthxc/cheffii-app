import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Images from 'Themes/Images';
import Colors from 'Themes/Colors';

const styles = StyleSheet.create({
  headerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
  },
});
const TabHeaderLogo = () => (
  <View style={styles.headerLogo}>
    <Image
      source={Images.logoWhite}
      style={{ resizeMode: 'contain', width: 120, height: 42 }}
    />
  </View>
);
export default TabHeaderLogo;
