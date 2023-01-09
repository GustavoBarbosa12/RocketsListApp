import { useState } from 'react';
import { Alert, View } from 'react-native';
import { RocketService } from '../../services/rockets-service';
import { RocketType } from '../../types/rocket/rocket-type';
import { RocketValidators } from '../../utils/validators/rocket-validators';
import * as S from './add-rocket-styles';

export const AddRocket = () => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [mass, setMass] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmmit = async () => {
        let rocket: RocketType = {
            name,
            height,
            width,
            mass,
            description
        }
        if(RocketValidators.rocketObjectValidator(rocket)){
            await RocketService.create(rocket);
        } else {
            Alert.alert('Invalid data!', 'Write all data correctly.');
        }
        clearInputs()
    }

    const clearInputs = () => {
        setName('');
        setHeight('');
        setWidth('');
        setMass('');
        setDescription('');
    } 
    
    return (
        <S.Container>
            <View>
                <S.InputLabel>Name:</S.InputLabel>
                <S.Input 
                    defaultValue={name} 
                    onChangeText={(value)=>{setName(value)}} 
                />
            </View>
            <View>
                <S.InputLabel>Height (m):</S.InputLabel>
                <S.Input 
                    defaultValue={height} 
                    onChangeText={(value)=>{setHeight(value)}} 
                    keyboardType='numeric'
                />
            </View>
            <View>
                <S.InputLabel>Width (m):</S.InputLabel>
                <S.Input 
                    defaultValue={width} 
                    onChangeText={(value)=>{setWidth(value)}}
                    keyboardType='numeric'
                />
            </View>
            <View>
                <S.InputLabel>Mass (kg):</S.InputLabel>
                <S.Input 
                    defaultValue={mass} 
                    onChangeText={(value)=>{setMass(value)}} 
                    keyboardType='numeric'
                />
            </View>
            <View>
                <S.InputLabel>Description:</S.InputLabel>
                <S.Input 
                    defaultValue={description} 
                    onChangeText={(value)=>{setDescription(value)}}
                />
            </View>

            <S.Button onPress={handleSubmmit}> 
                <S.ButtonText>Submmit</S.ButtonText> 
            </S.Button>
        </S.Container>
    )
}