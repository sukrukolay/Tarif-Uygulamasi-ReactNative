import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Food from './pages/Food'
import Categories from './pages/Categories'
import FoodDetail from './pages/FoodDetail'
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='categoriesScreen' component={Categories} options={{
          title: 'Categories',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'orange' },
        }} />
        <Stack.Screen name='foodScreen' component={Food} options={{
          title: 'Meals',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'orange' },
          headerTintColor: 'orange',
        }} />
        <Stack.Screen name='foodDetailScreen' component={FoodDetail} options={{
          title: 'Detail',
          headerTitleAlign: 'center',
          headerTitleStyle: { color: 'orange' },
          headerTintColor: 'orange',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router