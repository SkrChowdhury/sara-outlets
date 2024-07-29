import React, {useEffect} from 'react';

import {Main} from './src/Main';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    // Hide the splash screen when the component is mounted
    SplashScreen.hide();
  }, []);
  return <Main />;
};

export default App;
