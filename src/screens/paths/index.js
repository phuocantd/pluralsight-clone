import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import {LISTPATH} from 'global/constants';
import {
  listPath,
  listPathConferences,
  listPathSoftwareDevelopment,
  listPathITOps,
} from 'data/browse';
import PathScroll from 'components/scrollHorizontal/paths';

export default function Paths({route, navigation}) {
  const {colors} = React.useContext(ThemeContext);

  const handleSeeAll = (title, itemsPath) =>
    navigation.navigate(LISTPATH, {items: itemsPath, title});

  const handleDetailPath = (screen, title) =>
    navigation.navigate(screen, {title});

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <ScrollView>
        <PathScroll
          handleSeeAll={handleSeeAll}
          title={listPathConferences.title}
          items={listPathConferences.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title={listPathSoftwareDevelopment.title}
          items={listPathSoftwareDevelopment.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title={listPathITOps.title}
          items={listPathITOps.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Information Security"
          items={listPath.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Data Professional"
          items={listPath.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Bussiness Professional"
          items={listPath.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Creative Professional"
          items={listPath.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Manufacturing abd Design"
          items={listPath.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Architecture $ Construction"
          items={listPath.list}
          handleDetail={handleDetailPath}
        />
        <PathScroll
          handleSeeAll={handleSeeAll}
          title="Certifications"
          items={listPath.list}
          handleDetail={handleDetailPath}
        />
      </ScrollView>
    </View>
  );
}
