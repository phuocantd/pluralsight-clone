/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {ActivityIndicator, View, Text, Platform} from 'react-native';

export default class CoreLoading extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.disable === true ? false : true,
      textLoading: props.textLoading || '',
    };
  }

  onOpen(text) {
    const {textLoading} = this.state;
    this.setState({loading: true, textLoading: text ? text : textLoading});
  }

  onClose() {
    this.setState({loading: false});
  }

  renderIOS() {
    const {color, size} = this.props;
    if (Platform.OS === 'ios') {
      return (
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 35 / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color || '#1565C0',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: color === 'transparent' ? 0 : 0.2,
            shadowRadius: 2,
            elevation: 2,
          }}>
          <ActivityIndicator color={'#fff'} size={size || 'small'} />
        </View>
      );
    }
    return null;
  }

  renderAndroid() {
    const {color, size} = this.props;
    if (Platform.OS === 'ios') {
      return null;
    }
    return (
      <ActivityIndicator color={color || '#1565C0'} size={size || 'large'} />
    );
  }

  renderMask() {
    const {useMask, maskStyle} = this.props;
    if (!useMask) {
      return null;
    }
    return (
      <View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#000',
            opacity: 0.3,
          },
          maskStyle,
        ]}
      />
    );
  }

  render() {
    const {
      style,
      backgroundColor,
      pointerEvents,
      textLoadingStyle,
    } = this.props;
    const {loading, textLoading} = this.state;
    if (!loading) {
      return null;
    }
    return (
      <View
        pointerEvents={pointerEvents}
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor || 'transparent',
          },
          style,
        ]}>
        {this.renderMask()}
        {this.renderIOS()}
        {this.renderAndroid()}
        <Text style={[textLoadingStyle]} numberOfLines={1}>
          {textLoading}
        </Text>
      </View>
    );
  }
}

CoreLoading.defaultProps = {
  textLoadingStyle: {
    width: '100%',
    paddingVertical: 5,
    textAlign: 'center',
    color: '#fff',
  },
};
