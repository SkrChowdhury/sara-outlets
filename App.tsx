import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    // Hide the splash screen when the component is mounted
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
