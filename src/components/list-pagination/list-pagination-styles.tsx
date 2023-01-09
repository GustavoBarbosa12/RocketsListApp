import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
`;

export const Direction = styled.Text<{color?: string}>`
    color: ${props => props.color || 'white'};
    font-weight: bold;
    font-size: 18px;
    border: 1px solid ${props => props.color || 'white'};
    border-radius: 5px;
`;

export const Indicator = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin: 0px 15px;
`;