import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import AjoutRevenu from '../components/AjoutRevenus'
import { useNavigation } from '@react-navigation/native'


const AddIncomeScreen = (props) => {
  
  return (
    <View style={{flex:1}}>
      
      <AjoutRevenu/>
    </View>

    
  )
}

export default AddIncomeScreen