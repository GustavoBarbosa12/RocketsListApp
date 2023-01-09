import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-color: whitesmoke;
`;

export const Header = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 110px;
`;

export const HeaderText = styled.Text`
    color: black;
    font-size: 25px;
    font-weight: 900;
`;

export const Body = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 3;
    height: auto;
    padding-bottom: 10px;
    background-color: black;
`;

export const DashboardButton = styled.TouchableOpacity`
    padding: 15px;
    margin-top: 10px;
    border: 2px solid lightgray;
    border-radius: 10px;
`;

export const DashboardButtonText = styled.Text`
    color: whitesmoke;
    font-weight: 600;
    font-size: 15px;
`;

export const LoadingText = styled.Text`
    flex: 1;
    color: whitesmoke;
    font-weight: 600;
    font-size: 16px;
    margin-top: 50px;
`;