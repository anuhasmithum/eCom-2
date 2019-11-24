import React, { Component } from 'react';
import { View, StyleSheet, FlatList, } from 'react-native';
import { connect } from 'react-redux';
import Product from '../components/Product.component';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../../android/redux/actions/productAction';
import Logo from '../components/Logo.component';
import Cart from '../components/Cart.component';
import axios from 'axios';

import ActionBar from "../../components/ActionBar";



class Products extends Component {

  static navigationOptions = ({ navigation }) => {
    return {

      headerTitle: 'Products',
      headerRight: <Cart navigation={navigation}/>
    }
  }
  constructor(props) {
    super(props);
  }

  addToCart = () => {
    this.props.addItemsToCart(this.props.item)
  }

  componentDidMount = () => {

    this.props.fetchProducts();
  }
  addItemsToCart = (product) => {
    this.props.addToCart(product);
  }
  render() {
    const { products, navigation } = this.props
    return (
      <View style={styles.container}>
     <ActionBar navigation={this.props.navigation} name="Home" />
      <Cart navigation={navigation} />
        <View style={styles.body}>
          <FlatList
            data={products}
            renderItem={({ item }) =>
              <Product item={item} addItemsToCart={this.addItemsToCart} product={item} />
            }
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#34495e90' }} />} />
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    justifyContent: 'center'
  }
});
const mapStateToProps = (state) => ({
  products: state.products.items
})
export default connect(mapStateToProps, { addToCart, fetchProducts })(Products);












