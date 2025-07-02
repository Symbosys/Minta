import { PermissionsAndroid, Platform } from 'react-native';

async function requestDeliveryPermissions() {
    if (Platform.OS !== 'android') {
        console.log("Location permissions must be handled differently on iOS.");
        return;
    }

    try {
        const fineLocation = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Precise Location Access",
                message: "This app needs access to your location for accurate delivery tracking.",
                // buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );

        if (fineLocation === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Fine Location Granted");

            if (Platform.Version >= 29) {
                const backgroundLocation = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
                    {
                        title: "Background Location Access",
                        message: "Allow background location to track deliveries even when the app is closed.",
                        // buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    } 
                );

                if (backgroundLocation === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("Background Location Granted");
                } else {
                    console.log("Background Location Denied");
                }  
            }
            
        } else {
            console.log("Fine Location Denied");
        }
    } catch (err) {
        console.warn("Permission request error:", err);
    }
}

export default requestDeliveryPermissions;
