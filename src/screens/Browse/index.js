/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {globalStyles} from 'global/styles';
import {PATHS, PATHDETAIL, AUTHORDETAIL, LOGIN} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {AuthContext} from 'tools/context/auth';
import {imageScroll, listPath, listSkill, listTopAuthor} from 'data/browse';
import ImageButton from 'components/imageButtonMedium';
import ScrollImage from 'components/scrollImage';
import SkillScroll from 'components/scrollHorizontal/skills';
import PathScroll from 'components/scrollHorizontal/paths';
import AuthorScroll from 'components/scrollHorizontal/authors';

export default function Browse({navigation}) {
  const {colors} = useContext(ThemeContext);
  const {state} = useContext(AuthContext);

  const seeAllPath = (title, items) =>
    navigation.navigate(PATHS, {items, title});

  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  const handleDetailAuthor = () => navigation.navigate(AUTHORDETAIL);

  const handleSignin = () => navigation.navigate(LOGIN);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ScrollView>
        {!state.isAuth && (
          <View style={{margin: 25}}>
            <Text
              style={StyleSheet.compose(
                {fontWeight: 'bold', fontSize: 23},
                colors.text,
              )}>
              Sign in to skill up to day
            </Text>
            <Text
              style={StyleSheet.compose(
                {fontSize: 18, marginVertical: 5},
                colors.text,
              )}>
              Keep your skills up-to-date with access to thousands if courses by
              industry experts.
            </Text>
            <TouchableOpacity
              onPress={handleSignin}
              style={StyleSheet.compose(
                {borderRadius: 6, marginTop: 5},
                colors.bgBtn,
              )}>
              <Text
                style={{
                  color: 'white',
                  textTransform: 'uppercase',
                  alignSelf: 'center',
                  fontSize: 18,
                  paddingVertical: 8,
                }}>
                Sign in to start watching
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <ImageButton
          url="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-686x371.jpeg"
          title="new releases"
        />
        <ImageButton
          url="https://hypertechx.com/wp-content/uploads/2017/10/gettyimages-186450097.jpg"
          title="recommended for you"
        />
        <ScrollImage items={imageScroll} />
        <SkillScroll
          title={listSkill.title}
          items={listSkill.list}
          handleDetail={() => console.log('skill clicked')}
        />
        <PathScroll
          handleSeeAll={seeAllPath}
          handleDetail={handleDetailPath}
          title={listPath.title}
          items={listPath.list}
        />
        <AuthorScroll
          handleDetail={handleDetailAuthor}
          title={listTopAuthor.title}
          items={listTopAuthor.list}
        />
      </ScrollView>
    </View>
  );
}
