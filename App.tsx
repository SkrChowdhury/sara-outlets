import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Tabs from './src/navigators/Tab';

const App = () => {
  useEffect(() => {
    // Hide the splash screen when the component is mounted
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
