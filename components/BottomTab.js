import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Lessons from '../screens/Lessons';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const homeName = "Нүүр";
const LessonsName = "Хичээл";
const profile = "Профайл";

const BottomTab = () => {
  return (
    // <View style={{ height: '100%' }}>
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 40,
          paddingBottom: 0,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === LessonsName) {
            iconName = focused ? 'book' : 'book-outline';
          } else if (rn === profile) {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4047BB',
        inactiveTintColor: 'gray',
      }}
    >

      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={LessonsName} component={Lessons} />
      <Tab.Screen name={profile} component={Profile} />
      {/* <Tab.Screen name={LessonsName} component={Lessons} />
        <Tab.Screen name={pointName} component={AllPoints} /> */}

    </Tab.Navigator>
    // </View>
  )
}

export default BottomTab