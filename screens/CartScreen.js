
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ActionBar from "../components/ActionBar";
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage"


class CartScreen extends Component {
    constructor(props) {
        super(props);
        // const { navigation } = this.props;
        this.state = {
            cartProduct: [],
            refresh: false,
            arrayOfCartIds: [],
            productCart: [],
            count: 1,

        }
        // AsyncStorage.getItem('arrayOfCartIds', (err, result) => {
        //     alert( ' passed async id : '+result);
        //   });
    }


    /////////////////////////////////////////////////////////////////////////    parsing array object 

    componentDidMount() {

        AsyncStorage.getItem('cartProduct', (err, result) => {
            this.setState({ cartProduct: result })
        });
    }

    componentDidUpdate() {

        AsyncStorage.getItem('cartProduct', (err, result) => {
            this.setState({ cartProduct: result })
        });
      //  alert(this.state.cartProduct);

    }


    ///////////////////////////////////////////////////////////////////////////         passing Id Array 

    // componentDidMount() {

    //     AsyncStorage.getItem('arrayOfCartIds', (err, result) => {
            // this.setState({ arrayOfCartIds: result })
    //     });

    //     this.state.arrayOfCartIds.map(_id => {

    //         axios.get(`http://192.168.8.101:3000/api/product/${_id}`)
    //             .then(res => {
    //                 const newProduct = res.data;
    //                 const beforeConcat = this.state.productCart;
    //                 const productCart = beforeConcat.concat(newProduct);
    //                 this.setState({ productCart });
    //             })
    //     })

    //     // alert(' passed async id : ' + this.state.cartProduct);
    // }

    // componentDidUpdate() {

    //     AsyncStorage.getItem('arrayOfCartIds', (err, result) => {
    //         this.setState({ arrayOfCartIds: result })
    //     });
    //     // const _id;
    //     this.state.arrayOfCartIds.map(_id => {

    //         axios.get(`http://192.168.8.101:3000/api/product/${_id}`)
    //             .then(res => {
    //                 const newProduct = res.data;
    //                 const beforeConcat = this.state.productCart;
    //                 const productCart = beforeConcat.concat(newProduct);
    //                 this.setState({ productCart });
    //             })
    //     })

    //     // alert(' passed async id : ' + this.state.cartProduct);

    // }


    ////////////////////////////////////////////////////////////////              delete product from cart

    _filterProduct = (_id) => {
        // this.setState({refresh:true})
        AsyncStorage.getItem('cartProduct', (err, result) => {
            this.setState = ({ cartProduct: result })
        });

        var res = this.state.cartProduct;
        var selected = [{ _id: _id }]
        var result = res.filter(item => !selected.some(itemToRemove => _id === itemToRemove._id));
        this.setState = ({ cartProduct: result, refresh: false })
    //    alert(this.state.cartProduct);
        // alert(result);
    }

    /////////////////////////////////////////////////////////////////////////////////



    // onRefreshingHandler = () => {
    //     this._filterProduct();
    // }


    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#eee' }}>
                <ActionBar navigation={this.props.navigation} name="Cart" />

                <FlatList
                    ref={"flatList"}
                    data={this.state.cartProduct}
                    //extraData={this.state}

                    // ItemSeparatorComponent={this.renderSeparator}
                    // ListFooterComponent={this.renderFooter.bind(this)}
                    // onEndReachedThreshold={0.4}
                    // onEndReached={this.handleLoadMore.bind(this)}
                    renderItem={({ item, index }) => {

                        return (

                            <ScrollView style={{ flex: 1, alignContent: 'center', marginHorizontal: 15 }}>

                                <View style={{
                                    flex: 1, flexDirection: 'row', alignItems: 'center', height: 120, borderBottomColor: '#eee',
                                    borderWidth: 2, borderColor: '#bbb', backgroundColor: 'white', justifyContent: 'space-around',
                                }}>
                                    <View style={{}}>
                                        <Image
                                            //  source={{ uri: `http://192.168.8.101:3000/static/${item.dateTime}.${item.oriName.split('.')[item.oriName.split('.').length - 1]}` }}
                                            style={{ height: '100%', width: 120, marginTop: 25 }}
                                        >
                                        </Image>
                                    </View>

                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90%', marginLeft: 20 }}>

                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', margin: 6 }}>{item.productName}</Text>
                                        <Text style={{ fontSize: 12, margin: 4, color: 'black', }}>{item.price} $</Text>


                                    </View>

                                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '90%', marginTop: 20 }}>

                                        <TouchableOpacity onPress={() => { this.state.count++; alert('Num of Items : ' + this.state.count) }}>
                                            <Icon style={styles.icon} name='angle-up' size={40}></Icon>
                                        </TouchableOpacity>

                                        <Text style={{ paddingVertical: 5, color: 'black', textAlign: 'center' }}>{this.state.count}</Text>

                                        <TouchableOpacity onPress={() => { this.state.count--; alert(this.state.count) }}>
                                            <Icon style={styles.icon} name='angle-down' size={40}></Icon>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                                <View style={{
                                    flex: 1, flexDirection: 'row', alignItems: 'center', height: 40, borderTopColor: '#ddd',
                                    borderWidth: 2, borderColor: '#bbb', backgroundColor: 'white', justifyContent: 'space-around',
                                }}>

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('DisplayOneItem', { _id: item._id })}
                                        style={{ justifyContent: 'center', }}
                                    >
                                        <Text style={{ backgroundColor: '#22a', paddingVertical: 5, width: 100, color: 'white', textAlign: 'center' }}>View</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                       // onPress={() => { this._filterProduct(item._id) }}
                                        style={{ justifyContent: 'center', }}
                                    >
                                        <Text style={{ backgroundColor: '#a21', paddingVertical: 5, width: 100, color: 'white', textAlign: 'center' }}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        );
                    }}
                    keyExtractor={(item, index) => item.dateTime}
                // refreshControl={
                //     <RefreshControl
                //         refreshing={false}
                //     // onRefresh={this.onRefreshingHandler.bind(this)}
                //     />
                // }
                >
                </FlatList>
            </View >
        );
    }

}

export default CartScreen;

const styles = StyleSheet.create({

    cartText: {
        color: 'black',
        padding: 10,
        fontSize: 20,
    },
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    },
    icon: {
        width: 50, height: 50, backgroundColor: 'white',
        alignSelf: 'stretch', textAlign: 'center', justifyContent: 'center'
    }

});





////////////////////////////////////////////////////////////////////////////////////            old cart

// import React, { Component } from 'react';
// import { View ,TouchableHighlight, Text} from 'react-native'
// import ActionBar from '../components/ActionBar'
// import AsyncStorage from "@react-native-community/async-storage"

// class SettingsScreen extends Component {
//     render() {
//         const { navigation } = this.props;
//     const itemId = navigation.getParam('no', 'NO-ID');
//         return (
            
//             <View>
//                 <ActionBar navigation={this.props.navigation} name="Settings" />
//                 <Text>{JSON.stringify(itemId)}</Text>
//             </View>
//         );
//     }
// }

// export default SettingsScreen;