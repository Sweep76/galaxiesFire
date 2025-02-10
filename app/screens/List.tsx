import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signOut } from 'firebase/auth';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
    const handleLogout = async () => {
        try {
            await signOut(FIREBASE_AUTH);
        } catch (error: any) {
            console.error("Logout failed: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to Your Task List</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('details')}>
                <Text style={styles.buttonText}>📋 View Task Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
                <Text style={styles.buttonText}>🚪 Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
        elevation: 3, // For Android shadow
        shadowColor: '#000', // iOS shadow
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    logoutButton: {
        backgroundColor: '#d9534f',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default List;
