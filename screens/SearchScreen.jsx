import React from 'react';
import { View, StyleSheet } from "react-native";
import SearchBar from '../components/SearchBar';

export default function SearchScreen({ navigation }) {

    const styles = StyleSheet.create({
        searchBar: {
            marginLeft: 30,
            marginTop:10,
        }
    });

    return (
        <View>
            <SearchBar
                style={styles.searchBar}
                disabledInput={false}
            />
        </View>
    );
}
