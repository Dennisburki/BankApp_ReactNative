import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import AccountScreen from '../screens/AccountScreen'
import StatScreen from '../screens/StatScreen'
import { Ionicons } from '@expo/vector-icons'
import StackNavigation from './StackNavigation'


const Tab = createBottomTabNavigator();

const MyTabs = () => {
  
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarStyle: {
                  backgroundColor: '#6e64e7',
                  
                  borderTopColor: '#6e64e7',
                  
                  
                },
                headerShown: false,
                tabBarLabelStyle : {
                  color : 'white'
                },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Account') {
            iconName = 'list'
          } else if (route.name === 'Stats') {
            iconName = 'stats-chart'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color='white'} />
          
        }

        

      })}
    >
      <Tab.Screen name="Home" component={StackNavigation}  />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Stats" component={StatScreen} />
    </Tab.Navigator>
  )
}

export default MyTabs
