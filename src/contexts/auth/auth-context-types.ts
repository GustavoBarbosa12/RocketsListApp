import { UserDataType } from '../../types/user/user-type';

export type AuthContextInterface = {
    userData: UserDataType;
    logIn: (name: string) => Promise<void>;
    logOut: () => Promise<void>;
}

export type AuthProviderChildren = {
    children: JSX.Element;
}