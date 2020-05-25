import React from 'react';
import {View, ScrollView} from 'react-native';

import {globalStyles} from 'global/styles';
import {LISTPATH} from 'global/constants';
import PathScroll from 'components/scrollHorizontal/paths';

export default function Paths({route, navigation}) {
  const {items} = route.params;

  const handleSeeAll = (title, itemsPath) =>
    navigation.navigate(LISTPATH, {items: itemsPath, title});

  const handleDetailPath = (screen, title) =>
    navigation.navigate(screen, {title});

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Conference"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Software Development"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="IT Ops"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Information Security"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Data Professional"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Bussiness Professional"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Creative Professional"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Manufacturing abd Design"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Architecture $ Construction"
          items={items}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Certifications"
          items={items}
          handleDetail={handleDetailPath}
        />
      </ScrollView>
    </View>
  );
}
