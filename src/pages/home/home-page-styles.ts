import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: whitesmoke;
`;

export const ImageLogo = styled.Image`
    width: 120px;
    height: 120px;
`;

export const TextLogo = styled.Text`
    color: black;
    font-size: 35px;
    font-weight: 800;
    margin-top: 10px;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 60px;
    padding: 10px 32px;
    border-radius: 5px;
    background-color: lightgray;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

