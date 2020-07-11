import {Alert} from 'react-native';

export default class AppHelper {
  static notificationError(mess, callback) {
    Alert.alert(
      'Lỗi',
      mess,
      [
        {
          text: 'Xác nhận',
          onPress: () => {
            callback && callback();
          },
        },
      ],
      {cancelable: false},
    );
  }
}
