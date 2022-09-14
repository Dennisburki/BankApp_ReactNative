import { View, Text } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AjoutDepenses from '../components/AjoutDepenses'

const AddPaymentsScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex:1}}>

      <AjoutDepenses/>

    </View>
  )
}

export default AddPaymentsScreen