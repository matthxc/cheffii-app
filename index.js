import './App/Config/ReactotronConfig';
import { AppRegistry, YellowBox } from 'react-native';
import App from './App/Containers/App';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

AppRegistry.registerComponent('cheffiiApp', () => App);
