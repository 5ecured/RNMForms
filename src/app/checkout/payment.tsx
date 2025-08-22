import { View, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import CustomTextInput from '../../components/CustomTextInput'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PaymentInfo, PaymentInfoSchema, useCheckoutForm } from '../../contexts/CheckoutFormProvider'


const PaymentDetailsForm = () => {
  const { setPaymentInfo, paymentInfo } = useCheckoutForm()

  const form = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
    defaultValues: paymentInfo
  })


  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    setPaymentInfo(data)
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