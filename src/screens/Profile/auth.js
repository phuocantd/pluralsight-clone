/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Stores} from 'tools/context/stores';

export default function AuthProfile({
  colors,
  handleUpdateProfile,
  handleViewAvatar,
}) {
  const {profile} = useContext(Stores);

  const composeText = style =>
    StyleSheet.compose(
      style,
      colors.text,
    );

  return (
    <View style={styles.content}>
      <View style={styles.info}>
        <TouchableOpacity
          onPress={() => handleViewAvatar(profile.name, profile.avatar)}>
          <Image source={{uri: profile.avatar}} style={styles.imgPostrait} />
        </TouchableOpacity>
        <Text style={composeText(styles.name)}>{profile.name}</Text>
      </View>
      {/* <Text
        style={composeText({
          marginTop: 40,
          fontSize: 17,
          fontWeight: 'bold',
        })}>
        Activity insights (last 30 day)
      </Text> */}
      <View style={[colors.separator, {height: 0.5, marginTop: 20}]} />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View style={{justifyContent: 'space-between'}}>
          <Text style={composeText({fontSize: 15})}>Type:</Text>
          <Text style={composeText({fontSize: 15, marginTop: 5})}>Point:</Text>
        </View>
        <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
          <Text style={composeText({fontSize: 15})}>{profile.type}</Text>
          <Text style={composeText({fontSize: 15, marginTop: 5})}>
            {profile.point}
          </Text>
        </View>
      </View>
      <View style={[colors.separator, {height: 0.5, marginTop: 10}]} />
      <View style={{marginTop: 10}}>
        <Text style={composeText({fontSize: 18})}>Email: {profile.email}</Text>
        <Text style={composeText({fontSize: 18, marginTop: 10})}>
          Phone: {profile.phone}
        </Text>
      </View>
      <TouchableOpacity
        style={StyleSheet.compose(
          styles.btn,
          colors.btn,
        )}
        onPress={handleUpdateProfile}>
        <Text
          style={StyleSheet.compose(
            styles.textBtn,
            colors.textBtn,
          )}>
          Update profile
        </Text>
      </TouchableOpacity>
      {/* <View style={{marginTop: 30}}>
        <Text style={composeText({fontSize: 13})}>MOST ACTIVE TIME OF DAY</Text>
        <Text style={composeText({fontWeight: 'bold', fontSize: 20})}>
          11:00 AM
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={composeText({fontSize: 13})}>MOST VIEWED SUBJECT</Text>
        <Text style={composeText({fontWeight: 'bold', fontSize: 20})}>
          It Ops
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgPostrait: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {fontSize: 20, marginLeft: 20},
  btn: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  textBtn: {textTransform: 'uppercase', marginVertical: 8, fontSize: 15},
});
