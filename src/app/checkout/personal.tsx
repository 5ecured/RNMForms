import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import CustomButton from '../../components/CustomButton'

const PersonalDetailsForm = () => {
    const onNext = () => {
        // validate form

        // then, go next page
        router.push('/checkout/payment')
    }

    return (
        <View style={styles.container}>
            <Text>PersonalDetailsForm</Text>
            <CustomButton title='Next' style={styles.button} onPress={onNext} />
        </View>
    )
}

export default PersonalDetailsForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    button: {
        marginTop: 'auto',
        marginBottom: 25
    }
})