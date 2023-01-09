import { View } from 'react-native';
import { useRockets } from '../../contexts/rocket/rockets-context';
import { ListPagination } from '../list-pagination/list-pagination';
import { RocketCard } from '../rocket-card/rocket-card';
import * as S from './rockets-list-styles';


export const RocketsList = () => {
    const {rockets} = useRockets();

    return (
        <S.Container>
            <View >
                {rockets.map((item, index)=>(
                    <RocketCard rocket={item} key={index}/>
                ))}
            </View>
            <ListPagination />
        </S.Container>
    )
}