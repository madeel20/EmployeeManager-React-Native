import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="auth" initial >
                 <Scene key="loginForm" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key="main"  >
                 <Scene 
                 leftTitle="Log Out"
                 onLeft={()=>{ Actions.reset("auth") }}
                 rightTitle="Add"
                 onRight={()=>{ Actions.employeeCreate() }}
                 key="employeeList"
                 component={EmployeeList}
                 title="Employees" 
                 
                 titleStyle={{  textAlign:'center', flex: 1}}
                 initial
                 
                  />
                  <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create"   />
                  <Scene key="employeeEdit" component={EmployeeEdit} title="Employee Edit" />
                </Scene>
            </Stack>
        </Router>
    );
}

export default RouterComponent;
