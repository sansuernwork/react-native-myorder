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
import {Axios} from '../../axios/axios';

const Home = ({navigation}: NavtiveProps) => {
  const [data, setData] = React.useState([]);
  const initial = async () => {
    try {
      const result = await Axios.get('/product');
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={root.default.container}>
      {data && (
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
                <Text
                  style={root.default.productPrice}>{`฿${item.price}`}</Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default Home;
