import { View, Text } from 'react-native'
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LessonChoose from '../screens/LessonChoose';
import HomeWork from '../screens/HomeWork';

const Tab = createBottomTabNavigator();
const homeName = "Явц";
const LessonsName = "Материал";

const LessonContainer = ({route, navigation}) => {
    const { LessonId } = route.params;
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
        } 
        else if (rn === LessonsName) {
          iconName = focused ? 'document' : 'document-outline';
        } 
        // else if (rn === profile) {
        //   iconName = focused ? 'person' : 'person-outline';
        // }
            
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4047BB',
        inactiveTintColor: 'gray',
      }}
    >

      <Tab.Screen name={homeName} component={LessonChoose} initialParams={{ LessonId }}/>
      <Tab.Screen name={LessonsName} component={HomeWork} initialParams={{ LessonId }} />

      {/* <Tab.Screen name={homeName} children={() => <LessonChoose selectedButton={LessonId} />} />
      <Tab.Screen name={LessonsName} children={() => <HomeWork selectedButton={LessonId} />} /> */}

      {/* <Tab.Screen name={profile} component={Profile} /> */}

    </Tab.Navigator>
    // </View>
  )
}

export default LessonContainer