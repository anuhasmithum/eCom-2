import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import axios from 'axios'
import Icon from "react-native-vector-icons/MaterialIcons";
import {  Body,  Card, CardItem } from "native-base";
import ActionBar from "../components/ActionBar";

const styles = {
  item: {
    flex: 1,
    flexDirection: "row",
    padding: "2%",
    borderTopWidth: 1,
    borderColor: "green",
  },
};

export default class Groups extends React.Component {
  static navigationOptions = {
    drawerLabel: "Groups",
  };

  state={
    groups: []
  }

  componentDidMount(){
    axios.get("/auth/user/me")
    .then(res => {
      axios.get('/'+res.data.id + '/groups').then(res => {
        console.log(res.data)
        this.setState({groups: res.data})
      }).catch(err => console.log(err))
    
    })
    .catch(err => {console.log(err);throw err});
  }

  render() {
    return (
      <View>
        <ActionBar navigation={this.props.navigation} name={"Groups"} />
        <Card style={{margin: 0}}>
          <CardItem style={{backgroundColor: "#82E17B"}}>
            <Body style={{display: "flex",flexDirection: "row",alignItems: "center"}}>
            <Text style={{fontSize: 20}}>Groups</Text>
            <Icon style={{marginLeft: "auto"}} onPress={() => {this.props.navigation.navigate('CreateGroup')}} name="group-add" size={30} color="black" />
            </Body>
          </CardItem>
        </Card>

        {
          this.state.groups.length > 0 ? 
          <FlatList
          data={this.state.groups}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.props.navigation.navigate("Group", {
                  id: item.groupId,
                  name: item.name,
                });
              }}
            >
              <View>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                <Text>Last activity</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
          :
          <View style={{width: "100%",flex: 1,alignItems: "center"}}>
            <Text style={{fontSize: 20}}>No groups</Text>
          </View>
        }
      </View>
    );
  }
}
