import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import CustomTextInput from '../../components/CustomTextInput'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// 1. For Zod validation, first define the schema and pass it to the useForm below
const PaymentInfoSchema = z.object({
  cardNumber: z.string().length(16),
  expireDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Please use the MM/YY format'),
  cvv: z.coerce.number().min(100).max(999)
})

// 2. Create the type to be passed to useForm and to onNext
type PaymentInfo = z.infer<typeof PaymentInfoSchema>

const PaymentDetailsForm = () => {
  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema)
  })

  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    // validate form

    // then, go next page
    router.push('/checkout/confirm')
  }

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name='cardNumber'
          label='Card number'
          placeholder='1234 1234 1234 1234'
        />
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <CustomTextInput
            name='expireDate'
            label='Expiry date'
            placeholder='05/25'
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name='cvv'
            label='CVV'
            placeholder='123'
            containerStyle={{ flex: 1 }}
            inputMode='numeric'
          />
        </View>
        <CustomButton title='Next' style={styles.button} onPress={form.handleSubmit(onNext)} />
      </FormProvider>
    </KeyboardAwareScrollView>
  )
}

export default PaymentDetailsForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  button: {
    marginTop: 'auto',
  }
})