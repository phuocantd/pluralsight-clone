import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {PATHS, PATHDETAIL, AUTHORDETAIL} from 'global/constants';
import {ThemeContext} from 'tools/context/theme';
import {imageScroll, listPath, listSkill, listTopAuthor} from 'data/browse';
import ImageButton from 'components/imageButtonMedium';
import ScrollImage from 'components/scrollImage';
import SkillScroll from 'components/scrollHorizontal/skills';
import PathScroll from 'components/scrollHorizontal/paths';
import AuthorScroll from 'components/scrollHorizontal/authors';

export default function Browse({navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const seeAllPath = (title, items) =>
    navigation.navigate(PATHS, {items, title});

  const handleDetailPath = () =>
    navigation.navigate(PATHDETAIL, {title: 'Angular denver 2019'});

  const handleDetailAuthor = () => navigation.navigate(AUTHORDETAIL);

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ScrollView>
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
