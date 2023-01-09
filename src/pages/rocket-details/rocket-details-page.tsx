import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useRockets } from '../../contexts/rocket/rockets-context';
import { MainStackNavigationProps } from '../../routes/stacks/main/main-stack-type';
import * as S from './rocket-details-page-styles';

export const RocketDetailsPage = () => {
    const navigation = useNavigation<MainStackNavigationProps>();
    const {selectedRocket} = useRockets();
    return (
        <S.Container>
            <S.Title>{selectedRocket.name}</S.Title>
            <S.Header 
                source={{uri: selectedRocket.photo}}
                resizeMode={'cover'}
            >
            </S.Header>

            <S.Body>
                <S.InfoContainer>
                    <S.Info>
                        <S.InfoTitle>HEIGHT</S.InfoTitle>
                        <S.InfoDetail>{selectedRocket.height} m</S.InfoDetail>
                    </S.Info>
                    <S.Info>
                        <S.InfoTitle>WIDTH</S.InfoTitle>
                        <S.InfoDetail>{selectedRocket.width} m </S.InfoDetail>
                    </S.Info>
                    <S.Info>
                        <S.InfoTitle>MASS</S.InfoTitle>
                        <S.InfoDetail>{selectedRocket.mass} kg</S.InfoDetail>
                    </S.Info>
                </S.InfoContainer>
                <S.Description>
                    {selectedRocket.description}
                </S.Description>


            </S.Body>
            <S.Footer>
                <View></View>
                <S.BackButton onPress={() => navigation.navigate('RocketsPage')}>
                    <S.BackButtonText>Back to list</S.BackButtonText>
                </S.BackButton>
            </S.Footer>
        </S.Container>
    )
}
