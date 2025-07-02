import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import IndexStyle from '../../Index.Style';
import { Text, useTheme } from 'react-native-paper';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Details = () => {
    const { colors } = useTheme(); // Access theme colors

    return (
        <ScrollView>
            <View style={[IndexStyle.row, IndexStyle.p4, { backgroundColor: colors.secondary, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }]}>
                <View style={IndexStyle.mr}>
                    <Text variant="titleLarge">Your application is</Text>
                    <Text variant="titleLarge"> under Verification</Text>
                    <Text style={IndexStyle.mt}>Account will get activated in 48hrs</Text>
                </View>
                <View>
                    <Image
                        style={IndexStyle.pr}
                        height={100}
                        width={100}
                        source={{ uri: "https://img.freepik.com/premium-vector/document-verification-concept-with-hand-magnifier-paper-sheets-green-check-mark-tick-it_503038-568.jpg?ga=GA1.1.265960106.1740721772&semt=ais_hybrid" }}
                    />
                </View>

            </View>

            <View style={IndexStyle.p4}>
                <Text style={IndexStyle.mb} variant="titleLarge" >Documents</Text>

                <View style={IndexStyle.mt}>
                    {data.map((item, index) => (
                        <Card  style={[{marginTop: 20 }]} key={index}>
                            <Card.Title
                                title="Document Name"
                                subtitle="Approved"
                                subtitleStyle={{ color: 'green' }} // Makes subtitle text green
                                left={(props) => <Avatar.Icon {...props} icon="file" />} // Changed icon to 'file'
                                right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => { }} />}
                            />
                        </Card>
                    ))}
                 
                </View>

                <View style={[IndexStyle.container,IndexStyle.row]}>
                    <Text variant="titleSmall">Need Help?</Text>
                    <Text style={{ color: colors.error }}> Contact Us</Text>
                </View>



            </View>
        </ScrollView>
    );
};

export default Details;

const data = [
    {},
    {},
    {},
    {},
  
]
