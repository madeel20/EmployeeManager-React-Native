import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED,
     PASSWORD_CHANGED,
      LOGIN_USER_SUCCESS,
       LOGIN_USER_FAILED,
       LOGIN_USER 
    } from './types';

export const EmailChanged = (text) =>{
    return {
    type: EMAIL_CHANGED,
    payload: text
    }
}
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, password }) => {

    return(dispatch) => {
        dispatch({ type: LOGIN_USER });
      
        firebase.auth().signInWithEmailAndPassword(email,password).then(
             user=> {
                logInUserSuccess(dispatch,user)
             }
             ).catch( (error)=>{
                 console.log(error);
                 firebase.auth().createUserWithEmailAndPassword(email,password).then(
                     user=> {
                        logInUserSuccess(dispatch,user)
                     }
                 ).catch( (error) =>{
                    console.log(error);
                    logInUserFail(dispatch);
                 })
             });
        }
}
const logInUserSuccess= (dispatch, user )=> {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user});
    Actions.reset("main");
  
}
const logInUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAILED});
}