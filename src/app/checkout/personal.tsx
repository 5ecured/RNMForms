import { View, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonalInfo, PersonalInfoSchema, useCheckoutForm } from '../../contexts/CheckoutFormProvider'


const PersonalDetailsForm = () => {
    const { setPersonalInfo, personalInfo } = useCheckoutForm()

    const form = useForm<PersonalInfo>({
        resolver: zodResolver(PersonalInfoSchema),
        defaultValues: personalInfo
    })


    const onNext: SubmitHandler<PersonalInfo> = (data) => {
        setPersonalInfo(data)
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
                        name='postcode'
                    />
                </View>

                <CustomTextInput
                    placeholder='671491384'
                    label='Phone number'
                    inputMode='tel'
                    name='phone'
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