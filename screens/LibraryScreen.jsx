import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Switcher from '../components/Switcher';
import LineSongCard from "../components/LineSongCard";
import SongCard from "../components/SongCard";

export default function LibraryScreen() {
    const [activeTab, setActiveTab] = useState('Saved');

    const renderContent = () => {
        if (activeTab === 'Saved') {
            return (
                <View>

                    <View style={styles.container}>
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
                    </View>


                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.container}
                    >
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
                                title="Wer weiß das schon"
                                singer="Till Lindemann"
                                imgUrl="https://www.nastylittleman.com/wp-content/uploads/2019/11/Screen-Shot-2019-10-31-at-1.09.54-PM.png"
                                songUrl="https://www.youtube.com/watch?v=lZNb0E4vB5Y"
                            />
                        </View>

                        <View style={styles.card}>
                            <SongCard
                                title="Keine Lust"
                                singer="Rammstein"
                                imgUrl="https://i.scdn.co/image/ab67616d0000b273952d246fd1eac33a1a2c2603"
                                songUrl="https://youtu.be/rmmMZcly25o?si=wytl56vTFb-aH6vS"
                            />
                        </View>
                    </ScrollView>

                </View>
            );
        }

        if (activeTab === 'Liked') {
            return (
                <View style={styles.container}>
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
                </View>
            );
        }

        if (activeTab === 'Albums') {
            return (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.container}
                >
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
                            title="Wer weiß das schon"
                            singer="Till Lindemann"
                            imgUrl="https://www.nastylittleman.com/wp-content/uploads/2019/11/Screen-Shot-2019-10-31-at-1.09.54-PM.png"
                            songUrl="https://www.youtube.com/watch?v=lZNb0E4vB5Y"
                        />
                    </View>

                    <View style={styles.card}>
                        <SongCard
                            title="Keine Lust"
                            singer="Rammstein"
                            imgUrl="https://i.scdn.co/image/ab67616d0000b273952d246fd1eac33a1a2c2603"
                            songUrl="https://youtu.be/rmmMZcly25o?si=wytl56vTFb-aH6vS"
                        />
                    </View>
                </ScrollView>
            );
        }
    };

    return (
        <ScrollView style={{ padding: 20 }}>
            <Switcher style = {{paddingLeft:32}} activeTab={activeTab} setActiveTab={setActiveTab} />
            <View style={{ marginTop: 30}}>
                {renderContent()}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    card: {
        marginRight: 14,
    }
});
