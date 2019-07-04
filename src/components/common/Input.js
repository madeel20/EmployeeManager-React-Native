import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, secureTextEntry, placeholder }) => {
    const { labelStyle, containerStyle, inputStyle } = styles;
    return (
        <View style={containerStyle}>
            
            <Text style={labelStyle}>
                {label}
            </Text>
            
            <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={inputStyle} value={value}
            onChangeText={onChangeText} 
            />
        </View>
    );
};
const styles = {
    inputStyle: {
        
        color: '#000',
        fontSize: 18,
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        flex: 2,
        
        
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
