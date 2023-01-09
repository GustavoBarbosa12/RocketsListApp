import styled from 'styled-components/native';
type ContainerProps = {
    windowWidth: string;
}
export const Container = styled.ImageBackground<ContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: ${props => props.windowWidth};
    max-height: 70%;
    padding: 15px;
    margin: 0px 5px;
    margin-top: 5px;
    background-color: rgba(80,80,80,0.1);
    border-radius: 10px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    border: 2px solid white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: rgba(20,20,20, 0.5);
`;

export const Image = styled.Image`
    width: 140px;
    height: 110px;
    border-top-left-radius: 5px;
`;

export const Name = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 900;
    text-align: left;
    padding: 5px 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: rgba(20,20,20, 0.5);
`

export const InfoContainter = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    padding: 10px;
`;

export const Info = styled.Text`
    width: 100%;
    margin-bottom: 2px;
`;

export const TitleInfo = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: 900;
    text-align: center;
`;

export const DescInfo = styled.Text`
    color: white;
    font-size: 15px;
    font-weight: 900;
    text-align: center;
`

export const DetailsButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: rgba(20,20,20, 0.5);
`;

export const DetailsButtonText = styled.Text`
    color: white;
`;