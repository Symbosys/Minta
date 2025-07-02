import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Title, Paragraph, Button, Card } from 'react-native-paper';

const Profile = () => {
    return (
        <View style={styles.container}>
            {/* Profile Card */}
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Avatar.Image size={80} source={{ uri: 'https://avatars.githubusercontent.com/u/94299395?v=4&size=64' }} />
                    <Title style={styles.title}>Sudhanshu</Title>
                    <Paragraph style={styles.email}>sudhanshu@example.com</Paragraph>
                </Card.Content>
            </Card>

            {/* Action Buttons */}
            <Button mode="contained" style={styles.button} onPress={() => console.log('Edit Profile')}>
                Edit Profile
            </Button>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
    },
    content: {
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        color: '#777',
    },
    button: {
        width: '100%',
        marginVertical: 5,
    },
});

export default Profile;
