import React, { Component } from "react";
import { Alert,View } from "react-native";
import ActionBar from "../components/ActionBar";
import {
  Container,
  Text,
  Header,
  Button,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import axios from 'axios'

class CreateGroupScreen extends Component {
  state = {
    name: "",
    description: "",
  };

  createGroup = () => {
    axios.get("/auth/user/me")
      .then(res => {

        axios.post('/groups',{
          userId: res.data.id,
          name: this.state.name,
          description: this.state.description
        }).then(res => {
          if(res.status === 200){
            Alert.alert("New group created")
          }
        }).catch(err => console.log(err))
      
      })
      .catch(err => {console.log(err);throw err});

    
  };

  render() {
    return (
      <Container>
        <ActionBar navigation={this.props.navigation} name={"Create Group"} back/>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
                onChangeText={text => this.setState({ name: text })}
                value={this.state.name}
              />
            </Item>
            <Item floatingLabel>
              <Label>Description</Label>
              <Input
                multiline={true}
                numberOfLines={8}
                onChangeText={text => this.setState({ description: text })}
                value={this.state.description}
              />
            </Item>
          </Form>
          <Button style={{ margin: 10 }} success block onPress={this.createGroup}>
            <Text>Create Group</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default CreateGroupScreen;
