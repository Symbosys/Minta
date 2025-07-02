Geolocation.getCurrentPosition(
    (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    },
    (error) => console.error('Error:', error),
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);