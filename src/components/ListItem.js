import React , { Component } from 'react';
import { Text,View,TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';


class ListItem extends Component {
    onEmployeePress(){
        Actions.employeeEdit({ employee: this.props.employee });
    }
    render(){
        const { name } = this.props.employee; 
        return(
            <TouchableWithoutFeedback onPress={this.onEmployeePress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.labelStyle}> { name } </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    labelStyle : {
        fontSize: 18,
        paddingLeft: 20
    }
}

export default ListItem;