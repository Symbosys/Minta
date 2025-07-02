// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';

// const LeafletMap = () => {
//     // Define source and destination coordinates
//     const source = { latitude: 37.7749, longitude: -122.4194 }; // San Francisco
//     const destination = { latitude: 37.8044, longitude: -122.2711 }; // Oakland

//     return (
//         <View style={styles.container}>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: (source.latitude + destination.latitude) / 2,
//                     longitude: (source.longitude + destination.longitude) / 2,
//                     latitudeDelta: 0.1,
//                     longitudeDelta: 0.1,
//                 }}
//                 provider={MapView.PROVIDER_DEFAULT}
//             >
//                 {/* Source Marker */}
//                 <Marker coordinate={source} title="Source" description="Starting Point" />

//                 {/* Destination Marker */}
//                 <Marker coordinate={destination} title="Destination" description="Ending Point" />

//                 {/* Polyline Path */}
//                 <Polyline
//                     coordinates={[source, destination]}
//                     strokeColor="blue" // Color of the line
//                     strokeWidth={4} // Thickness of the line
//                 />
//             </MapView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1 },
//     map: { ...StyleSheet.absoluteFillObject },
// });

// export default LeafletMap;
