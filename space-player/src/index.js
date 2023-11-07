import React from 'react';
import ReactDOM from 'react-dom';
import SpaceBackground from './components/SpaceBackground';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


const initialState = {
  accessToken: null,
  currentTrackId: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCESS_TOKEN':
      return { ...state, accessToken: action.payload };
    case 'SET_CURRENT_TRACK_ID':
      return { ...state, currentTrackId: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    app: appReducer
  }
});

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <SpaceBackground/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
