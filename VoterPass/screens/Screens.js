import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Home', () => require('./HomeScreen').default);
    Navigation.registerComponent('Next', () => require('./NextScreen').default);
    Navigation.registerComponent('New', () => require('./NewScreen').default);
    Navigation.registerComponent('Scan', () => require('./ScanScreen').default);
    Navigation.registerComponent('Manual', () => require('./ManualScreen').default);
    Navigation.registerComponent('ViewList', () => require('./ViewListScreen').default);
    Navigation.registerComponent('Settings', () => require('./SettingsScreen').default);
    Navigation.registerComponent('Final', () => require('./FinalScreen').default);
}