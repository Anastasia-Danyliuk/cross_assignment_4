import React from 'react';
import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';

const AddButton = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Song added')}
      >
        <Text style={styles.text}>Add song</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#006FFD',
    width: 307,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default AddButton;
