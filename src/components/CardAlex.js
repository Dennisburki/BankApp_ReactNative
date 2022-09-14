import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { List } from 'react-native-paper'
import { getImage } from '../helpers/utils'


const Card = ({item, index}) => {

    const date = new Date(item.date)
    let displayDate = date.toLocaleDateString() + ' ' +  date.getHours() + ':' + date.getMinutes()
    
    return (
        <List.Accordion 
        style={{ backgroundColor : '#FDFDFF'}}
        title={item.category}
        id={index + 1}
        left={() => <Image source={getImage(item.category)} style={{ width : 30, height : 30}} />}
        right={() => <Text style={item.hasOwnProperty('_id_expense') ? { color : '#393d3f', fontWeight : 'bold' } : { color : '#62929e', fontWeight : 'bold' } }>{item.hasOwnProperty('_id_expense') ? '-' : ''}{item.amount.replace('€', '').replace(',', ' ')}</Text>}
        >

        <List.Item 
            title={() => (
            <View style={{ padding: 0, margin : 0}}>
                <Text style={{ color : '#FDFDFF' }}>{displayDate}</Text>
                <Text style={{ color : '#FDFDFF', overflow : 'scroll'}}>{item.comments}</Text>
            </View>)
            } 
            style={{ backgroundColor : '#546a7b', padding : 0, margin : 0}}
        />

        </List.Accordion>
    )
}

export default Card


const styles = StyleSheet.create({

})