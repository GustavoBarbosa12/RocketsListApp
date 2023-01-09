import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    padding: 5px 5px;
    background: rgba(30,30,30,0.9);
    border-radius: 2px;
`;

export const SearchContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 5px;
    background-color: #2C2C2C;
`;

export const SearchInput = styled.TextInput`
    display: flex;
    flex: 1;
    color: white;
    font-size: 16px;
    padding: 8px;
    margin-bottom: 5px;
    border-radius: 3px;
`;

export const SearchButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 15px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: whitesmoke;
`;
export const SearchButtonText = styled.Text`
    font-size: 18px;
    text-align: center;
`;

export const DeleteButton = styled.TouchableOpacity`
    padding: 5px 15px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: whitesmoke;
`;

export const DeleteButtonText = styled.Text`
    flex: 1;
    font-size: 18px;
    text-align: center;
`;