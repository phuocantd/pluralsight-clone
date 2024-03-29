import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {ThemeContext} from 'tools/context/theme';
import {LOGIN, REGISTER, FORGOTPASSWORD} from 'global/constants';
import LoginScreen from 'screens/Login';
import RegisterScreen from 'screens/Register';
import ForgotPasswordScreen from 'screens/ForgotPassword';

const Stack = createStackNavigator();

export default function AuthStack() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerTintColor: colors.text.color,
        headerStyle: colors.background1,
        headerTitleStyle: colors.text,
      }}>
      <Stack.Screen
        name={LOGIN}
        component={LoginScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconMaterialIcons
                style={StyleSheet.compose(
                  styles.iconBack,
                  colors.text,
                )}
                name="arrow-back"
                size={20}
              />
            </TouchableOpacity>
          ),
          title: 'Sign In',
        })}
      />
      <Stack.Screen
        name={REGISTER}
        component={RegisterScreen}
        options={{title: 'Sign up'}}
      />
      <Stack.Screen
        name={FORGOTPASSWORD}
        component={ForgotPasswordScreen}
        options={{title: 'Forgot Password'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  iconBack: {
    marginLeft: 13,
  },
});
