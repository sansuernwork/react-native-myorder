import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Appbar, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import Home from './src/features/Home/Home';
import {AppDispatch, ReduxProvider} from './src/redux/store';
import {PaperProvider} from 'react-native-paper';
import ProductCreate from './src/features/Home/Home-product-create';
import HomeProductEdit from './src/features/Home/Home-product-edit';
import {Product} from './src/type/type';
import {useDispatch} from 'react-redux';
import homeService from './src/redux/redux-features/home/services/home-service';

export type RootStackParamList = {
  Home: undefined;
  ProductCreate: undefined;
  ProductEdit: {
    data: Product;
  };
};

export type NavtiveProps = NativeStackScreenProps<RootStackParamList>;

export const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF0151',
    secondary: '#FFEBF2',
  },
};

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Home"
        initialParams={{data: null}}
        options={({navigation, route}: NavtiveProps) => ({
          headerTitle: 'Home Screen',
          headerRight: () => (
            <Appbar.Action
              iconColor="white"
              icon="plus"
              onPress={() => navigation.navigate('ProductCreate')}
            />
          ),
        })}
        component={Home}
      />
      <Stack.Screen
        name="ProductCreate"
        options={({navigation}: NavtiveProps) => ({
          headerTitle: 'Product Create Screen',
        })}
        component={ProductCreate}
      />
      <Stack.Screen
        name="ProductEdit"
        options={({
          navigation,
          route: {params},
        }: NativeStackScreenProps<RootStackParamList>) => ({
          headerTitle: 'Product Edit Screen',
        })}
        component={HomeProductEdit as any}
      />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <ReduxProvider>
        <PaperProvider theme={theme}>
          <StackRoutes></StackRoutes>
        </PaperProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
}

export default App;
