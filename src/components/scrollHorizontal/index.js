import React, {Suspense} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const course = React.lazy(() => import('../course'));
const path = React.lazy(() => import('../path'));
const skill = React.lazy(() => import('../skill'));
const author = React.lazy(() => import('../author'));

const lazyMap = {
  course,
  path,
  skill,
  author,
};

export default function Section({title, items, component}) {
  const ItemComponent = lazyMap[component];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all ></Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map(item => (
          <Suspense fallback={null} key={Math.random().toString()}>
            <ItemComponent item={item} />
          </Suspense>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 5,
    marginTop: 10,
    color: '#fff',
    fontSize: 17,
  },
  seeAll: {
    marginTop: 14,
    marginRight: 10,
    color: '#fff',
    fontSize: 13,
  },
});
