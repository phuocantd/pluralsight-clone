import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import ImageButton from 'components/imageButtonMedium';
import ScrollImage from 'components/scrollImage';
import {imageScroll, listPath, listSkill, listTopAuthor} from 'data/browse';
import ScrollHorizontal from 'components/scrollHorizontal';

export default function Browse() {
  return (
    <View style={globalStyles.container}>
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
        <ScrollHorizontal
          component="skill"
          title={listSkill.title}
          items={listSkill.list}
        />
        <ScrollHorizontal
          component="path"
          title={listPath.title}
          items={listPath.list}
        />
        <ScrollHorizontal
          component="author"
          title={listTopAuthor.title}
          items={listTopAuthor.list}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
