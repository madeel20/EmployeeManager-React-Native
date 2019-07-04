import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Card , CardSection , Button, Spinner } from './common';
import { employeeUpdate, employeeCreate , employeeClear} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentWillMount(){
        this.props.employeeClear();
    }
    onSaveButtonClick(){
        
        const { name,phone,shift} = this.props;
 
        this.props.employeeCreate({ name,phone, shift});
    }
    renderButton(){
        if(this.props.loading)
        return <Spinner size={'large'} />;

        
        return  <Button buttonClickEvent={this.onSaveButtonClick.bind(this)}> Save </Button>;
    }
    render(){
        console.log(this.props.employee);
        return(
          <Card>
                  <EmployeeForm {...this.props} />
                  <CardSection>
                 {this.renderButton()}
                  </CardSection>
                  <CardSection>
                  
                  </CardSection>
          </Card>

        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift, loading } = state.employee;
    return { name, phone ,shift, loading };
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate,employeeClear})(EmployeeCreate) ;