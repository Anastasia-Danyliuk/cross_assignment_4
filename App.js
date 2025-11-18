import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
});