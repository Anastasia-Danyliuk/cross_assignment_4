import React from 'react';
import {ScrollView, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image} from "react-native";
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';
import LineSongCard from '../components/LineSongCard';

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.screen}>
            <View style={styles.topBar}>
            <TouchableOpacity
                style={styles.drawer}
                onPress={() => navigation.openDrawer()}>
                <Image
                    source={require('../assets/MenuIcon.png')}
                    style={{ width: 24, height: 24 }}
                />
            </TouchableOpacity>
            <View style={styles.searchBar}>
                <SearchBar
                    disabledInput={true}
                    onPress={() => navigation.navigate('Search')}
                    containerStyle={styles.searchBarContainer}
                />
            </View>
            </View>

            <Text style={styles.section}>Perfect for you</Text>
            <ScrollView   horizontal
                          showsHorizontalScrollIndicator={false}
                          style={styles.container}>
                <View style={styles.card}>
                    <SongCard
                        title="Fish on"
                        singer="Till Lindemann"
                        imgUrl="https://rammwiki.net/www/w/images/6/6f/Fish_On_cover.png"
                        songUrl="https://www.youtube.com/watch?v=QVzjBPjJY7w"
                    />
                </View>
                <View style={styles.card}>
                    <SongCard
                        style={styles.card}
                        title="Wer weiß das schon"
                        singer="Till Lindemann"
                        imgUrl="https://www.nastylittleman.com/wp-content/uploads/2019/11/Screen-Shot-2019-10-31-at-1.09.54-PM.png"
                        songUrl="https://www.youtube.com/watch?v=lZNb0E4vB5Y"
                    />
                </View>

               <View style={styles.card}>
                   <SongCard
                       style={styles.card}
                       title="Keine Lust"
                       singer="Rammstein"
                       imgUrl="https://i.scdn.co/image/ab67616d0000b273952d246fd1eac33a1a2c2603"
                       songUrl="https://youtu.be/rmmMZcly25o?si=wytl56vTFb-aH6vS"
                   />
               </View>
            </ScrollView>

            <Text style={styles.section}>On Repeat</Text>

            <View style={styles.cardLine}>
                <LineSongCard
                title="Donaukinder"
                singer="Rammstein"
                imgUrl="https://rammwiki.net/www/w/images/6/6f/Fish_On_cover.png"
                songUrl="https://youtu.be/DGclueDSWD4?si=XBkzQ-Qx5s-fYIfe"
            />

              <LineSongCard
                  title="Keine Lust"
                  singer="Rammstein"
                  imgUrl="https://i.scdn.co/image/ab67616d0000b273952d246fd1eac33a1a2c2603"
                  songUrl="https://youtu.be/rmmMZcly25o?si=wytl56vTFb-aH6vS"
              />

                <LineSongCard
                    title="Hallomann"
                    singer="Rammstein"
                    imgUrl="https://rammwiki.net/www/w/images/2/21/Rammstein_cover.png"
                    songUrl="https://www.youtube.com/watch?v=HYTXWZQVPyM&t=2s"
                />

                <LineSongCard
                    title="Deutschland "
                    singer="Rammstein"
                    imgUrl="https://upload.wikimedia.org/wikipedia/uk/f/fd/RammsteinDeutschlandSingleCover.jpg"
                    songUrl="https://www.youtube.com/watch?v=NeQM1c-XCDc"
                />

          </View>

            <Text style={styles.section}>On Trend</Text>

            <ScrollView   horizontal
                          showsHorizontalScrollIndicator={false}
                          style={styles.container}>
                <View style={styles.card}>
                    <SongCard
                        title="Und die Engel singen"
                        singer="Till Lindemann"
                        imgUrl="https://rammwiki.net/www/w/images/thumb/7/7a/UDES_cover.jpg/400px-UDES_cover.jpg"
                        songUrl="https://www.youtube.com/watch?v=qMTxqc75Cko"
                    />
                </View>
                <View style={styles.card}>
                    <SongCard
                        style={styles.card}
                        title="Übers Meer"
                        singer="Till Lindemann"
                        imgUrl="https://cdn-images.dzcdn.net/images/cover/ec723f9a8ddfc2ffa6b7bf6aeeca85d1/0x1900-000000-80-0-0.jpg"
                        songUrl="https://www.youtube.com/watch?v=lZNb0E4vB5Y"
                    />
                </View>

                <View style={styles.card}>
                    <SongCard
                        style={styles.card}
                        title="Keine Lust"
                        singer="Rammstein"
                        imgUrl="https://i.scdn.co/image/ab67616d0000b273952d246fd1eac33a1a2c2603"
                        songUrl="https://youtu.be/rmmMZcly25o?si=wytl56vTFb-aH6vS"
                    />
                </View>
            </ScrollView>
        </ScrollView>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe:{
        flex: 1,
    },
    screen:{
        paddingTop: 50,
    },
    container: {
        flexDirection: "row",
        paddingLeft: 16,

    },
    card:{
        marginRight: 12,
    },
    section: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 14,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingTop: 24,

    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    searchBarContainer:{
        marginLeft: 16,
    },
    drawer:{
        width: 24,
        paddingLeft: 5,
    },
    cardLine:{
        marginLeft: 12,
    }
});
