import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../../pages/home/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Recent from '../../pages/recent/Recent';
import AccountIndex from '../../pages/account/AccountIndex';

const Stack = createStackNavigator();

const HomeRoute = () => <Home/>;


const RecentsRoute = () => (
    <Recent />
    // <>
    //     <Stack.Navigator>
    //         <Stack.Screen name="Recents" component={Recent} options={{ headerShown: true }} />
    //     </Stack.Navigator>
    // </>

);

const HelpRoute = () => (
    // <AccountIndex />
    <>
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountIndex} options={{ headerShown: true }} />
        </Stack.Navigator>
    </>
);

const BottomNav = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'Help', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Home: HomeRoute,
        recents: RecentsRoute,
        Help: HelpRoute,
    });

    return (

        <BottomNavigation 

            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomNav;