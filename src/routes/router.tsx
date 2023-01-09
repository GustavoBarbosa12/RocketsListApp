import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './stacks/main/main-stack';

export const Router = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}