import { useState } from 'react';
import { Alert, Text } from 'react-native';
import { RocketService } from '../../services/rockets-service';
import { RocketValidators } from '../../utils/validators/rocket-validators';
import * as S from './delete-rocket-styles';

export const DeleteRocket = () => {
    const [findName, setFindName] = useState('');
    const [selectedRocketName, setSelectedRocketName] = useState('');

    const handleFind = async () => {
        if(findName) {
            let findedRocket = await RocketService.findByName(findName);
            if(RocketValidators.rocketObjectValidator(findedRocket?.data)) {
                setSelectedRocketName(findedRocket?.data.name);
            } else {
                Alert.alert('Rocket not found!');
            }
        } else {
            Alert.alert('Type a rocket name!')
        }

    }

    const handleDelete = async () => {
        await RocketService.delete(selectedRocketName);
        setSelectedRocketName('');
    }
    return (
        <S.Container>
            <S.SearchContainer>
                <S.SearchInput 
                    placeholder='Find rocket by name' 
                    placeholderTextColor={'darkgray'}
                    defaultValue={findName}
                    onChangeText={(value)=>{setFindName(value)}} 
                />
                <S.SearchButton onPress={handleFind}>
                    <S.SearchButtonText>
                        Find
                    </S.SearchButtonText>
                </S.SearchButton>
            </S.SearchContainer>
            {
                selectedRocketName && 
                <S.DeleteButton onPress={handleDelete}>
                    <S.DeleteButtonText>
                        Delete
                    </S.DeleteButtonText>
                </S.DeleteButton>
            }

        </S.Container>
    )
}