import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

const PaymentDetailsForm = () => {
  const onNext = () => {
    // validate form

    // then, go next page
    router.push('/checkout/confirm')
  }

  return (
    <KeyboardAwareScrollView>
      <Text>PaymentDetailsForm</Text>
      <CustomButton title='Next' style={styles.button} onPress={onNext} />
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
    marginBottom: 25
  }
})