import { Alert, AppRegistry, AppState } from 'react-native';
import App from './src/index';
import CodePush from 'react-native-code-push';
import Push from 'mobile-center-push';

const JokingAround = CodePush({
    installMode: CodePush.InstallMode.IMMEDIATE,
    updateDialog: true
})(App);

AppRegistry.registerComponent('JokingAround', () => App);
