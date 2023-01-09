import { useNavigation } from '@react-navigation/native';
import { MainStackNavigationProps } from '../../routes/stacks/main/main-stack-type';
import * as S from './home-page-styles';

export const HomePage = () => {
    const navigation = useNavigation<MainStackNavigationProps>();
	const logo = '../../assets/rocket.png';
	return (
        <S.Container>
            <S.ImageLogo 
                resizeMode='contain'
                source={require(logo)}
            />

            <S.TextLogo>
                Rockets List
            </S.TextLogo>

            <S.Button onPress={() => navigation.navigate('RocketsPage')}>
                <S.TextButton>Spy</S.TextButton>
            </S.Button>
        </S.Container>
	)
}
