// App.js
import React from 'react';
import { Provider } from 'react-redux';
import FlightBookingForm from './FlightBookingForm';
import store from './Store';

const App3 = () => {
  return (
    <Provider store={store}>
      <div>
        <FlightBookingForm />
      </div>
    </Provider>
  );
};

export default App3;