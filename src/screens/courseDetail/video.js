import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Share,
  View,
  ImageBackground,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import VideoPlayer from 'react-native-video-player';
// import Video from 'react-native-video';

export default function Video({image, handleBack, url, lesson}) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View>
      {url ? (
        <VideoPlayer
          video={{
            uri: url,
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: image}}
        />
      ) : (
        <ImageBackground source={{uri: image}} style={styles.image} />
      )}
      {/* <Video
        key={lesson.id}
        autoplay={true}
        controls={false}
        disableFocus={true}
        resizeMode="stretch"
        style={styles.backgroundVideo}
        source={{
          uri: url,
        }}
      /> */}
      <TouchableOpacity style={styles.downIcon} onPress={handleBack}>
        <IconFontAwesome name="chevron-down" color="#fff" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.share} onPress={onShare}>
        <IconEntypo name="share" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {height: 200, justifyContent: 'center', alignItems: 'center'},
  circleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  downIcon: {position: 'absolute', left: 20, top: 20},
  share: {position: 'absolute', top: 20, right: 20},
  backgroundVideo: {
    borderWidth: 1,
    width: '100%',
    height: 225,
  },
});
