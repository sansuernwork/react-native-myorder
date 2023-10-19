import {View, Text, Image, Pressable, Alert} from 'react-native';
import React, {FC} from 'react';
import {Appbar, Button, Icon, TextInput} from 'react-native-paper';
import homeProductCreateStyle from './styles/home-product-create.style';
import {Product} from '../../type/type';
import {useDispatch} from 'react-redux';
import homeService from '../../redux/redux-features/home/services/home-service';
import {AppDispatch} from '../../redux/store';
import {NavtiveProps, theme} from '../../../App';
import {launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';

type imageData = {
  uri: string | undefined;
  type: string | undefined;
  name: string | undefined;
};

const HomeProductCreate = ({navigation}: NavtiveProps) => {
  const [resourcePath, setResourcePath] = React.useState<string | undefined>(
    '',
  );

  const [imageData, setImageData] = React.useState<imageData>({
    uri: '',
    type: '',
    name: '',
  });
  const openGallery = async () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        if (response && response.assets) {
          setResourcePath(response.assets[0].uri);
          setImageData({
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          });
        }
      },
    );
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState<Product>({
    id: 0,
    name: '',
    description: '',
    cost_price: 1,
    price: 1,
    stock: 1,
  });

  function IsEmpty(data: {[key: string]: string | number}) {
    for (const key in data) {
      if (data[key] === '') {
        return true;
      }
    }
    return false;
  }

  const handleSubmit = async () => {
    let data = new FormData();
    if (IsEmpty(formData)) {
      Alert.alert('Warning', 'There must be no empty', [
        {text: 'OK', onPress: () => {}},
      ]);
    } else {
      data.append('file', {
        uri: imageData.uri,
        type: imageData.type,
        name: imageData.name,
      });
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('cost_price', formData.cost_price);
      data.append('price', formData.price);
      data.append('stock', formData.stock);
      // const result = await dispatch<AppDispatch>(homeService.addProduct(data));
      // if (result.payload === 200) {
      //   navigation.navigate('Home');
      // }
    }
  };

  const CheckValidString = (value: string, key: string) => {
    const regex = /[@^&$*%#!#]/g;

    if (!value.match(regex)) {
      setFormData({...formData, [key]: value});
    } else {
      console.log('ไม่ถูกต้อง');
    }
  };

  const CheckValidNumber = (value: string, key: string) => {
    if (isNaN(parseInt(value))) return;
    if (parseInt(value) > 0) {
      setFormData({...formData, [key]: parseInt(value)});
    } else {
      setFormData({...formData, [key]: 1});
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={homeProductCreateStyle.container}>
        <TextInput
          label="Product name"
          mode="outlined"
          value={formData.name}
          onChangeText={value => CheckValidString(value, 'name')}
        />
        <TextInput
          label="Description"
          mode="outlined"
          value={formData.description}
          onChangeText={value => CheckValidString(value, 'description')}
        />
        <TextInput
          label="Cost price"
          mode="outlined"
          value={formData.cost_price.toString()}
          onChangeText={value => {
            CheckValidNumber(value, 'cost_price');
          }}
        />
        <TextInput
          label="Price"
          mode="outlined"
          value={formData.price.toString()}
          onChangeText={value => {
            CheckValidNumber(value, 'price');
          }}
        />
        <TextInput
          label="Stock"
          mode="outlined"
          value={formData.stock.toString()}
          onChangeText={value => {
            CheckValidNumber(value, 'stock');
          }}
        />
        {resourcePath ? (
          <Pressable
            style={{
              borderRadius: 10,
              flex: 1,
              borderStyle: 'dashed',
              borderColor: '#D3D3D3',
              borderWidth: 2,
            }}
            onPress={openGallery}>
            <Image
              style={{objectFit: 'contain', flex: 1}}
              source={{uri: resourcePath}}></Image>
          </Pressable>
        ) : (
          <Pressable
            style={{
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              backgroundColor: theme.colors.secondary,
              borderStyle: 'dashed',
              borderColor: '#D3D3D3',
              borderWidth: 2,
            }}
            onPress={openGallery}>
            <Appbar.Action icon={'plus'} size={24}></Appbar.Action>
          </Pressable>
        )}

        <Button
          style={{
            paddingVertical: 4,
            marginTop: 30,
          }}
          mode="contained"
          onPress={() => handleSubmit()}>
          Add Product
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeProductCreate;
