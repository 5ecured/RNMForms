import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

const ConfirmForm = () => {
  const onNext = () => {
    // validate form

    // submit data

    // then, redirect next
    router.dismissAll() // This is to return to the first screen in the stack, which is Personal
    router.back() // Then from Personal, we go back, to Home
  }

  return (
    <KeyboardAwareScrollView>
      <Text>ConfirmForm</Text>
      <CustomButton title='Submit' style={styles.button} onPress={onNext} />
    </KeyboardAwareScrollView>
  )
}

export default ConfirmForm

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