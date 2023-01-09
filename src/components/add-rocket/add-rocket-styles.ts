import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    padding: 5px 5px;
    border-radius: 2px;
    background: rgba(30,30,30,0.9);
`;

export const InputLabel = styled.Text`
    color: lightgray;
    font-size: 16px;
    font-weight: 500;
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 4px;
`;

export const Input = styled.TextInput`
    display: flex;
    color: white;
    font-size: 16px;
    padding: 6px;
    margin-bottom: 5px;
    border-radius: 3px;
    border: 1px whitesmoke solid;
`;

export const Button = styled.TouchableOpacity`
    align-self: center;
    padding: 10px 15px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid white;
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 15px;
`;