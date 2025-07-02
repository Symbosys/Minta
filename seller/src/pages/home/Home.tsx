import { View, Image, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, Icon, Switch } from 'react-native-paper';
import IndexStyle from '../../Index.Style';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
export default function Home() {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <ScrollView>
            <View style={[IndexStyle.container, IndexStyle.p4]} >
                <View style={[IndexStyle.p4, IndexStyle.row,]} >
                    {isSwitchOn ? <Text style={{ fontSize: 20, color: 'green' }}>
                        <Icon
                            source="check-circle"
                            color='green'
                            size={20}
                        /> Online</Text> : <Text style={{ fontSize: 20, color: "red" }}>
                        <Icon
                            source="close-circle"
                            color='red'
                            size={20}
                        />
                        Offine</Text>}
                    <Text>{isSwitchOn}</Text>
                    <Switch color={isSwitchOn ? 'green' : 'red'} value={isSwitchOn} onValueChange={onToggleSwitch} />

                </View>


                {isSwitchOn ?
                    <View style={[IndexStyle.mt, IndexStyle.container]}>
                        <Image
                            source={{
                                uri: "https://img.freepik.com/premium-vector/looking-someone_22110-435.jpg?ga=GA1.1.265960106.1740721772&semt=ais_keywords_boost",
                            }}
                            style={[{ width: 350, height: 350, resizeMode: "contain" }, IndexStyle.mt]}
                        />
                        <Text variant="headlineMedium" style={[IndexStyle.pt, IndexStyle.mt]}>No Orders</Text>

                        <Text variant="labelMedium" style={[IndexStyle.pt, IndexStyle.textCenter]}>
                            Relax, drink water, stay hydrated, and refuel your vehicle for a smooth delivery
                        </Text>
                    </View>
                    :
                    <View style={[IndexStyle.mt, IndexStyle.container]}>
                        <Image
                            source={{
                                uri: "https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148498595.jpg?ga=GA1.1.265960106.1740721772&semt=ais_keywords_boost",
                            }}
                            style={[{ width: 350, height: 350, resizeMode: "contain" }, IndexStyle.mt]}
                        />
                        <Text variant="headlineMedium" style={[IndexStyle.pt, IndexStyle.mt]}>Let's Go..</Text>

                        <Text variant="labelMedium" style={[IndexStyle.pt, IndexStyle.textCenter]}>
                            Mark yourself online, start earning without limits, and make the most of every delivery
                        </Text>
                    </View>
                }
            </View>
        </ScrollView>
    )
}