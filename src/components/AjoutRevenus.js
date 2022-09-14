import { View, StyleSheet, Image, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper'
// import Custombutton from '../components/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Picker } from '@react-native-picker/picker'
//import DateTimePicker from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { IconButton } from 'react-native-paper'
import { DateTimePicker } from '@react-native-community/datetimepicker'

const AjoutRevenu = () => {


    const [categories, setCategories] = useState('')
    const [lastname, setLastname] = useState('')
    const [ammount, setAmmount] = useState('')
    const [operationDate, setOperationDate] = useState(new Date())
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState([])
    const [dateTimeShow, setDateTimeShow] = useState(false)
    const [comment, setComment] = useState("");
    const categoriesArray = ['salaire et assimilé', 'revenu financier', 'rente', 'Pension alimentaire', 'Allocation chômage', 'Prestation sociale', 'Revenu foncier', 'Revenu exceptionnel', 'Autre']

    const checkCategories = (value) => {
        if (!value) {
            setErrors({ ...errors, categories: 'La categorie doit être renseigné' })
            setDisabled(true)
        } else {
            if (!categoriesArray.includes(value)) {
                setErrors({ ...errors, categories: "La categorie n'est pas valide" })
                setDisabled(true)
            } else {
                setErrors({ ...errors, categories: '' })
                setDisabled(false)
            }
        }
        setCategories(value)
    }

    const checkLastname = () => {
        let regexName = new RegExp(
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
        )
        if (!lastname) {
            setErrors({ ...errors, lastname: 'Le nom doit être renseigné' })
            setDisabled(true)
        } else {
            if (!lastname.match(regexName)) {
                setErrors({ ...errors, lastname: 'Le nom est invalide' })
                setDisabled(true)
            } else {
                setErrors({ ...errors, lastname: '' })
                setDisabled(false)
            }
        }
    }

    const checkAmmount = () => {

        let regexNumber = new RegExp(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/)
        if (!ammount.match(regexNumber)) {

            setErrors({ ...errors, ammount: 'Le montant est invalide' })
            setDisabled(true)
        } else {
            setErrors({ ...errors, ammount: '' })
            setDisabled(false)
        }
        if (!ammount) {
            setErrors({ ...errors, ammount: 'Le montant doit être renseigné' })
            setDisabled(true)
        } else {

        }
    }
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <LinearGradient colors={['#023e8a', '#0096c7']} style={styles.background} />
            <SafeAreaView />
            <IconButton onPress={() =>
                navigation.navigate('Home')
            } icon="arrow-left"
                size={30}
                color="#fff"
                style={styles.icon}
            />
            <Text style={styles.label}>Ajout Revenu</Text>
            <View style={styles.groupInput}>
                <ScrollView>
                    <Picker
                        selectedValue={categories}
                        style={{ backgroundColor: '#fff', borderRadius: 15, borderColor: '#fff', borderWidth: 1, }}
                        onValueChange={(itemValue, itemIndex) => {
                            checkCategories(itemValue)
                        }}
                    >
                        <Picker.Item label="Catégories" value="" />
                        <Picker.Item label="Salaire et assimilé" value="salaire et assimilé" />
                        <Picker.Item label="Revenu Financier" value="revenu financier" />
                        <Picker.Item label="Rente" value="rente" />
                        <Picker.Item label="Pension Alimentaire" value="Pension alimentaire" />
                        <Picker.Item label="Allocation Chômage" value="Allocation chômage" />
                        <Picker.Item label="Prestation Sociale" value="Prestation sociale" />
                        <Picker.Item label="Revenu Foncier" value="Revenu foncier" />
                        <Picker.Item label="Revenu Exceptionnel" value="Revenu exceptionnel" />
                        <Picker.Item label="Autre" value="Autre" />
                    </Picker>
                    <Text style={styles.error}>{errors?.categories}</Text>
                    <TextInput
                        style={styles.input}
                        label="Bénéficiaire"
                        value={lastname}
                        onChangeText={(text) => setLastname(text)}
                        onBlur={() => checkLastname()}
                        onFocus={() => checkLastname()}
                    />
                    <Text style={styles.error}>{errors?.lastname}</Text>
                    <TextInput
                        keyboardType='number-pad'
                        style={styles.input}
                        label="Montant"
                        value={ammount}
                        onChangeText={(text) => setAmmount(text)}
                        onBlur={() => checkAmmount()}
                        onFocus={() => checkAmmount()}
                        backgroundColor="#fff"
                        borderRadius={15}
                    />
                    <Text style={styles.error}>{errors?.ammount}</Text>
                    <TextInput
                        style={styles.input}
                        label="Date d'operation"
                        value={dayjs(operationDate).format('DD/MM/YYYY')}
                        onChangeText={() => { }}
                        onBlur={() => { }}
                        onFocus={() => {
                            setDateTimeShow(true)
                        }}
                    />
                    {dateTimeShow && (
                        <DateTimePicker
                            mode="date"
                            value={new Date()}
                            is24Hour={true}
                            onChange={(event, date) => {
                                setDateTimeShow(false)
                                setOperationDate(date)
                            }}
                        />
                    )}
                    <TextInput
                        multiline
                        numberOfLines={10}
                        style={styles.input}
                        onChangeText={(comment) => setComment(comment)}
                        value={comment}
                        placeholder="Commentaires"
                        color="#fff"
                        width={300}
                    />
                </ScrollView>
                <TouchableOpacity
                    onPress={() =>
                        navigation.push('Home')
                    }
                    disabled={disabled}
                    style={{alignContent:'center', alignItems:'center'}}>
                    <LinearGradient colors={['#03045e', '#023e8a',]} style={styles.button2}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Valider</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>


    )
}
export default AjoutRevenu

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '80%',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03045e',
    },
    groupInput: {
        flex: 1,
        width: '80%',
        color: '#fff',
        height: '100%',
    },
    noAccount: {
        alignSelf: 'center',
    },
    input: {

        color: '#fff',
        textDecorationStyle: 'solid',
        textDecorationColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginBottom: 5,
        marginTop: 5,
    },
    create: {
        color: 'blue',
    },
    error: {
        color: '#ade8f4',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 15,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    button2: {
        marginBottom: 10,
        padding: 10,
        width: 200,
        alignItems: 'center',
        borderRadius: 25,
        alignContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    },
    icon: {
        position: 'absolute',
        top: 44,
        left: 0,
        color: '#fff',
    }
})