import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useCheckoutForm } from '../../contexts/CheckoutFormProvider'



const ConfirmForm = () => {
  const { personalInfo, paymentInfo } = useCheckoutForm()

  const onNext = () => {
    router.dismissAll() // This is to return to the first screen in the stack, which is Personal
    router.back() // Then from Personal, we go back, to Home
  }

  return (
    <KeyboardAwareScrollView>
      <View style={{ gap: 15 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={'/checkout'}
                style={{ color: '#005055', fontWeight: '600' }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}

        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={'/checkout/payment'}
                style={{ color: '#005055', fontWeight: '600' }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}

        <CustomButton title='Submit' style={styles.button} onPress={onNext} />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default ConfirmForm


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
});
