import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ buttonClickEvent, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={buttonClickEvent} style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};
const styles = {
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center'
       
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { Button }; 
