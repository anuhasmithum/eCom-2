import React, { Component } from 'react';
import { View,Text, ActivityIndicator,ImageBackground } from 'react-native' 
import AsyncStorage from "@react-native-community/async-storage"
import { Spinner } from 'native-base';

class CheckAuth extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
      

      static navigationOptions = () => {
        return {
          
          header: null ,
     
        }
      }


     _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        if(userToken){
           
        this.props.navigation.navigate('Dashboard');
        }
        else{
            await AsyncStorage.removeItem('token')
            this.props.navigation.navigate('LoginScreen');
        }
      };
    
    render() {
        return (
          <ImageBackground    source={{uri: 'http://192.168.8.100:3000/static/auth.png'}}   style={{width: '100%', height: '100%'}}>
        
      
            <View style={{display: "flex",marginTop:200,alignItems: "center",justifyContent: "center"}}>
               
            <Text style={{fontSize:40,color:'#eb9e1a',marginTop:-30,fontWeight: 'bold', padding: 30}}>Sample Name</Text>

            <Text style={{marginTop:-30,}}></Text>
            <Spinner size='large' color='#252626' />
              
                 <Text style={{fontSize:16,color:'#252626'}}>Loading</Text>
            </View>

            </ImageBackground>
        );
    }
}

export default CheckAuth;