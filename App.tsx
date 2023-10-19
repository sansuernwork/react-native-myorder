// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from './src/features/Home/Home';
import Stock from './src/features/Stock/Stock';
import {ReduxProvider} from './src/redux/store';

type RootStackParamList = {
  Home: undefined;
  Stock: undefined;
};

type NavtiveProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <ReduxProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Stock" component={Stock} />
        </Stack.Navigator>
      </ReduxProvider>
    </NavigationContainer>
  );
}

export default App;
