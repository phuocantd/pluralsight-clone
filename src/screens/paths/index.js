import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {globalStyles} from 'global/styles';
import {LISTPATH} from 'global/constants';
import ScrollHorizontal from 'components/scrollHorizontal';

export default function Paths({route, navigation}) {
  const {items} = route.params;

  const handleSeeAll = (title, itemsPath) =>
    navigation.navigate(LISTPATH, {items: itemsPath, title});

  const handleDetailPath = (screen, title) =>
    navigation.navigate(screen, {title});

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Conference"
          items={items}
          handleDetail={handleDetailPath}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Software Development"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="IT Ops"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Information Security"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Data Professional"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Bussiness Professional"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Creative Professional"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Manufacturing abd Design"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Architecture $ Construction"
          items={items}
        />
        <ScrollHorizontal
          component="path"
          isSeeAll={true}
          handleSeeAll={handleSeeAll}
          title="Certifications"
          items={items}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
