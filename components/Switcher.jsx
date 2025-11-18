import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Switcher = ({ activeTab, setActiveTab }) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.tab, activeTab === 'Albums' && styles.activeTab]}
                onPress={() => setActiveTab('Albums')}
            >
                <Text style={[styles.tabText, activeTab === 'Albums' && styles.activeTabText]}>
                    Albums
                </Text>
            </Pressable>

            <Pressable
                style={[styles.tab, activeTab === 'Liked' && styles.activeTab]}
                onPress={() => setActiveTab('Liked')}
            >
                <Text style={[styles.tabText, activeTab === 'Liked' && styles.activeTabText]}>
                    Liked
                </Text>
            </Pressable>

            <Pressable
                style={[styles.tab, activeTab === 'Saved' && styles.activeTab]}
                onPress={() => setActiveTab('Saved')}
            >
                <Text style={[styles.tabText, activeTab === 'Saved' && styles.activeTabText]}>
                    Saved
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F8F9FE',
        borderRadius: 16,
        width: 343,
        height: 39,
    },
    tab: {
        flex: 1,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        paddingVertical: 4,
    },
    activeTab: {
        backgroundColor: '#B4DBFF',
    },
    tabText: {
        color: '#71727A',
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 12,
    },
    activeTabText: {
        color: '#1F2024',
        fontWeight: '700',
    },
});

export default Switcher;
