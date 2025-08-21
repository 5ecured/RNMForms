import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, Controller, FormProvider } from 'react-hook-form'

const PersonalDetailsForm = () => {
    const form = useForm()
    console.log(form.formState.errors)

    const onNext: SubmitHandler<any> = (data) => {
        // validate form
        console.log(data)
        // then, go next page
        router.push('/checkout/payment')
    }

    return (
        <KeyboardAwareScrollView>
            <FormProvider {...form}>
                <CustomTextInput
                    placeholder='Joe do'
                    label='Full name'
                    name='fullName'
                />

                <CustomTextInput name='address' placeholder='Address' label='Address' />

                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <CustomTextInput
                        placeholder='Singapore'
                        label='City'
                        containerStyle={{ flex: 1 }}
                        name='city'
                    />
                    <CustomTextInput
                        placeholder='1234'
                        label='Postcode'
                        containerStyle={{ flex: 1 }}
                        name='postCode'
                    />
                </View>

                <CustomTextInput
                    placeholder='671491384'
                    label='Phone number'
                    inputMode='tel'
                    name='phoneNumber'
                />
                <CustomButton title='Next' style={styles.button} onPress={form.handleSubmit(onNext)} />
            </FormProvider>
        </KeyboardAwareScrollView>
    )
}

export default PersonalDetailsForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexGrow: 1,
        padding: 10,
        gap: 5
    },
    button: {
        marginTop: 'auto',
    }
})