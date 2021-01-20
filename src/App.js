import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from "./js/store";
import Routes from "./js/app/Routes";
import AlertContainer from "./js/app/common/alert/Alert";

function App() {
  return (
    <Provider store={store}>
      <Routes/>
      <AlertContainer/>
    </Provider>
  );
}

export default App;
