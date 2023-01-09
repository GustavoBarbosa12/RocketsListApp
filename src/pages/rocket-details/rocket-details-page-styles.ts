import styled from 'styled-components/native';      

export const Container = styled.ScrollView`
    display: flex;
    flex-direction: column;
    background-color: black;
`;

export const Header = styled.ImageBackground`
    display: flex;
    height: 220px;
    background-color: white;
`;

export const Title = styled.Text`
    color: black;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 20px 20px;
    background: whitesmoke;
`;

export const Body = styled.View`
    display: flex;
`;

export const InfoContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
`;

export const Info = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom-color: white;
    border-bottom-width: 1px;
`;

export const InfoTitle = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
`;

export const InfoDetail = styled.Text`
    color: lightgray;
    font-size: 15px;
`;

export const Description = styled.Text`
    color: white;
    font-size: 16px;
    text-align: justify;
    width: 100%;
    margin-top: 20px;
    padding: 5px;
`;

export const Footer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const BackButton = styled.TouchableOpacity`
    padding: 15px;
    border: 2px solid lightgray;
    border-radius: 10px;
`;

export const BackButtonText = styled.Text`
    color: whitesmoke;
    font-weight: 600;
    font-size: 15px;
`;