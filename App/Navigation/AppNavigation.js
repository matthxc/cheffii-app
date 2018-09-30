import React from 'react';
import { SwitchNavigator, TabNavigator } from 'react-navigation';
import { View } from 'react-native';

import colors from 'Themes/Colors';
import LaunchScreen from 'Containers/LaunchScreen';
import NavTabIcon from 'Components/NavTabIcon';
import TabHeaderLogo from 'Components/TabHeaderLogo';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens

/* eslint-disable react/prop-types */
const MainApp = TabNavigator(
  {
    home: {
      screen: LaunchScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="homeTab"
            iconName="home"
          />
        ),
      },
    },
    camera: {
      screen: LaunchScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="cameraTab"
            iconName="camera"
          />
        ),
      },
    },
    microphone: {
      screen: LaunchScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="microphoneTab"
            iconName="microphone"
          />
        ),
      },
    },
    addManually: {
      screen: LaunchScreen,
      navigationOptions: {
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => (
          <NavTabIcon
            tintColor={tintColor}
            testIDTabName="addManuallyTab"
            iconName="plus"
            type="FontAwesome"
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'home',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    headerMode: 'screen',
    lazy: true,
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveBackgroundColor: colors.secondary,
      inactiveTintColor: 'white',
      activeBackgroundColor: colors.secondary,
      labelStyle: {
        color: colors.primary,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: colors.secondary,
      },
      indicatorStyle: {
        backgroundColor: colors.primary,
      },
      // eslint-disable-next-line
      navigationOptions: ({ navigation }) => ({
        header: null,
        headerTitle: <TabHeaderLogo />,
        headerTintColor: colors.primary,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerLeft: <View />,
        headerRight: <View />,
        headerTitleStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    },
  },
);

const PrimaryNav = SwitchNavigator(
  {
    main: MainApp,
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'main',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default PrimaryNav;
