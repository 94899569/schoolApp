import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import BottomTab from "./components/BottomTab";
import Profile from "./screens/Profile";
import Lessons from "./screens/Lessons";
import LessonChoose from "./screens/LessonChoose";
import LessonContainer from "./components/LessonContainer";
import HomeWork from "./screens/HomeWork";
import Schedule from "./screens/Schedule";
import Scores from "./screens/Scores";
import Notifications from "./screens/Notifications";
import { LogBox } from "react-native"
import Information from "./screens/Information";
import LessonsAll from "./screens/LessonsAll";
LogBox.ignoreAllLogs();

const Stack = createStackNavigator()
const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="bottom" component={BottomTab} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="lesson" component={Lessons} />
        <Stack.Screen name="less" component={LessonChoose} />
        <Stack.Screen name="homework" component={HomeWork} />
        <Stack.Screen name="lessContainer" component={LessonContainer} />
        <Stack.Screen name="schedule" component={Schedule} />
        <Stack.Screen name="score" component={Scores} />
        <Stack.Screen name="notification" component={Notifications} />
        <Stack.Screen name="info" component={Information} />
        <Stack.Screen name="all" component={LessonsAll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;