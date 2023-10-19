import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Appbar, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import Home from './src/features/Home/Home';
import {ReduxProvider} from './src/redux/store';
import {PaperProvider} from 'react-native-paper';
import ProductCreate from './src/features/Home/Home-product-create';
type RootStackParamList = {
  Home: undefined;
  ProductCreate: undefined;
};

export type NavtiveProps = NativeStackScreenProps<RootStackParamList>;

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
              options={({navigation}: NavtiveProps) => ({
                headerRight: () => (
                  <Appbar.Action
                    icon="plus"
                    onPress={() => navigation.navigate('ProductCreate')}
                  />
                ),
              })}
              component={Home}
            />
            <Stack.Screen name="ProductCreate" component={ProductCreate} />
          </Stack.Navigator>
        </PaperProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
}

export default App;
