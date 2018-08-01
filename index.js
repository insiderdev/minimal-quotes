/** @format */

import {AppRegistry} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import App from './App';
import { name as appName } from './app.json';

EStyleSheet.build({});

AppRegistry.registerComponent(appName, () => App);
