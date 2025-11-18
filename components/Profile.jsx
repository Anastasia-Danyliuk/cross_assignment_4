import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

export default function LibraryScreen() {

    const handlePress = () => {
        console.log("Pressed");
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileBlock}>
                <Image
                    style={styles.profilImg}
                    source={require('../assets/Profile.png')}
                />
                <Text style={styles.name}>Anna Lindemann</Text>
                <Text style={styles.id}>@lindemaaaan87</Text>
            </View>

            <View style={styles.settingsBlock}>
                <TouchableOpacity style={styles.settingItem} onPress={() => console.log("Notifications")} activeOpacity={0.7}>
                    <Text>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => console.log("Appearance")} activeOpacity={0.7}>
                    <Text>Appearance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => console.log("Language")} activeOpacity={0.7}>
                    <Text>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => console.log("Privacy & Security")} activeOpacity={0.7}>
                    <Text>Privacy & Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem} onPress={() => console.log("Log Out")} activeOpacity={0.7}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 9,
        paddingHorizontal: 20
    },

    profileBlock: {
        alignItems: 'center',
        marginBottom: 40
    },

    profilImg:{
        width: 81.5,
        height: 82,
    },
    name:{
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 16,
        color: '#1F2024',
        marginTop: 10,
    },
    id:{
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 12,
        color: '#71727A',
    },

    settingsBlock: {
        alignItems: "flex-start",
        gap: 20,
        paddingLeft: 32,
    },

    settingItem: {
        fontSize: 16,
        color: '#1F2024',
        width: 283,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#D4D6DD',
    }
});
