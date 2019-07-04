import React,{Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { CardSection, Card , Button, Confirm } from './common';


class EmployeeEdit extends Component {
    state = { visible: false }
    componentWillMount(){
       _.each(this.props.employee,(value,prop)=>{
           this.props.employeeUpdate({prop,value});
       });
    }
    onSaveChangesPress(){
        const { name,shift ,phone} = this.props;
       this.props.employeeSave({name,shift,phone, uid: this.props.employee.uid });
    }
    onTextPress(){
        const {phone,shift} = this.props;
        Communications.textWithoutEncoding(phone,`your next shift is schedule on: ${shift}`);
    }
    onDeny(){
        this.setState({ visible: false });
    }
    onAccept(){
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }
    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button buttonClickEvent={this.onSaveChangesPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button buttonClickEvent={this.onTextPress.bind(this)} >
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection >
                    <Button buttonClickEvent={()=> this.setState({ visible: !this.state.visible }) }> Fire Employee</Button>
                </CardSection>

                <Confirm visible={this.state.visible} onAccept={this.onAccept.bind(this)} onDeny={this.onDeny.bind(this)} >
                    Are you sure you want do this? 
                </Confirm>
            </Card>
        );
    }
}
const mapsStateToProps = (state) => {
    const { name, shift, phone } = state.employee;
    return { name, shift, phone}
}

export default connect(mapsStateToProps,{ employeeUpdate,employeeSave , employeeDelete})(EmployeeEdit);