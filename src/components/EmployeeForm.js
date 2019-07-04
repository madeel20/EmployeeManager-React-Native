import React,{ Component } from 'React';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render(){
        return(
            <View>
                <CardSection>
                    <Input label="Name" placeholder="Adeel"  value={this.props.name}
                    onChangeText={ (text) =>  this.props.employeeUpdate({ prop: 'name', value: text })} />
                </CardSection>
                    <CardSection>
                    <Input label="Phone" placeholder="555-555-5555" value={this.props.phone}
                    onChangeText={(text) =>  this.props.employeeUpdate({ prop: 'phone', value: text })} />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }} >
                        <Text style={styles.pickerLabel}>Shift</Text>
                        <Picker
                        
                        selectedValue={this.props.shift} 
                        onValueChange={(text)=> this.props.employeeUpdate({prop: 'shift', value: text })}
                        >
                            <Picker.Item label="Monday" value="Monday"/>
                            <Picker.Item label="Tuesday" value="Tuesday"/>
                            <Picker.Item label="Wednesday" value="Wednesday"/>
                            <Picker.Item label="Thursday" value="Thursday"/>
                            <Picker.Item label="Friday" value="Friday"/>
                            <Picker.Item label="Saturday" value="Saturday"/>
                            <Picker.Item label="Sunday" value="Sunday"/>
                        </Picker>
                </CardSection>
                </View>
        );
    }
}
const styles = {
    pickerLabel: {
        fontSize: 28,
        alignSelf: 'center'
    }
}
const mapsStateToProps = (state) => {
    const { name,shift,phone} = state.employee;
    return {name,shift,phone}
    
}
export default connect(mapsStateToProps, {employeeUpdate})(EmployeeForm);