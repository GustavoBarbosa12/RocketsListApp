import styled from 'styled-components/native';      

export const Container = styled.ScrollView`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: black;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: black;
    text-align: center;
    padding: 20px 20px;
    background: whitesmoke;
`;

export const Body = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Option = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 10px;
    margin-top: 1px;
    border-bottom-color: whitesmoke;
    border-bottom-width: 1px;
`;

export const OptionTitle = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
`;

export const Footer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
    align-self: center;
    padding: 15px;
    margin-top: 20px;
    margin-right: 20px;
    border: 2px solid whitesmoke;
    border-radius: 10px;
`;

export const BackButtonText = styled.Text`
    color: whitesmoke;
    font-weight: 600;
    font-size: 15px;
`;

export const SignOutButton = styled.TouchableOpacity`
    align-self: center;
    margin-top: 20px;
    padding: 15px 20px;
    border-radius: 10px;
    border: 2px solid whitesmoke;
    background-color: gray;
`;

export const SignOutButtonText = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 15px;
`;
