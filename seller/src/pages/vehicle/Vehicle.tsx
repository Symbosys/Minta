import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, RadioButton } from 'react-native-paper';
import IndexStyle from '../../Index.Style';
const VehicleSelection = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const vehicles = [
        { id: '1', label: 'Bike', image: 'https://img.freepik.com/premium-vector/food-delivery_24908-47255.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid' },
        { id: '2', label: 'Cycle', image: 'https://img.freepik.com/free-vector/delivery-service-illustrated-concept_23-2148505082.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid' },
        { id: '3', label: 'EV Vehicle', image: 'https://img.freepik.com/free-vector/people-driving-electric-scooter_23-2148557298.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid' }
    ];

    return (
        <ScrollView>
        <View style={{ padding: 20 }}>
            {vehicles.map(vehicle => (
                <TouchableOpacity
                    key={vehicle.id}
                    onPress={() => setSelectedValue(vehicle.id)}
                    style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
                >
                    <Image
                       source={{ uri: vehicle.image }}
                        style={{ width: 150, height: 150,  marginRight: 10 }}
                    />
                    <RadioButton
                        value={vehicle.id}
                        status={selectedValue === vehicle.id ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue(vehicle.id)}
                    />
                    <Text>{vehicle.label}</Text>
                </TouchableOpacity>
            ))}
        </View>

             <View style={[IndexStyle.p5]}>
      
        <Button icon="arrow-right" mode="contained" onPress={() => navigation.replace('Aadhaar')}>
          Next
                </Button>
       
      </View>
        </ScrollView>
    );
};

export default VehicleSelection;
