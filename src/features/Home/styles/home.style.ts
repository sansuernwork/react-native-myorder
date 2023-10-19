import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  grid: {
    marginTop: 10,
    marginBottom: 26,
  },
  image: {
    width: '100%',
    height: 120,
    objectFit: 'cover',
  },
  itemContainer: {
    margin: 5,
    width: `${100 / 2.1}%`,
    padding: 8,
    backgroundColor: '#ffff',
    borderRadius: 8,
  },
  productName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  productPrice: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  productDesc: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#A6A6A6',
  },
});
