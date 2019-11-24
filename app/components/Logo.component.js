import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity
} from 'react-native';
const logoImage = require('../assets/images/eco-logo.png');
class Logo extends Component {

  render() {
    return (
      
          <Image source={logoImage} style={{width:32, height:32}}/>

    );
  }
}
export default Logo;
