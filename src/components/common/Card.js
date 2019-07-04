import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
        {props.children}
         </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        elevation: 2,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 10

    }
};

export { Card };
