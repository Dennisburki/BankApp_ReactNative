import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddIncomeScreen from '../screens/AddIncomeScreen'
import AddPaymentsScreen from '../screens/AddPaymentsScreen'
import HomeScreen from '../screens/HomeScreen'
import GlobalProvider from '../helpers/GlobalContext'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (



      <Stack.Navigator initialRouteName='Home' options={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Income' component={AddIncomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Payments' component={AddPaymentsScreen} options={{headerShown: false}}/>
      </Stack.Navigator>


  )
}

export default StackNavigation