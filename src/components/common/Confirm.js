import React from 'react';
import { Text, Modal, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children,onAccept,onDeny,visible}) =>{
    const { containerStyle , textStyle, cardSectionStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={ () => {}}
        >   
            <View style={containerStyle}>       
             <CardSection style={cardSectionStyle}>
                <Text style={textStyle}> {children} </Text>
            </CardSection>
            <CardSection>
                <Button buttonClickEvent={onAccept}> Yes </Button>
                <Button buttonClickEvent={onDeny}>No</Button>
            </CardSection>
            </View>
         </Modal>
 
    );
};
const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 50
    },
    containerStyle: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1
    }
}

export {Confirm}