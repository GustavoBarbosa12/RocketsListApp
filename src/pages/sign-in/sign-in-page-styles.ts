import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: whitesmoke;
`;

export const ImageLogo = styled.Image`
    width: 90px;
    height: 90px;
    margin-bottom: -15px;
`;

export const FormContainer = styled.View`
    display: flex;
    width: 100%;
    padding: 10px;
`;

export const Input = styled.TextInput`
    display: flex;
    font-size: 20px;
    padding: 10px;
    margin-top: 1px;
    width: 100%;
    background-color: lightgray;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 30px;
    padding: 10px 32px;
    border-radius: 5px;
    background-color: lightgray;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

