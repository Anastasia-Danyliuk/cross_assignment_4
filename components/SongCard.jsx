import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, Platform } from 'react-native';

const SongCard = ({ imgUrl, title, singer, songUrl }) => {
  const handlePlay = () => {
    if (songUrl) {
      Linking.openURL(songUrl);
    }
  };

  return (
    <View>
    <TouchableOpacity style={styles.container} onPress={handlePlay} activeOpacity={0.8}>
      <Image style={styles.image} source={{ uri: imgUrl }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.singer}>{singer}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 189,
    backgroundColor: '#F8F9FE',
    borderRadius: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  image: {
    width: '100%',
    height: '65%',
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 14,
    color: '#1F2024',
    marginLeft: 8,
    marginBottom: 2,
  },
  singer: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    color: '#71727A',
    marginLeft: 8,
    marginBottom: 4,
  },
});

export default SongCard;
