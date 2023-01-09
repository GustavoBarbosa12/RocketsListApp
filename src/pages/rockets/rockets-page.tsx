import { RocketsList } from '../../components/rockets-list/rockets-list';
import { useAuth } from '../../contexts/auth/auth-context';
import * as S from './rockets-page-styles';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { MainStackNavigationProps } from '../../routes/stacks/main/main-stack-type';
import { RocketService } from '../../services/rockets-service';
import { useRockets } from '../../contexts/rocket/rockets-context';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

export const RocketsPage = () => {
    const navigation = useNavigation<MainStackNavigationProps>();
    const [loadingData, setLoadingData] = useState(true);
    const {userData} = useAuth();
    const {rockets, setRockets, rocketsListPage, setRocketsListTotalPages} = useRockets();
    const isFocused = useIsFocused();

    useEffect(() => {
        getRockets(rocketsListPage);
    },[rocketsListPage, isFocused]);

    const getRockets = async (page: number) => {
        let rocketsResponse = await RocketService.findAll(page);
        if(rocketsResponse?.data?.rockets[0]?.name) {
            setRockets(rocketsResponse.data?.rockets);
            setRocketsListTotalPages(rocketsResponse?.data?.totalPages);
            setLoadingData(true);
        } else {
            setLoadingData(true);
        }
    }

    const handleDashboardButton = () => {
        if(userData.name) {
            navigation.navigate('DashboardPage');
        } else {
            navigation.navigate('SignInPage');
        }
    } 
    return (
        <S.Container>
            <S.Header>
                <S.HeaderText> Rockets List </S.HeaderText>
            </S.Header>
            <S.Body>
                <S.DashboardButton onPress={handleDashboardButton}>
                    <S.DashboardButtonText>Restricted Area</S.DashboardButtonText>
                </S.DashboardButton>
                {
                    loadingData ? 
                    <S.LoadingText>Loading...</S.LoadingText> :
                    rockets[0]?.name && <RocketsList />
                }

            </S.Body>
        </S.Container>
    )
}
