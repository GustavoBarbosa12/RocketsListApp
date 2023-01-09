import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth/auth-context';
import { MainStackNavigationProps } from '../../routes/stacks/main/main-stack-type';
import * as S from './sign-in-page-styles';

export const SignInPage = () => {
    const {logIn} = useAuth();
    const navigation = useNavigation<MainStackNavigationProps>();
	const logo = '../../assets/rocket.png';
    
    const handleSignIn = async() => {
        try {
            await logIn('User');
            navigation.navigate('DashboardPage');
        } catch (error) {
            navigation.navigate('RocketsPage');
        }
    }
	return (
        <S.Container>
            <S.ImageLogo 
                resizeMode='contain'
                source={require(logo)}
            />
            <S.Button onPress={handleSignIn}>
                <S.TextButton>Sign in</S.TextButton>
            </S.Button>
        </S.Container>
	)
}