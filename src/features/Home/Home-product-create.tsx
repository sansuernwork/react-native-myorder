import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Button, TextInput} from 'react-native-paper';
import homeProductCreateStyle from './styles/home-product-create.style';

type ProductformData = {
  name: string;
  description: string;
  category_id: number;
  cost_price: number;
  price: number;
  image: string;
  stock: number;
};

const HomeProductCreate: FC = () => {
  const [formData, setFormData] = React.useState<ProductformData>({
    name: '',
    description: '',
    category_id: 0,
    cost_price: 1,
    price: 1,
    image: '',
    stock: 1,
  });

  const handleSubmit = () => {
    console.log(formData)
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
    <View style={homeProductCreateStyle.container}>
      <TextInput
        label="Product name"
        mode="outlined"
        value={formData.name}
        onChangeText={value => CheckValidString(value,"name")}
      />
      <TextInput
        label="Description"
        mode="outlined"
        value={formData.description}
        onChangeText={value => CheckValidString(value,"description")}
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
  );
};

export default HomeProductCreate;
