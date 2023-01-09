import { TouchableOpacity, View } from 'react-native';
import { useRockets } from '../../contexts/rocket/rockets-context';
import * as S from './list-pagination-styles';

export const ListPagination = () => {
    const {
        rocketsListPage, 
        setRocketsListPage, 
        rocketsListTotalPages, 
    } = useRockets();

    const calcNext = () =>  rocketsListTotalPages > rocketsListPage;
    const calcPrev = () => rocketsListPage > 1;

    return (
        <S.Container>
            {
                calcPrev() ?
                    <TouchableOpacity onPress={() => setRocketsListPage(rocketsListPage - 1)}>
                        <S.Direction > {'<<<'} </S.Direction>
                    </TouchableOpacity>
                : 
                    <View>
                        <S.Direction color='gray'> {'<<<'} </S.Direction>
                    </View>
            }

            <S.Indicator>{rocketsListPage}/{rocketsListTotalPages}</S.Indicator>
            {
                calcNext() ?
                    <TouchableOpacity onPress={() => setRocketsListPage(rocketsListPage + 1)}>
                        <S.Direction > {'>>>'} </S.Direction>
                    </TouchableOpacity>
                : 
                    <View>
                        <S.Direction color='gray'> {'>>>'} </S.Direction>
                    </View>
            }
        </S.Container>
    )
}