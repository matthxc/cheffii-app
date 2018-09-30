import React from 'react';
import { View, Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import Images from 'Themes/Images';

const styles = EStyleSheet.create({
  headerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
const TabHeaderLogo = () => (
  <View style={styles.headerLogo}>
    <Image
      source={Images.logoWhite}
      style={{ resizeMode: 'contain', width: 120, height: 25 }}
    />
  </View>
);
export default TabHeaderLogo;
