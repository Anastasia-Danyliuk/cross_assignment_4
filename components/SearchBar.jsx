import React from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

const SearchBar = ({ onPress, disabledInput, style, containerStyle, ...props }) => {
    const [text, onChangeText] = React.useState('');

    const Content = (
        <View style={[styles.container, containerStyle, style]}>
            <Image source={require('../assets/SearchIcon.png')} style={styles.icon} />

            <TextInput
                style={styles.input}
                editable={!disabledInput}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search"
            />
        </View>
    );

    return onPress ? (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            {Content}
        </TouchableOpacity>
    ) : (
        Content
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: 343,
        height: 44,
        backgroundColor: '#F8F9FE',
        borderRadius: 24,
        paddingHorizontal: 16,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    icon: {
        width: 16,
        height: 16,
    }
});

export default SearchBar;
