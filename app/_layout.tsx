import "react-native-reanimated";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";

import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";

// --- Stack Navigator (All Courses)
const Stack = createNativeStackNavigator();
function AllCoursesStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{
          title: "All Courses",
          headerLeft: () => (
            <Button title="☰" onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }: any) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}

// --- Tab Navigator (Courses section)
const Tab = createBottomTabNavigator();
function CoursesTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Courses" component={AllCoursesStack} />
      <Tab.Screen name="My Wishlist" component={WishlistScreen} />
    </Tab.Navigator>
  );
}

// --- Drawer Navigator (Root)
const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
      <Drawer.Navigator initialRouteName="Courses">
        <Drawer.Screen
          name="Courses"
          component={CoursesTabs}
          options={{ title: "Courses" }}
        />
        <Drawer.Screen
          name="My Profile"
          component={ProfileScreen}
          options={{ title: "My Profile" }}
        />
      </Drawer.Navigator>
  );
}
