import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AddRocket } from '../../components/add-rocket/add-rocket';
import { DeleteRocket } from '../../components/delete-rocket/delete-rocket';
import { EditRocket } from '../../components/edit-rocket/edit-rocket';
import { useAuth } from '../../contexts/auth/auth-context';
import { MainStackNavigationProps } from '../../routes/stacks/main/main-stack-type';
import * as S from './dashboard-page-styles';

type Options = 'add' |'edit' | 'delete' | 'none';

export const DashboardPage = () => {
    const navigation = useNavigation<MainStackNavigationProps>();
    const [activeOption, setActiveOption] = useState<Options>('none');
    const {logOut} = useAuth();

    const handleSignOut = async() => {
        await logOut();
        navigation.navigate('HomePage');
    }

    const handleActiveOption = (option: Options) => {
        if(activeOption === option){
            setActiveOption('none');
        } else {
            setActiveOption(option);
        }
    }

    return (
        <S.Container>
            <S.Title>Dashboard</S.Title>
            <S.Body>
                <S.Option>
                    <TouchableOpacity onPress={() => handleActiveOption('add')}>                    
                        <S.OptionTitle>ADD</S.OptionTitle>
                    </TouchableOpacity>
                    {activeOption === 'add' && <AddRocket/>}
                </S.Option>
                <S.Option >
                    <TouchableOpacity onPress={() => handleActiveOption('edit')}>                    
                        <S.OptionTitle>EDIT</S.OptionTitle>
                    </TouchableOpacity>
                    {activeOption === 'edit' && <EditRocket/>}
                </S.Option>
                <S.Option>
                    <TouchableOpacity onPress={() => handleActiveOption('delete')}>                    
                        <S.OptionTitle>DELETE</S.OptionTitle>
                    </TouchableOpacity>
                    {activeOption === 'delete' && <DeleteRocket/>}
                </S.Option>
            </S.Body>

            <S.Footer>
                <S.BackButton onPress={() => navigation.navigate('RocketsPage')}>
                    <S.BackButtonText>Back to list</S.BackButtonText>
                </S.BackButton>

                <S.SignOutButton onPress={handleSignOut}>
                    <S.SignOutButtonText> Sign out </S.SignOutButtonText>
                </S.SignOutButton>
            </S.Footer>
        </S.Container>
    )
};