import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import Recent from 'components/recent';
import NotFound from './notFound';
import ResultSearch from './ResultSearch';
import {search} from 'api/course';

export default function Search({navigation}) {
  const {colors, mode} = React.useContext(ThemeContext);

  const [searchValue, setSearchValue] = useState('');
  const [listRecent, setListRecent] = useState([]);
  const [isRecent, setIsRecent] = useState(true);
  const [listResult, setListResult] = useState([]);

  useEffect(() => {
    loadRecent();
  }, []);

  const loadRecent = async () => {
    const recents = await AsyncStorage.getItem('search-recents');
    console.log('load recents', JSON.parse(recents));
    setListRecent(JSON.parse(recents) || []);
  };

  const handleSearch = async (key, cb) => {
    try {
      const res = await search(key);
      setListResult(_.get(res, 'data.payload.rows', []) || []);
    } catch (error) {}
    cb && cb();
  };

  const handleEnter = async () => {
    if (searchValue !== '') {
      const recents = [
        {id: Math.random().toString(), text: searchValue},
        ...listRecent,
      ];
      await AsyncStorage.setItem('search-recents', JSON.stringify(recents));
      Keyboard.dismiss();
      handleSearch(searchValue, () => {
        setListRecent(recents);
        setIsRecent(false);
      });
    }
  };

  const handleSelectRecent = recent => {
    handleSearch(recent, () => {
      setSearchValue(recent);
      setIsRecent(false);
    });
  };

  return (
    <View
      style={StyleSheet.compose(
        globalStyles.container,
        colors.container,
      )}>
      <View
        style={StyleSheet.compose(
          styles.searchBar,
          colors.background1,
        )}>
        <TextInput
          style={StyleSheet.flatten([
            styles.searchInput,
            colors.borBt,
            colors.text,
          ])}
          placeholder="Search..."
          placeholderTextColor={mode === 'dark' ? '#fff' : '#000'}
          autoFocus={true}
          value={searchValue}
          onChangeText={text => {
            setSearchValue(text);
            if (text === '') {
              setIsRecent(true);
            } else {
              setIsRecent(true);
            }
          }}
          onSubmitEditing={handleEnter}
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={StyleSheet.compose(
            styles.iconClear,
            colors.borBt,
          )}
          onPress={() => {
            setSearchValue('');
            setIsRecent(true);
            setListResult([]);
          }}>
          {searchValue !== '' && (
            <IconMaterialIcons name="clear" style={colors.text} size={23} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {isRecent ? (
          searchValue === '' ? (
            <Recent
              list={listRecent}
              setList={setListRecent}
              handleSelectRecent={handleSelectRecent}
            />
          ) : (
            <View />
          )
        ) : !_.isEmpty(listResult) ? (
          <ResultSearch list={listResult} navigation={navigation} />
        ) : (
          <NotFound name={searchValue} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    fontSize: 23,
    marginLeft: 15,
    borderBottomWidth: 0.7,
  },
  iconClear: {
    marginRight: 10,
    paddingRight: 10,
    borderBottomWidth: 0.4,
    marginTop: 15,
  },
  content: {flex: 1},
});
