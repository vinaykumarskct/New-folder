import React from 'react';
import MyContext from './MyContext';
import Aboutus from './Aboutus';

const App1 = () => {
  const contextValue = {
    // Define your context data here
    appName: 'TRENDTELLE',
  };

  return (
    <MyContext.Provider value={contextValue}>
     
      <Aboutus/>
    </MyContext.Provider>
  );
};

export default App1;