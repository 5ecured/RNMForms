import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSegments } from 'expo-router'

const steps = [
    { key: 'personal', title: 'Personal' },
    { key: 'payment', title: 'Payment' },
    { key: 'confirm', title: 'Confirm' }
]

const CheckoutFormStepIndicator = () => {
    const segments = useSegments() // This returns ['checkout', 'personal']
    const currentScreen = segments[segments.length - 1] // This will be personal or payment or confirm

    const stepIndex = steps.findIndex(step => step.key === currentScreen)

    return (
        <SafeAreaView
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 110,
                padding: 10,
                gap: 20
            }}
            edges={['top']}
        >
            {steps.map((step, i) => (
                <View
                    key={step.key}
                    style={{
                        borderBottomWidth: 3,
                        flex: 1,
                        borderColor: stepIndex >= i ? '#005055' : 'lightgray'
                    }}>
                    <Text style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: stepIndex >= i ? '#005055' : 'gray'
                    }}>
                        {step.title}
                    </Text>
                </View>
            ))}
        </SafeAreaView>
    )
}

export default CheckoutFormStepIndicator