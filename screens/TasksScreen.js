import React,{ Fragment} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TaskTabs from '../Utils/TaskTabNavigator'

export default class TaskScreen extends React.Component{
  openDrawer = () => {
    this.props.navigation.openDrawer()
  }

  render(){
    return(
        <Fragment>
                   <Icon.ToolbarAndroid
        style={{
          backgroundColor: '#2196F3',
          height: 56,
          alignSelf: 'stretch',
          textAlign: 'center',
        }}
      logo={{uri: 'https://picsum.photos/200/300'}}
      navIconName="navicon"
      onIconClicked={this.openDrawer}
      title="OnTask"
      actions={[{title: 'Settings', iconName: "search", show: 'always'}]}
      onActionSelected={this.onActionSelected} 
      />
          <TaskTabs />
        </Fragment>
    )
  }
}