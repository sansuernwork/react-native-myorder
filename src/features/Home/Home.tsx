import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import * as root from './styles/home.style';
import {Appbar, Button} from 'react-native-paper';
import {NavtiveProps} from '../../../App';

const data = [
  // สร้างข้อมูลสินค้า
  {id: '1', name: 'Product 1', price: '10.00'},
  {id: '2', name: 'Product 2', price: '20.00'},
  {id: '3', name: 'Product 3', price: '30.00'},
  {id: '4', name: 'Product 3', price: '30.00'},
  {id: '5', name: 'Product 3', price: '30.00'},
  {id: '6', name: 'Product 3', price: '30.00'},
  {id: '7', name: 'Product 3', price: '30.00'},
  {id: '8', name: 'Product 3', price: '30.00'},
  {id: '9', name: 'Product 3', price: '30.00'},
  {id: '10', name: 'Product 3', price: '30.00'},
  // เพิ่มสินค้าเพิ่มเติมตามความต้องการ
];

const Home = ({navigation}: NavtiveProps) => {
  return (
    <View style={root.default.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={root.default.grid}
        data={data}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable onPress={() => {}} style={root.default.itemContainer}>
            <View>
              <Image
                style={root.default.image}
                source={require('../../assets/image1.jpg')}></Image>
              <Text style={root.default.productName}>{item.name}</Text>
              <Text style={root.default.productPrice}>{`฿${item.price}`}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;
