import { View, Text, Switch } from 'react-native'
import React, { ComponentProps } from 'react'
import Checkbox from 'expo-checkbox'
import { useController } from 'react-hook-form'

type CustomSwitch = {
    name: string,
    label?: string
}

const CustomSwitch = ({ name, label }: CustomSwitch) => {
    const { field: { value, onChange } } = useController({ name })
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            marginVertical: 5,
            justifyContent: 'space-between'
        }}>
            <Text style={{}}>{label}</Text>
            <Switch
                style={{}}
                value={value}
                onValueChange={onChange}
            />
        </View>
    )
}

export default CustomSwitch