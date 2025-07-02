import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../../pages/home/Home';
import Recent from '../../pages/recent/Recent';
import AccountIndex from '../../pages/account/AccountIndex';
import Notification from '../../pages/notification/Notification'; 
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../../pages/dashboard/DashBoard';

const Stack = createStackNavigator();

const HomeRoute = () => <DashboardScreen />;
const RecentsRoute = () => <Recent />;
const HelpRoute = () => <AccountIndex />
const NotificationRoute = () => <Notification />;
 
const BottomNav = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' }, 
        { key: 'Help', title: 'Account', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Home: HomeRoute,
        recents: RecentsRoute,
        notifications: NotificationRoute,
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
