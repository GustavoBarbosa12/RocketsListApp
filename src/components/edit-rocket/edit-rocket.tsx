import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { RocketService } from '../../services/rockets-service';
import { RocketType } from '../../types/rocket/rocket-type';
import { RocketValidators } from '../../utils/validators/rocket-validators';
import * as S from './edit-rocket-styles';

export const EditRocket = () => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [mass, setMass] = useState('');
    const [description, setDescription] = useState('');
    const [findName, setFindName] = useState('');

    const handleSubmmit = async () => {
        let rocket: RocketType = {
            name,
            height,
            width,
            mass,
            description,
        }
        if(RocketValidators.rocketObjectValidator(rocket)){
            await RocketService.updateRocket(rocket);
        } else {
            Alert.alert('Invalid data!', 'Write all data correctly.');
        }
        clearInputs()
    }

    const handleFind = async() => {
        clearInputs();
        let findedRocket = await RocketService.findByName(findName);
        if(RocketValidators.rocketObjectValidator(findedRocket?.data)){
            setName(findedRocket?.data.name);
            setHeight(findedRocket?.data.height);
            setWidth(findedRocket?.data.width);
            setMass(findedRocket?.data.mass);
            setDescription(findedRocket?.data.description);
        } else {
            Alert.alert('Rocket not found!');
        }
    }

    const clearInputs = () => {
        setName('');
        setHeight('');
        setWidth('');
        setMass('');
        setDescription('');
        setFindName('');
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
                    <S.SearchIcon>
                        Find
                    </S.SearchIcon>
                </S.SearchButton>
            </S.SearchContainer>
            <View>
                <View>
                    <S.InputLabel>Name: 🔒</S.InputLabel>
                    <S.Input 
                        defaultValue={name} 
                        onChangeText={(value)=>{setName(value)}}
                        editable={false} 
                    />
                </View>
                <View>
                    <S.InputLabel>Height (m):</S.InputLabel>
                    <S.Input 
                        defaultValue={height} 
                        onChangeText={(value)=>{setHeight(value)}} 
                        keyboardType='numeric'
                        editable={name ? true : false} 
                    />
                </View>
                <View>
                    <S.InputLabel>Width (m):</S.InputLabel>
                    <S.Input 
                        defaultValue={width} 
                        onChangeText={(value)=>{setWidth(value)}}
                        keyboardType='numeric'
                        editable={name ? true : false} 
                    />
                </View>
                <View>
                    <S.InputLabel>Mass (kg):</S.InputLabel>
                    <S.Input 
                        defaultValue={mass} 
                        onChangeText={(value)=>{setMass(value)}} 
                        keyboardType='numeric'
                        editable={name ? true : false} 
                    />
                </View>
                <View>
                    <S.InputLabel>Description:</S.InputLabel>
                    <S.Input 
                        defaultValue={description} 
                        onChangeText={(value)=>{setDescription(value)}}
                        editable={name ? true : false} 
                    />
                </View>

                <S.Button onPress={handleSubmmit}> 
                    <S.ButtonText>Submmit</S.ButtonText> 
                </S.Button>
            </View>
        </S.Container>
    )
}