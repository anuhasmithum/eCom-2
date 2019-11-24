

import React, { Component } from "react";
import { View, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import ActionBar from "../components/ActionBar";
import { Text, ListItem, Left, Body, Right,} from "native-base";

class ProfileScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Preferences", header: false },
        { name: "Account", header: false },
        { name: "Help Center", header: false },
      ],
      userData: [],
      stickyHeaderIndices: [],
      fname: "",
      lname: "",
    };
  }

  componentDidMount() {
    axios
      .get("/auth/user/me")
      .then(res => {
        axios
          .get("/users/" + res.data.id)
          .then(res => {
            console.log("Users : ");
            console.log(res.data);
            this.setState({
              fname: res.data.fname,
              lname: res.data.lname ? res.data.lname : "",
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Left />
          <Body style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          </Body>
          <Right />
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <Text>{item.name}</Text>
          </Body>
        </ListItem>
      );
    }
  };

  render() {
    return (
      <ScrollView>
      <View style={{
        backgroundColor: "#ddd",
        alignItems: "center",
        flex: 1
      }}>
        <ActionBar navigation={this.props.navigation} name="Profile" />
        <View
          style={{
            width: "100%",
            borderRightWidth: 10,
            borderBottomWidth: 0,
            borderLeftWidth: 10,
            borderColor: '#ddd',
            backgroundColor: "#bbb",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProPic')}>
            <Image
              style={{
                borderWidth: 5,
                borderColor: "white",
                borderRadius: 100,
                margin: 10,
                marginLeft: 10,
                width: 220,
                height: 220,
              }}
              source={{ uri: "https://www.gstatic.com/webp/gallery3/1.sm.png" }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
            {this.state.fname + " " + this.state.lname} User Name
          </Text>
        </View>
        <View style={styles.detailsView}>
          <TouchableOpacity style={styles.infomation}>
            <Text style={styles.text}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infomation}>
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infomation}>
            <Text style={styles.text}>Description</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infomation}>
            <Text style={styles.text}>Address Sweet home </Text>
          </TouchableOpacity>

        </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  detailsView: {
    paddingVertical: 20,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infomation: {
    width: '100%',
    paddingVertical: 20,
    fontSize: 16,
    backgroundColor: "#ccc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRightWidth: 10,
    borderBottomWidth: 5,
    borderLeftWidth: 10,
    borderColor: "#ddd",
    
  },
  text:{marginVertical:10,}
});




















// import React, { Component, Fragment } from "react";
// import { View } from "react-native";
// import ActionBar from "../components/ActionBar";
// import axios from "axios";
// import { Card, CardItem, Body, Text } from "native-base";
// import Icon from "react-native-vector-icons/dist/FontAwesome";

// class GroupScreen extends Component {
//   state = {
//     description: "",
//   };

//   componentDidMount() {
//     const id = this.props.navigation.getParam("id", " ");
//     console.log(id);
//     axios
//       .get("/groups/" + id)
//       .then(res => {
//         console.log(res.data);
//         this.setState({ description: res.data.description });
//       })
//       .catch(err => console.log(err));
//   }

//   render() {
//     const name = this.props.navigation.getParam("name", " ");

//     return (
//       <Fragment>
//         <ActionBar navigation={this.props.navigation} name={name} />
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             margin: 5,
//             marginTop: 10,
//           }}
//         >
//           <Card style={{ width: "50%", height: 150 }}>
//             <CardItem>
//               <Body>
//                 <Text>Percentage</Text>
//               </Body>
//             </CardItem>
//           </Card>

//           <Card style={{ width: "50%", height: 150 }}>
//             <CardItem>
//               <Body>
//                 <Text>Tasks</Text>
//               </Body>
//             </CardItem>
//           </Card>
//         </View>
//         <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
//           <Card style={{ width: "50%", height: 150 }}>
//             <CardItem>
//               <Body>
//                 <Text>Members</Text>
//               </Body>
//             </CardItem>
//           </Card>

//           <Card style={{ width: "50%", height: 150 }}>
//             <CardItem>
//               <Body>
//                 <Text>Notes</Text>
//               </Body>
//             </CardItem>
//           </Card>
//         </View>
//         <View
//           style={{
//             paddingBottom: 190,
//             margin: 5,
//           }}
//         >
//           <View
//           style={{
//             display: "flex",
//             flexDirection: "row"
//           }}>
//             <Icon name="sticky-note-o" size={25} />
//             <Text style={{ marginLeft: 5 }}>About</Text>
//           </View>
//           <Text>{this.state.description}</Text>
//         </View>
//       </Fragment>
//     );
//   }
// }

// export default GroupScreen;
