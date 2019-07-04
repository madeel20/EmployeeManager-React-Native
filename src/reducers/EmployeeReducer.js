import { EMPLOYEE_UPDATE,EMPLOYEE_SAVED,CREATING_EMPLOYEE } from '../actions/types';
const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    loading: false
}
export default ( state = INITIAL_STATE, action ) => {
    console.log(action);
    switch(action.type){
        case EMPLOYEE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
        
        case CREATING_EMPLOYEE:
            return {...state, loading: true}
        case EMPLOYEE_SAVED:
        return INITIAL_STATE;
        default:
            return state;
    }
}