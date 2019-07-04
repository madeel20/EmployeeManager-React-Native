import React, { Component } from 'react';
import { Text , View} from 'react-native';
import { connect } from 'react-redux';
import { EmailChanged, passwordChanged , loginUser} from '../actions';
import { Card, CardSection, Input , Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.EmailChanged(text);
    } 
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({ email,password });
    }
    renderError(){
        if(this.props.error){
            return  (
            <View style={{ backgroundColor: 'white' }}>  
                <Text style={styles.errorTextStyle}> 
                    {this.props.error}
                </Text>
            </View>
             ) ;         
        }
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size={'large'} />
        }
        
        return (   
            <Button buttonClickEvent={this.onButtonPress.bind(this)}>
                 Log In
            </Button>
        );
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    onChangeText={this.onEmailChange.bind(this)}
                        label="email"
                        placeholder="abc@email.com"
                        value={this.props.email}
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Password"
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        />
                </CardSection>
                {this.renderError()}
                <CardSection>
                {this.renderButton()}
                </CardSection>
            
                
            </Card>
        )
    }
    
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}
const mapStateToProps = ({auth }) => {
    const { email,password,error,loading } = auth;
    return { 
        email: email,
        password: password,
        error: error,
        loading: loading 
    }
}
export default connect(mapStateToProps,{EmailChanged, passwordChanged, loginUser})(LoginForm);