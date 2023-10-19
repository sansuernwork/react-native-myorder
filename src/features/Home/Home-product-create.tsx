import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import homeProductCreateStyle from './styles/home-product-create.style';


type formData = {

}

const HomeProductCreate = () => {
  const [formData,setFormData] = React.useState({
    product_name : "",
    description: "",
    category_id: 0,
    cost_price: 0,
    price: 0,
    total: 0,
    inmage: 0,
    amount: "",
  })

  const [text, setText] = React.useState('');
  return (
    <View style={homeProductCreateStyle.container}>
      <TextInput
        label="Product name"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Price"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Email"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
  );
};

export default HomeProductCreate;
