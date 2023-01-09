import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackNavigationScreens = {
    HomePage: undefined;
    RocketsPage: undefined;
    SignInPage: undefined;
    DashboardPage: undefined;
    RocketDetailsPage: undefined;
}

export type MainStackNavigationProps = NativeStackNavigationProp<MainStackNavigationScreens>;