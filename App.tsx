import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import Home from './src/features/Home/Home';
import Stock from './src/features/Stock/Stock';
import {ReduxProvider} from './src/redux/store';
import {PaperProvider} from 'react-native-paper';
type RootStackParamList = {
  Home: undefined;
  Stock: undefined;
};

type NavtiveProps = NativeStackScreenProps<RootStackParamList>;

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: '#BADA55',
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ReduxProvider>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
              component={Home}
            />
            <Stack.Screen name="Stock" component={Stock} />
          </Stack.Navigator>
        </PaperProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
}

export default App;
