import {  createStackNavigator,createDrawerNavigator,createSwitchNavigator,} from 'react-navigation'
import Home from '../screens/HomeScreen';
import Signup from '../screens/SignupScreen';
import Groups from '../screens/GroupsScreen';
import LoginScreen from '../screens/LoginScreen'
import Tasks from '../screens/TasksScreen'
import Group from '../screens/GroupScreen';
import CartScreen from '../screens/CartScreen';
import Profile from '../screens/ProfileScreen';
import CreateGroup from '../screens/CreateGroupScreen'
import CheckAuth from '../Utils/CheckAuth'
import EditProPic from '../screens/EditProPicScreen'
import DisplayOneItem from '../screens/DisplayOneItem'
import CustomDrawer from './CustomDrawer'
//import ShoppingCartIcon from '../components/ShoppingCartIcon'


const DrawNavigator = createDrawerNavigator({
  Dashboard: { screen: Home },
  Profile: { screen: Profile},
  Tasks: { screen: Tasks},
 
  Group: {screen: Group,
    navigationOptions: {
      drawerLabel: () => null
    }},
    CartScreen: {screen: CartScreen,
      navigationOptions: {
        drawerLabel: () => null
      }},
    DisplayOneItem: {screen: DisplayOneItem,
        navigationOptions: {
          drawerLabel: () => null
        }},

   
      EditProPic: {screen: EditProPic,
        navigationOptions: {
          drawerLabel: () => null
        }},
  Groups: { screen: Groups},
  CreateGroup: { screen: CreateGroup},
  
  },{
  initialRouteName: 'Dashboard', 
contentComponent: CustomDrawer,
drawerOpenRoute: 'drawerOpen',
drawerCloseRoute: 'drawerClose',
drawerToggleRoute: 'drawerToggle'});



const oneStackNavigation = createStackNavigator({
  CheckAuth: {screen: CheckAuth},
  LoginScreen: {screen: LoginScreen},
  Signup: { screen: Signup}
}, {
  initialRouteName: 'CheckAuth',
})



// const DrawerNav = createDrawerNavigator({
//   DashboardStack: DashboardStack,
//   SecondScreen: Dashboard, // You should use another screen.
//   ThirdScreen: Dashboard,
// })


const MainNavigation = createSwitchNavigator({
  HomeDrawer: DrawNavigator,
  AuthStack: oneStackNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
}, {
  initialRouteName: 'AuthStack',
})

export default MainNavigation


// export default DrawNavigator