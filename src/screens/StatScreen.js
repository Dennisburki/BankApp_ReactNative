import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Stats from '../components/Stats'
import data from '../../assets/data.json'
import GlobalContext from '../helpers/GlobalContext'
import { useFocusEffect } from '@react-navigation/native'




const StatScreen = () => {

  const contextValue = useContext(GlobalContext)
  const [showChart, setShowChart] = useState(data[contextValue.index].incomes)

  useEffect(() => {
    setShowChart(data[contextValue.index].incomes)

  }, [contextValue.user])

  useFocusEffect(() => {
    setShowChart(data[contextValue.index].incomes)
  })

  
  
  return (
    <View style={{alignItems:'center', justifyContent:'center', flex:1, paddingTop:35}}>
            <LinearGradient colors={['#8C366c', '#6e64e7']} style={styles.background} />
    <Stats data={showChart}/>
    <Stats data={data[contextValue.index].expenses} />
    </View>
  )
}

export default StatScreen

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '106%',
  },
})