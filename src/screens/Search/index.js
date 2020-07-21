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
import ResultSearch from './result';

// const recents = [
//   {
//     id: '1',
//     text: 'react',
//     success: true,
//   },
//   {
//     id: '2',
//     text: 'zxczxc',
//     success: false,
//   },
// ];

export default function Search() {
  const {colors, mode} = React.useContext(ThemeContext);

  const [searchValue, setSearchValue] = useState('');
  const [listRecent, setListRecent] = useState([]);
  const [isRecent, setIsRecent] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  useEffect(() => {
    loadRecent();
  }, []);

  const loadRecent = async () => {
    const recents = await AsyncStorage.getItem('search-recents');
    console.log('load recents', JSON.parse(recents));
    setListRecent(JSON.parse(recents) || []);
  };

  const handleSearch = (key, cb) => {
    setTimeout(() => {
      console.log('key', key);
      cb && cb();
    }, 3000);
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
        setIsSuccess(false);
        console.log('await');
      });
    }
  };

  const handleSelectRecent = recent => {
    setSearchValue(recent);
    setIsRecent(false);
    setIsSuccess(false);
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
        ) : isSuccess ? (
          <ResultSearch />
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
