import React from 'react';
import type { PropsWithChildren } from 'react';
import {

  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreens from './screens/MealsOverviewScreens';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from './screens/FavoriteScreen';
import { colors } from './assets/constant/color';
//import FavoriteContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux';
import { store } from "./store/redux/store";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#442727" },
        headerTintColor: 'white',
        headerTitleAlign: "center",
        sceneContainerStyle: { backgroundColor: "#4228289a" },
        drawerContentStyle: {
          backgroundColor: "#3b2a2a",
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: "#6d6464"

      }}>
      <Drawer.Screen name='Categories'
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (<Ionicons name='home' color={color} size={size} />)
        }} />
      <Drawer.Screen name='Favorites'
        component={FavoriteScreen}
        options={{
          title: "Favorite Items",
          drawerIcon: ({ color, size }) => (<Ionicons name='star' color={color} size={size} />)
        }} />
    </Drawer.Navigator>
  )
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={colors.rootColor} />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#442727" },
            headerTintColor: 'white',
            headerTitleAlign: "center",
            cardStyle: { backgroundColor: "#4228289a" }
          }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailsScreen}
              options={{
                title: 'About the Meal',
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverviewScreens}
              options={{
                title: 'Meals OverView',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  )

}
export default App;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.rootColor,
  }
})
