/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
// import {CoreLoading} from 'react-native-nhancdt';
import IconIOS from 'react-native-vector-icons/Ionicons';
import AppHelper from 'tools/AppHelper';

export default class ImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      file: null,
      rotate: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const {navigation} = this.props;
      const {file} = this.props.route.params;
      if (file) {
        this.setState({file, loading: false});
      } else {
        AppHelper.notificationError('Không tìm thấy hình ảnh!', () => {
          navigation.goBack();
        });
      }
    });
  }

  onAction(name) {
    const {navigation} = this.props;
    const {rotate} = this.state;
    if (name === 'back') {
      navigation.goBack();
    } else if (name === 'rotate') {
      this.setState({rotate: parseInt(rotate, 10) === 360 ? 0 : rotate - 90});
    }
  }

  renderPadding() {
    if (this.props.noPadding) {
      return 1;
    }
    if (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (window.height === 812 || window.width === 812)
    ) {
      return 32;
    }
    return 25;
  }

  renderAction() {
    return (
      <View style={styles.action}>
        <Button
          icon="md-arrow-round-back"
          onPress={() => {
            this.onAction('back');
          }}
        />
        <View style={{flex: 1}} />
        <Button
          icon="md-sync"
          onPress={() => {
            this.onAction('rotate');
          }}
        />
      </View>
    );
  }

  renderBody() {
    const {loading, file, rotate} = this.state;
    if (loading) {
      //   return <CoreLoading />;
      return <Text>Loading</Text>;
    }
    return (
      <React.Fragment>
        <View style={styles.coverFileName}>
          <Text style={styles.title} numberOfLines={1}>
            {file.fileName}
          </Text>
        </View>
        <View style={styles.coverImage}>
          {/* <CoreLoading
            backgroundColor="#000"
            textLoading="Đang tải hình ảnh..."
          /> */}
          <Image
            source={{uri: file.uri}}
            resizeMode="contain"
            style={[styles.image, {transform: [{rotate: `${rotate}deg`}]}]}
          />
        </View>
      </React.Fragment>
    );
  }

  render() {
    return (
      <View style={[styles.container, {paddingTop: this.renderPadding() + 10}]}>
        <View style={styles.all}>{this.renderBody()}</View>
        {this.renderAction()}
      </View>
    );
  }
}

const Button = ({style, onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.actionButton, style]}>
      <IconIOS name={icon} style={styles.icon} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000'},
  all: {flex: 1},
  coverFileName: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
  coverImage: {flex: 1, padding: 10},
  image: {position: 'absolute', top: 0, left: 5, right: 5, bottom: 5},
  action: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  actionButton: {
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {color: '#fff'},
});
