import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { useRockets } from '../../contexts/rocket/rockets-context';
import { MainStackNavigationProps } from '../../routes/stacks/main/main-stack-type';
import { RocketType } from '../../types/rocket/rocket-type';
import * as S from './rocket-card-styles';

type Props = {
    rocket: RocketType
}

export const RocketCard = ({rocket}: Props) => {
    const navigation = useNavigation<MainStackNavigationProps>();
    const {setSelectedRocket} = useRockets();

    let windowWidth = String((Dimensions.get('window').width - 30).toFixed(0));
    windowWidth = `${windowWidth}px`;

    const moreDetailsHandler = () =>{
        setSelectedRocket(rocket)
        navigation.navigate('RocketDetailsPage');
    }

    return (
        <S.Container 
            source={{uri: rocket?.photo}} 
            windowWidth={windowWidth}
            resizeMode='stretch'>
            <S.Header>
                <S.InfoContainter>
                    <S.Info>
                        <S.TitleInfo>Height: </S.TitleInfo>
                        <S.DescInfo>{rocket?.height}m</S.DescInfo>
                    </S.Info>
                    <S.Info>
                        <S.TitleInfo>Width: </S.TitleInfo>
                        <S.DescInfo>{rocket?.width}m</S.DescInfo>
                    </S.Info>
                    <S.Info>
                        <S.TitleInfo>Mass: </S.TitleInfo>
                        <S.DescInfo>{rocket?.mass}kg</S.DescInfo>
                    </S.Info>
                </S.InfoContainter>
                <S.DetailsButton>
                    <S.DetailsButtonText
                    onPress={moreDetailsHandler}
                    > More </S.DetailsButtonText>
                </S.DetailsButton>
            </S.Header>
            <S.Name>{rocket?.name}</S.Name>
        </S.Container>
    )
}