import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'

const PersonalDetailsForm = () => {
    const [fullname, setFullname] = useState<string>('')

    const onNext = () => {
        // validate form

        // then, go next page
        router.push('/checkout/payment')
    }

    return (
        <View style={styles.container}>
            <CustomTextInput placeholder='Joe do' label='Full name' />
            <CustomTextInput placeholder='Address' label='Address' />

            <View style={{ flexDirection: 'row', gap: 5 }}>
                <CustomTextInput placeholder='Singapore' label='City' containerStyle={{ flex: 1 }} />
                <CustomTextInput placeholder='1234' label='Postcode' containerStyle={{ flex: 1 }} />
            </View>

            <CustomTextInput placeholder='671491384' label='Phone number' inputMode='tel' />
            <CustomButton title='Next' style={styles.button} onPress={onNext} />
        </View>
    )
}

export default PersonalDetailsForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        gap: 5
    },
    button: {
        marginTop: 'auto',
        marginBottom: 25
    }
})