import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, } from 'react-navigation';
import Products from '../pages/Products';
import Checkout from '../../app/pages/Checkout';
import Receipt from '../pages/Receipt';
import themes from '../styles/theme.style';

import Signup from '../../screens/SignupScreen';
import Groups from '../../screens/GroupsScreen';
import LoginScreen from '../../screens/LoginScreen'
import Tasks from '../../screens/TasksScreen'
import Group from '../../screens/GroupScreen';
import CartScreen from '../../screens/CartScreen';
import Profile from '../../screens/ProfileScreen';
import CreateGroup from '../../screens/CreateGroupScreen'
import CheckAuth from '../../Utils/CheckAuth'
import EditProPic from '../../screens/EditProPicScreen'
import DisplayOneItem from '../../screens/DisplayOneItem'
import CustomDrawer from '../../Utils/CustomDrawer';


const DrawNavigator = createDrawerNavigator({
  Dashboard: { screen: Products },
  Profile: { screen: Profile },
  Tasks: { screen: Tasks },

  Group: {
    screen: Group,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  CartScreen: {
    screen: CartScreen,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  DisplayOneItem: {
    screen: DisplayOneItem,
    navigationOptions: {
      drawerLabel: () => null
    }
  },


  EditProPic: {
    screen: EditProPic,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  Groups: { screen: Groups },
  CreateGroup: { screen: CreateGroup },

}, {
  initialRouteName: 'Dashboard',
  contentComponent: CustomDrawer,
  drawerOpenRoute: 'drawerOpen',
  drawerCloseRoute: 'drawerClose',
  drawerToggleRoute: 'drawerToggle'
});



const oneStackNavigation = createStackNavigator({
  CheckAuth: { screen: CheckAuth },
  LoginScreen: { screen: LoginScreen },
  Signup: { screen: Signup }
}, {
  initialRouteName: 'CheckAuth',
})





const cartNavigator = createStackNavigator(
  {
    Products: { screen: Products },
    Checkout: { screen: Checkout },
    Receipt: { screen: Receipt }
  },
  {
    initialRouteName: 'Products',
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
      },
      headerTintColor: '#fff'
    }
  }
);




const MainNavigation = createSwitchNavigator({
  HomeDrawer: DrawNavigator,
  AuthStack: oneStackNavigation,
  cartNav: cartNavigator, // You will use this.props.navigation.replace('HomeDrawer') after login process.
},

  {
    initialRouteName: 'AuthStack',
  })

// export default MainNavigation


const Route = createAppContainer(MainNavigation);
export default Route;





