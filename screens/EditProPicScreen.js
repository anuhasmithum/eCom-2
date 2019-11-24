import React, { Component } from "react";
import { View, Image } from "react-native";
import ActionBar from "../components/ActionBar";
import { Button, Text } from "native-base";

class EditProPicScreen extends Component {
  render() {
    return (
      <>
        <ActionBar
          navigation={this.props.navigation}
          name="Edit Profile Picture"
        />
        <View id="parentView" style={{ flex: 1 }}>
          <View
            id="childView"
            style={{
              flex: 1,
              //   justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                style={{
                  borderWidth: 5,
                  borderColor: "white",
                  borderRadius: 100,
                  marginTop: 30,
                  width: 200,
                  height: 200,
                }}
                source={{
                  uri: "https://www.gstatic.com/webp/gallery3/1.sm.png",
                }}
              />
              <Button success style={{marginTop: 30,width: "90%"}}>
                <Text>Update Profile Picture</Text>
              </Button>
            </View>
          </View>
          <View id="childViewTwo">
            <Text>Don't center me</Text>
          </View>
        </View>
      </>
    );
  }
}

export default EditProPicScreen;
