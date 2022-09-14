import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text, StyleSheet } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { LineChart } from 'react-native-chart-kit'
import 'babel-polyfill'


const Stats = ({data}) => {

    console.log(data)

    const dataSortPrice = data.map(elt => parseFloat(elt.amount.replace('€', '').replace(',', '')))

    const dataSortDate = data.map(elt => new Date(elt.date).toLocaleDateString())

    console.log(dataSortPrice)
    console.log(dataSortDate)

    const width = Dimensions.get('window').width
    const height = 220
    const barData = {
        labels: dataSortDate,
        datasets: [
            {
                data: dataSortPrice,
            },
        ],
    };

        return (
            <ScrollView>
                <Text style={styles.text}>
                    Statisques de votre compte
                </Text>
                <LineChart
                    data={barData}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    yAxisLabel={'€'}
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#a88fac',
                        backgroundGradientTo: '#c0b9dd',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </ScrollView>
        )
    }        


export default Stats

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: '15%',
        
    }
})
