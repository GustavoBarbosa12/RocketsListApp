import { useAuth } from '../../contexts/auth/auth-context';
import { DashboardPage } from '../../pages/dashboard/dashboard-page';
import { SignInPage } from '../../pages/sign-in/sign-in-page';

type Props = {
    children: () => JSX.Element;
}

export const RequireAuth = ({ children }: Props) => {
    const {userData} = useAuth();

    if(!userData.name) {
        return (SignInPage);
    } else if (children === SignInPage) {
        return DashboardPage;
    }

    return children;
}