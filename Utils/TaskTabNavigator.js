import React from 'react';
import { Text, View,Button } from 'react-native';
import { createAppContainer,createMaterialTopTabNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';

class DueScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Due</Text>
      </View>
    );
  }
}

class CompletedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Completed</Text>
      </View>
    );
  }
}

class OverDueScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Overdue</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Due: { screen: DueScreen },
    Completed: { screen: CompletedScreen },
    Overdue: { screen: OverDueScreen }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);

export default createAppContainer(TabNavigator)