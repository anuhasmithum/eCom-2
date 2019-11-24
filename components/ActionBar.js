import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Cart from '../app/components/Cart.component';
import { View } from 'native-base';
class ActionBar extends Component {
    openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    onActionSelected = position =>  {
      if (position === 0) { // index of 'Settings'
        this.props.navigation.navigate('CartScreen')
      } 
  }

    // 
    render() {
        return (
          <View>
            <Icon.ToolbarAndroid
            style={{
              backgroundColor: '#26BE1C',
              height: 56,
              alignSelf: 'stretch',
              textAlign: 'center',
            }}
          logo={{uri: 'https://picsum.photos/200/300'}}
          navIconName="navicon"
          onIconClicked={this.openDrawer}
          title={this.props.name}
          actions={[{title: 'Shoping Cart', iconName: "shopping-cart", show: 'always'},{title: 'Search', iconName: "search", show: 'always'}]}
          onActionSelected={this.onActionSelected} 
          />
          </View>
        );
    }
}

export default ActionBar;