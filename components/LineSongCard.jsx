import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, Dimensions, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const CARD_WIDTH = screenWidth * 0.88;
const CARD_HEIGHT = 50;
const IMAGE_WIDTH = CARD_WIDTH * 0.23;

const LineSongCard = ({ imgUrl, title, singer, songUrl }) => {

  const handlePlay = () => {
    if (songUrl) {
      Linking.openURL(songUrl);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePlay} activeOpacity={0.8}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: imgUrl }} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.singer}>{singer}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#F8F9FE',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
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
  imageWrapper: {
    width: IMAGE_WIDTH,
    height: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'cover',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  singer: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 14,
    color: '#1F2024',
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    color: '#71727A',
  },
});

export default LineSongCard;
