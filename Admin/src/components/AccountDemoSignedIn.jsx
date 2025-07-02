import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { Account, AccountPopoverFooter, AccountPopoverHeader, AccountPreview, SignOutButton } from '@toolpad/core/Account';
import { useSession } from '@toolpad/core';

const demoSession = {
    user: {
        name: 'Bharat Kashyap',
        email: 'bharatkashyap@outlook.com',
        image: 'https://avatars.githubusercontent.com/u/19550456',
    },
};

export default function AccountDemoSignedIn() {
    const [session, setSession] = React.useState(demoSession);
    
    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession(demoSession);
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    // const {name, email} =  useSession();
    return (
        <AppProvider authentication={authentication} session={session}>
            {/* preview-start */}
            <Account />
            {/* preview-end */}
            {/* <h2>{name}</h2> */}
            <AccountPopoverFooter />
            <AccountPreview/>
            <AccountPopoverHeader/>
            <SignOutButton />
            {/* <AccountPopoverHeader />
            <AccountPreview />
            <SignInButton />
            <SignOutButton /> */}
        </AppProvider>
    );
}
