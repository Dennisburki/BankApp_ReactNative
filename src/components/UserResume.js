import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import GlobalContext from '../helpers/GlobalContext'
import { useContext, useEffect, useState } from 'react'
import data from '../../assets/data.json'
import CardAlex from './CardAlex'

const UserResume = () => {

    const contextValue = useContext(GlobalContext)
    const [user, setUser] = useState('')
    const [amount, setAmmount] = useState(0)

    const revenus = data[contextValue.index].incomes.map((element,key) =>{
        return <Text key={key} style={{color:'#7fb069', fontSize:22}}>{element.amount.replace('€', '').replace(',', '') + '€'}</Text>
    } 
)

    const depenses = data[contextValue.index].expenses.map((element,key) =>{
        return <Text key={key} style={{color:'#ca3c25', fontSize:22}}>{element.amount.replace('€', '').replace(',', '') + '€'}</Text>
    }
)

const { incomes, expenses } = data[contextValue.index]


const totalDepenses = expenses.reduce((acc, curr) => {
    return acc + parseFloat(curr.amount.replace('€', '').replace(',', ''))
}
, 0)
const totalRevenus = incomes.reduce((acc, curr) => {
    return acc + parseFloat(curr.amount.replace('€', '').replace(',', ''))
}
, 0)
const total = (totalRevenus -totalDepenses).toFixed(2)


    useEffect(() => {
        setUser(contextValue.user)
        setAmmount(total)
    }
    , [contextValue.user])
    


const tableau = incomes.map(element=> {
    return {
        ...element,
        date : new Date(element.date).getTime(),
        amount: element.amount.replace('€', '').replace(',', '') + '€' }
    
}).sort((a,b) =>  b.date - a.date)


    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', }}>
            
            <Card style={{ width: 280, height: 280, alignItems: 'center', justifyContent: 'center' , marginBottom:10, borderRadius:8}}>
                <Text style={styles.text}>{user}</Text>

                

                <View style={{flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'center', paddingStart:24, }}>  
                    
                    <View style={{flex:1}}>
                        <Text style={{fontWeight:'bold', marginBottom:10, paddingStart:19}}>Revenus</Text>
                        {revenus}

                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontWeight:'bold', marginBottom:10,paddingStart:19}}>Dépenses</Text>
                        {depenses}
                    </View>
                </View>
                <View style={{alignItems:'center'}}>
                <View style={{alignItems:'center', marginTop:30, backgroundColor:'#fff', borderWidth:1, borderColor:'black', borderRadius:15, width:'80%', height:45, justifyContent:'center' }}>
                    <Text style={Math.sign(total) === 1 ? {color : '#7fb069', fontWeight:'bold', fontSize:24} : {color : '#ca3c25',fontWeight:'bold', fontSize:24}}>Total: {total}€</Text>
                </View>
                </View>
            </Card>
            
        </View>
        
    )
}

export default UserResume

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 10,
        padding: 10,
        marginTop: 10,
 }
}   )