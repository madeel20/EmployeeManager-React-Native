/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';
console.disableYellowBox;
AppRegistry.registerComponent(appName, () => App);
