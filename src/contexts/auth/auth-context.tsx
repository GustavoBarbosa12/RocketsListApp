import { createContext, useContext, useState } from 'react';
import { UserDataType } from '../../types/user/user-type';
import { AuthProviderChildren, AuthContextInterface } from './auth-context-types';

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export const AuthProvider = ({children}: AuthProviderChildren) => {
    const [userData, setUserData] = useState<UserDataType>({} as UserDataType);

    const logIn = async(name: string) => {
        setUserData({name});
    }

    const logOut = async() => {
        setUserData({} as UserDataType);
    }

    return (
        <AuthContext.Provider value={{userData, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextInterface {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
}
