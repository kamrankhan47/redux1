import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screen/Home'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { Reducer } from './redux/Reducer';
import CompletedScreen from './screen/Completed';

const store = createStore(Reducer);
const App = () => {
  return (
    <Provider store={store}>
    
   <HomeScreen/>
   <CompletedScreen/>
    </Provider>
    
  )
}

export default App
