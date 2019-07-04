import { mapping, light as lightTheme ,dark} from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Reducer from './reducers';

import Router from './Router';
class App extends Component {
    componentWillMount(){
        const firebaseConfig = {
            apiKey: 'AIzaSyCkSr_5416yYmKDi4vci0cqxxcUtNN9VvI',
            authDomain: 'manager-b961b.firebaseapp.com',
            databaseURL: 'https://manager-b961b.firebaseio.com',
            projectId: 'manager-b961b',
            storageBucket: 'manager-b961b.appspot.com',
            messagingSenderId: '569867426383',
            appId: '1:569867426383:web:2ba2ad1a1ba9e341'
          };
          firebase.initializeApp(firebaseConfig);

    }
    render(){ 
        const store = createStore(Reducer,{},applyMiddleware(ReduxThunk));
        return (
            <ApplicationProvider 
            mapping={mapping}
            theme={dark}>
            <Layout style={{flex: 1}}>
                <Provider store={store} >
                    <Router />
                </Provider>
            </Layout>
          </ApplicationProvider>
         
        )
    }
}
export default App;