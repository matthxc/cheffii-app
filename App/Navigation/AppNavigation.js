import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View } from 'react-native';

import colors from 'Themes/Colors';
import LaunchScreen from 'Containers/LaunchScreen';
import NavTabIcon from './NavTabIcon';
import TabHeaderLogo from './TabHeaderLogo';

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
            iconType="FontAwesome"
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
            iconType="Entypo"
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    headerMode: 'screen',
    initialRouteName: 'home',
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveBackgroundColor: colors.primary,
      inactiveTintColor: 'white',
      activeBackgroundColor: colors.primary,
      labelStyle: {
        color: 'white',
      },
      iconStyle: {
        height: 35,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: colors.primary,
      },
      indicatorStyle: {
        backgroundColor: 'white',
        height: 3,
      },
    },
  },
);

const PrimaryNav = StackNavigator(
  {
    main: {
      screen: MainApp,
      navigationOptions: {
        header: <TabHeaderLogo />,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerLeft: <View />,
        headerRight: <View />,
        headerTitleStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
  {
    // Default config for all screens
    initialRouteName: 'main',
  },
);

export default PrimaryNav;
