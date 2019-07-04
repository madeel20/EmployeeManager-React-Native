import { EMPLOYEE_UPDATE,EMPLOYEE_SAVED,CREATING_EMPLOYEE,EMPLOYEES_FETCH_SUCCESS } from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeFetch = () =>{
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS , payload: snapshot.val() })
        });
    }
}

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}
export const employeeCreate = ({name,phone,shift}) =>{
  
   const { currentUser } = firebase.auth();
   return(dispatch) => {
    dispatch({ type: CREATING_EMPLOYEE });
    firebase.database().ref(`users/${currentUser.uid}/employees/`).push({
        name,phone,shift
    }).then(()=>{
        dispatch({ type: EMPLOYEE_SAVED });
        Actions.pop();
    });
   }
}

export const employeeSave = ({name,phone,shift,uid}) => {
    const { currentUser } = firebase.auth();
    return(dispatch) =>{
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .set({ name,phone,shift})
        .then(()=> {
            dispatch({type: EMPLOYEE_SAVED });
                Actions.pop();
         });
    }
}

export const employeeClear = ()=>{
    return {
        type: EMPLOYEE_SAVED
    }
}

export const employeeDelete = ({ uid }) =>{
    const { currentUser } = firebase.auth();
    return()=>{
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .remove().then( Actions.pop());
    }
}

