import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RequireAuth } from '../../../components/require-auth/require-auth';
import { DashboardPage } from '../../../pages/dashboard/dashboard-page';
import { HomePage } from '../../../pages/home/home-page';
import { RocketDetailsPage } from '../../../pages/rocket-details/rocket-details-page';
import { RocketsPage } from '../../../pages/rockets/rockets-page';
import { SignInPage } from '../../../pages/sign-in/sign-in-page';
import { MainStackNavigationScreens } from './main-stack-type';

const { Navigator, Screen } = createNativeStackNavigator<MainStackNavigationScreens>();

export const MainStack = () => {
    return (

        <Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
            <Screen name='HomePage' component={ HomePage } />
            <Screen name='RocketsPage' component={ RocketsPage } />
            <Screen name='RocketDetailsPage' component={ RocketDetailsPage } />
            <Screen name='SignInPage' component={ RequireAuth({children: SignInPage}) } />
            <Screen name='DashboardPage' component={ RequireAuth({children: DashboardPage}) }  />
        </Navigator>

    )
}