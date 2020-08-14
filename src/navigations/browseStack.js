import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  BROWSE,
  PROFILE,
  PATHS,
  LISTPATH,
  PATHDETAIL,
  SETTINGS,
  CONTACT,
  FEEDBACK,
  AUTHORDETAIL,
  COURSEDETAIL,
  SKILL,
  FEATURE,
  LISTCOURSE,
  UPDATEPROFILE,
  RATING,
  LISTRATE,
} from 'global/constants';
import {OptionHeaderRight} from 'global/navigation';
import {ThemeContext} from 'tools/context/theme';
import BrowseScreen from 'screens/Browse';
import ProfileScreen from 'screens/Profile';
import PathsScreen from 'screens/paths';
import ListPathScreen from 'screens/listPath';
import PathDetailScreen from 'screens/pathDetail';
import SettingsScreen from 'screens/setting';
import ContactScreen from 'screens/contact';
import FeedbackScreen from 'screens/feedback';
import AuthorDetailScreen from 'screens/authorDetail';
import CourseDetailScreen from 'src/screens/courseDetail';
import SkillScreen from 'screens/skill';
import FeatureScreen from 'screens/features';
import ListCourseScreen from 'screens/ListCourse';
import UpdateProfileScreen from 'screens/updateProfile';
import Rating from 'screens/Rating';
import ListRate from 'src/screens/ListRate';

const Stack = createStackNavigator();

export default function BrowseStack() {
  const {colors} = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName={BROWSE}
      screenOptions={{
        headerTintColor: colors.text.color,
        headerStyle: colors.background1,
        headerTitleStyle: colors.text,
      }}>
      <Stack.Screen
        name={BROWSE}
        component={BrowseScreen}
        options={OptionHeaderRight}
      />
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={UPDATEPROFILE} component={UpdateProfileScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={FEEDBACK} component={FeedbackScreen} />
      <Stack.Screen name={CONTACT} component={ContactScreen} />
      <Stack.Screen name={PATHS} component={PathsScreen} />
      <Stack.Screen
        name={LISTPATH}
        component={ListPathScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen name={PATHDETAIL} component={PathDetailScreen} />
      <Stack.Screen
        name={AUTHORDETAIL}
        component={AuthorDetailScreen}
        options={({navigation, route}) => ({
          title: 'Author',
        })}
      />
      <Stack.Screen
        name={COURSEDETAIL}
        component={CourseDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SKILL}
        component={SkillScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name={FEATURE}
        component={FeatureScreen}
        options={({navigation, route}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={LISTCOURSE}
        component={ListCourseScreen}
        options={{title: ''}}
      />
      <Stack.Screen name={RATING} component={Rating} />
      <Stack.Screen name={LISTRATE} component={ListRate} />
    </Stack.Navigator>
  );
}
