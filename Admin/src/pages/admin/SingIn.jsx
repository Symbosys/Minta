import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { useNotifications } from '@toolpad/core';

// preview-start
const providers = [{ id: 'credentials', name: 'Email and Password' }];
// preview-end


export default function SingIn() {


    const notifications = useNotifications();
      const [severity, setSeverity] = React.useState('error');


    const signIn = async (provider, formData) => {

        notifications.show('Consider yourself notified!', {
            severity,
            autoHideDuration: 3000,
            actionText: 'Action',
            onAction: () => {
                alert('Undo action clicked');
                }
            });
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                alert(
                    `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
                );
                resolve();
            }, 300);
        });
        return promise;
    };

  const theme = useTheme();
  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: true }, form: { noValidate: true } }}
      />
    </AppProvider>
    // preview-end
  );

  
}


