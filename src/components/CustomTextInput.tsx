import { View, Text, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React, { ComponentProps } from 'react'

type CustomTextInput = {
    label?: string,
    containerStyle?: StyleProp<ViewStyle>
} & ComponentProps<typeof TextInput> // 1. This is to extend/inherit all the props of TextInput

// 2. Then take all the props
const CustomTextInput = ({ label, containerStyle, ...textInputProps }: CustomTextInput) => {
    const error = undefined

    return (
        <View style={containerStyle}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                // 3. And put them here
                {...textInputProps}
                style={[
                    styles.input,
                    textInputProps.style,
                    error ? styles.errorInput : {},
                ]}
            />
            <Text style={styles.error} numberOfLines={1}>
                {error?.message}
            </Text>
        </View >
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        padding: 10,
        borderRadius: 5,
        marginTop: 4,
        marginBottom: 2
    },
    errorInput: {
        borderColor: 'crimson'
    },
    label: {
        fontWeight: '600',
        color: 'dimgray'
    },
    error: {
        color: 'crimson',
        height: 17
    }
})