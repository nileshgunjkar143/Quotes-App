import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from '@rneui/themed';
import {AuthorPage, Home, QuotePage} from '../../pages';
import {QuoteAdd} from '../quote';

const Tab = createBottomTabNavigator<any>();
const Stack = createNativeStackNavigator<any>();

const Screens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#e1d64c'},
        headerTitleStyle: {color: '#1e2225'},
        tabBarStyle: {backgroundColor: '#e1d64c'},
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontWeight: 'bold', paddingBottom: 3},
        tabBarActiveBackgroundColor: '#bcb233',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({size}) => {
            return (
              <Icon
                name="home"
                style={{width: size, height: size}}
                type="font-awesome"
                color="#1e2225"
              />
            );
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Authors"
        options={{
          tabBarLabel: 'Authors',
          tabBarIcon: ({size}) => {
            return (
              <Icon
                name="user"
                style={{width: size, height: size}}
                type="font-awesome"
                color="#1e2225"
              />
            );
          },
        }}
        component={AuthorPage}
      />
      <Tab.Screen
        name="Quotes"
        options={{
          tabBarLabel: 'Quotes',
          tabBarIcon: ({size}) => {
            return (
              <Icon
                name="quote-left"
                style={{width: size, height: size}}
                type="font-awesome"
                color="#1e2225"
              />
            );
          },
        }}
        component={QuotePage}
      />
    </Tab.Navigator>
  );
};
const MyTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Screens"
        component={Screens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add New Quote"
        component={QuoteAdd}
        options={{
          headerStyle: {backgroundColor: '#e1d64c'},
          headerTitleStyle: {color: 'black'},
          headerTintColor: 'black',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyTab;
