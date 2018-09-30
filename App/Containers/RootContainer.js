import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Colors from 'Themes/Colors';
import ReduxNavigation from '../Navigation/ReduxNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

/* eslint-disable react/prefer-stateless-function */
class RootContainer extends Component {
  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
        <ReduxNavigation />
      </View>
    );
  }
}

export default RootContainer;
