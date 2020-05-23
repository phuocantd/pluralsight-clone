import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {globalStyles} from 'global/styles';
import Recent from 'components/recent';
import NotFound from './notFound';
import ResultSearch from './result';

const recents = [
  {
    id: '1',
    text: 'react',
    success: true,
  },
  {
    id: '2',
    text: 'zxczxc',
    success: false,
  },
];

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [listRecent, setListRecent] = useState(recents);
  const [isRecent, setIsRecent] = useState(true);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleEnter = () => {
    if (searchValue !== '') {
      setListRecent([
        {id: Math.random().toString(), text: searchValue},
        ...listRecent,
      ]);
      Keyboard.dismiss();
      setIsRecent(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#fff"
          autoFocus={true}
          value={searchValue}
          onChangeText={text => {
            setSearchValue(text);
            if (text === '') {
              setIsRecent(true);
            }
          }}
          onSubmitEditing={handleEnter}
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={styles.iconClear}
          onPress={() => {
            setSearchValue('');
            setIsRecent(true);
          }}>
          {searchValue !== '' && (
            <IconMaterialIcons name="clear" color="#fff" size={23} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {isRecent ? (
          searchValue === '' && (
            <Recent list={listRecent} setList={setListRecent} />
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
    backgroundColor: '#0D0F12',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    fontSize: 23,
    marginLeft: 15,
    color: '#fff',
    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  iconClear: {
    marginRight: 10,
    paddingRight: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
    marginTop: 15,
  },
  header: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listRecent: {
    marginTop: 10,
  },
  recentText: {color: '#fff', fontSize: 18},
  clear: {color: 'blue', fontSize: 18},
  itemRecent: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  iconTime: {
    marginTop: 3,
  },
  textRecent: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  content: {flex: 1},
});
