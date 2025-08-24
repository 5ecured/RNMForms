import { View, Text } from 'react-native'
import React, { ComponentProps } from 'react'
import Checkbox from 'expo-checkbox'
import { useController } from 'react-hook-form'

type CustomCheckbox = {
    name: string,
    label?: string
}

const CustomCheckbox = ({ name, label }: CustomCheckbox) => {
    const { field: { value, onChange } } = useController({ name })
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginVertical: 5 }}>
            <Checkbox
                style={{}}
                value={value}
                onValueChange={onChange}
            />
            <Text style={{}}>{label}</Text>
        </View>
    )
}

export default CustomCheckbox