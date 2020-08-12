/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
  Text,
} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

import {globalStyles} from 'global/styles';
import {ThemeContext} from 'tools/context/theme';
import Recent from 'components/recent';
import NotFound from './notFound';
// import ResultSearch from './ResultSearch';
import {search2} from 'api/course';
import Result from './result';

export default function Search({navigation}) {
  const {colors, mode} = React.useContext(ThemeContext);

  const LIMIT = 5;

  const [searchValue, setSearchValue] = useState('');
  const [listRecent, setListRecent] = useState([]);
  const [data, setData] = useState({});
  const [isRecent, setIsRecent] = useState(true);
  // const [listResult, setListResult] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadRecent();
  }, []);

  const loadRecent = async () => {
    try {
      const recents = await AsyncStorage.getItem('search-recents');
      console.log('load recents', JSON.parse(recents));
      setIsRecent(JSON.parse(recents) || []);
    } catch (error) {
      console.log(error);
      setIsRecent([]);
    }
  };

  const handleSearch = async (key, offset, cb) => {
    try {
      const res = await search2(key, LIMIT, offset || 0);
      setData(_.get(res, 'data.payload', {}) || {});
      setPage(offset / LIMIT);
      setMaxPage(
        Math.max(
          Math.floor(
            (_.get(res, 'data.payload.courses.total', 1) - 1) / LIMIT + 1 || 1,
          ),
          Math.floor(
            (_.get(res, 'data.payload.instructors.total', 1) - 1) / LIMIT + 1 ||
              1,
          ),
          1,
        ),
      );
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
      handleSearch(searchValue, 0, () => {
        setListRecent(recents);
        setIsRecent(false);
      });
    }
  };

  const handleSelectRecent = recent => {
    handleSearch(recent, 0, () => {
      setSearchValue(recent);
      setIsRecent(false);
    });
  };

  const isEmptyData = () => {
    const totalCourses = _.get(data, 'courses.total', 0);
    const totalInstructors = _.get(data, 'instructors.total', 0);

    if (totalCourses === 0 && totalInstructors === 0) {
      return true;
    }
    return false;
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
            setData({});
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
        ) : !isEmptyData() ? (
          <View style={{flex: 1}}>
            <Result data={data} navigation={navigation} />
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10,
                paddingTop: 10,
                borderTopColor: colors.borBt.borderBottomColor,
                borderTopWidth: 0.2,
              }}>
              <Text style={[colors.text, {fontSize: 20, marginRight: 20}]}>
                Page:
              </Text>
              {Array(maxPage)
                .fill(null)
                .map((item, idx) => {
                  return (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => handleSearch(searchValue, idx * LIMIT)}
                      style={[
                        colors.btn,
                        {
                          width: 30,
                          height: 30,
                          borderWidth: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 10,
                          backgroundColor:
                            page === idx ? '#2EA0D6' : 'transparent',
                        },
                      ]}>
                      <Text style={[colors.text, {fontSize: 20}]}>
                        {idx + 1}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
        ) : (
          <NotFound name={searchValue} />
        )}
        {/* <ResultSearch list={listResult} navigation={navigation} /> */}
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
