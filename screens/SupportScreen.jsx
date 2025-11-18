import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SupportScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backText}>Main Page</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Support</Text>
            <Text style={styles.subtitle}>
                If you have any issues, please contact us.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 8,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    backText: {
        fontSize: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        color: '#555',
    },
});