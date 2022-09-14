import { View, Text, StyleSheet, FlatList , TouchableOpacity, } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import GlobalContext from '../helpers/GlobalContext'
import data from '../../assets/data.json'
import CardAlex from '../components/CardAlex'
import { useFocusEffect } from '@react-navigation/native'
import { Picker } from "@react-native-picker/picker"
//import Icon from 'react-native-vector-icons/FontAwesome'





const AccountScreen = () => {


  const contextValue = useContext(GlobalContext)
  const { incomes, expenses } = data[contextValue.index]

  const [user, setUser] = useState(contextValue.user);
  const [showTransactions, setShowTransactions] = useState([])
  const [activeShow, setActiveShow] = useState('allTransactions')


  incomes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  expenses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  const allTransaction = [...expenses, ...incomes].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())


  const totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount.replace('€', '').replace(',', '')), 0).toFixed(2)
  const totalIncomes = incomes.reduce((acc, curr) => acc + parseFloat(curr.amount.replace('€', '').replace(',', '')), 0).toFixed(2)
  const bankBalance = (parseFloat(totalIncomes) - parseFloat(totalExpenses)).toFixed(2)


  useFocusEffect(() => {
    setUser(contextValue.user)
  })


  useEffect(() => {

    setShowTransactions(allTransaction)
    setActiveShow('allTransactions')

  }, [user])


  return (


      <View style={styles.container}>

        <LinearGradient colors={['#8C366c', '#6e64e7']} style={styles.background}/>
        

        

        <View style={{ flex : 1.75, flexDirection : 'row', justifyContent : 'flex-end', alignItems  : 'center',  }}>

          <View style={{ flex : 1 }}>

            <View style={{backgroundColor : '#6e64e7', padding : 5, marginEnd : 5, borderTopLeftRadius : 7, borderTopRightRadius : 7 }}>
              <Text style={{ color : '#fdfdff', textAlign : 'center'}}>Total Revenus</Text>
            </View>
            <View style={{ backgroundColor : '#2A2D2E', padding : 5, marginEnd : 5, borderBottomLeftRadius : 7, borderBottomRightRadius : 7  }}>
              <Text style={{ color: '#fdfdff', textAlign : 'center'}}>{totalIncomes} €</Text>
            </View>

          </View>

          <View style={{ flex : 1 }}>

            <View style={{backgroundColor : '#6e64e7', padding : 5, marginStart : 5, borderTopLeftRadius : 7, borderTopRightRadius : 7 }}>
              <Text style={{ color : '#fdfdff', textAlign : 'center'}}>Total Dépenses</Text>
            </View>

            <View style={{ backgroundColor : '#2A2D2E', padding : 5, marginStart : 5, borderBottomLeftRadius : 7, borderBottomRightRadius : 7  }}>
              <Text style={{ color: '#fdfdff', textAlign : 'center'}}>{totalExpenses} €</Text>
            </View>

          </View>

        </View>

        <View style={{ flex : 1.6, justifyContent : 'center', alignItems : 'center' }}>

          <View style={{ backgroundColor : '#2A2D2E', paddingHorizontal : 28, paddingVertical : 18, borderRadius : 8 }}>
          <Text style={{ fontWeight : 'bold', fontSize : 20, color :  '#fdfdff', textAlign : 'center'}}>SOLDE</Text>
          <Text style={ Math.sign(bankBalance) === 1 ? { fontWeight : 'bold', fontSize : 20, color :  '#7fb069', textAlign : 'center'} : { fontWeight : 'bold', fontSize : 20, color :  '#ca3c25', textAlign : 'center'}}>{bankBalance} €</Text>
          </View>
        </View>


        <View style={styles.containerMenu}>

          <View style={{ flex : 1 }}>
              <TouchableOpacity
              onPress={() => {
                setShowTransactions(allTransaction)
                setActiveShow('allTransactions')
              }}
              style={activeShow === 'allTransactions' ? styles.showActive : styles.showInactive}>
                <Text style={activeShow === 'allTransactions' ? styles.showActiveText  : styles.showInactiveText }>Tous</Text>
              </TouchableOpacity>
          </View>

          <View style={{ flex : 1 }}>
              <TouchableOpacity onPress={() => {
                setShowTransactions(incomes)
                setActiveShow('incomes')
              }}
              style={activeShow === 'incomes' ? styles.showActive : styles.showInactive}>
                <Text style={activeShow === 'incomes' ? styles.showActiveText  : styles.showInactiveText }>Revenus</Text>
              </TouchableOpacity>
          </View>

          <View style={{ flex : 1 }}>
              <TouchableOpacity onPress={() => {
                setShowTransactions(expenses)
                setActiveShow('expenses')
              }}
              style={activeShow === 'expenses' ? styles.showActive : styles.showInactive}>
                <Text style={activeShow === 'expenses' ? styles.showActiveText  : styles.showInactiveText }>Dépenses</Text>
              </TouchableOpacity>
          </View>

        </View>



        <View style={styles.containerFlatlist}>
          <FlatList
            data={showTransactions}
            renderItem={CardAlex}
            keyExtractor={(item, index) => index}
            ListFooterComponentStyle = {{ borderBottomLeftRadius : 8, borderBottomRightRadius : 8}}
          />
        </View>


      </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 14,
    color : '#fdfdff'
  },
  picker : {
    height : 30,
    width : '100%',
    backgroundColor : '#546a7b',
    color : '#fdfdff',
    padding : 0
  },
  containerMenu : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'flex-end',
    marginTop : 20,
    alignItems : 'flex-end'
  },
  containerFlatlist : {
    flex : 4.5,
    backgroundColor: 'white',
    borderBottomLeftRadius : 8,
    borderBottomRightRadius : 8,
    borderRadius : 8,
    borderBottomLeftRadius : 8,
    paddingBottom : 20,
  },
  containerButtons : {
    flex : 1.5,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  showActive : {
    padding : 10,
    marginVertical : 10,
    backgroundColor : '#6e64e7',
    borderTopLeftRadius : 8,
    borderTopRightRadius : 8,
    marginBottom : 0
  },
  showInactive : {
    padding : 10,
    marginVertical : 10,
    backgroundColor : '#393d3f',
    marginBottom : 0,
    borderTopLeftRadius : 8,
    borderTopRightRadius : 8,

  },
  showActiveText : {
    color : '#FDFDFF',
    textAlign : 'center',
    fontWeight : 'bold'
  },
  showInactiveText : {
    color : '#fff',
    textAlign : 'center',
    fontWeight : 'bold'
  },
  buttonLeft : {
    padding : 10,
    marginVertical : 10,
    marginEnd : 5,
    backgroundColor : '#62929e',
    padding : 15,
    borderRadius : 7,
  },
  buttonRight : {
    padding : 10,
    marginVertical : 10,
    marginStart : 5,
    backgroundColor : '#62929e',
    padding : 15,
    borderRadius : 7,
  },
  textButton : {
    color : '#FDFDff',
    textAlign : 'center'
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '105%',
  }

})