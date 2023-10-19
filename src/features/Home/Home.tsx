import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import * as root from './styles/home.style';
import {Appbar, Button} from 'react-native-paper';
import {NavtiveProps} from '../../../App';
import homeService from '../../redux/redux-features/home/services/home-service';
import {HomeStateType} from '../../redux/redux-features/home/home-slice';
import config from '../../config/config';

const Home = ({navigation}: NavtiveProps) => {
  const {homeSlice}: {homeSlice: HomeStateType} = useSelector(
    (state: RootState) => state,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    initial();
  }, [homeSlice.isLoading]);

  const initial = () => {
    dispatch<AppDispatch>(homeService.getProduct());
  };

  return (
    <View style={root.default.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={root.default.grid}
        data={homeSlice.products}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate("ProductEdit", {
            data: item,
          })} style={root.default.itemContainer}>
            <View>
              <Image
                style={root.default.image}
                source={{uri: config.SERVER_ASSETS + item.image}}></Image>
              <Text style={root.default.productName}>{item.name}</Text>
              <Text style={root.default.productDesc}>{item.description}</Text>
              <Text style={root.default.productPrice}>{`฿${item.price}`}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;
