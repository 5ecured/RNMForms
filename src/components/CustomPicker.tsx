import { View, Text } from 'react-native'
import React, { ComponentProps } from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { useController } from 'react-hook-form';

type CustomPicker = {
    name: string
} & Omit<ComponentProps<typeof RNPickerSelect>, 'onValueChange'>
// The Omit above is for CustomPicker to extend everything from RNPickerSelect, EXCEPT onValueChange

const CustomPicker = ({ name, ...pickerProps }: CustomPicker) => {
    const { field: { value, onBlur, onChange }, fieldState: { error } } = useController({ name })
    return (
        <View style={{ marginVertical: 4 }}>
            <RNPickerSelect
                {...pickerProps}
                value={value}
                onValueChange={onChange}
                onClose={onBlur}
                // Latest version of Expo breaks RNPickerSelect for iOS. Use this fix 
                style={{
                    inputIOSContainer: {
                        pointerEvents: 'none'
                    },
                    viewContainer: {
                        marginTop: 4,
                        marginBottom: 5,
                    },
                    inputIOS: {
                        borderColor: error ? 'crimson' : 'gainsboro',
                        borderWidth: 1,
                        width: '100%',
                        padding: 10,
                        borderRadius: 5,
                    },
                }}
            />
            <Text style={{ color: 'crimson', height: 17 }} numberOfLines={1}>
                {error?.message}
            </Text>
        </View>
    )
}

export default CustomPicker