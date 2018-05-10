import React from "react";
import { StyleSheet } from "react-native";
import SideBar from "./SideBar";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Drawer,
  Title
} from "native-base";

export default class MainHeader extends React.Component {
  openedDrawer = false;

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.toggleDrawer()}>
              {this.openedDrawer ? (
                <Icon name="arrow-back" />
              ) : (
                <Icon name="menu" />
              )}
            </Button>
          </Left>
          <Body>{/* <Title>Header</Title> */}</Body>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name="search" />
            </Button>
            <Button transparent>
              <Icon type="FontAwesome" name="th" />
            </Button>
            <Button transparent>
              <Icon type="FontAwesome" name="comments-o" />
            </Button>
            <Button transparent>
              <Icon type="FontAwesome" name="bell-o" />
            </Button>
            <Button transparent>
              <Icon type="FontAwesome" name="user-circle" />
            </Button>
          </Right>
        </Header>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()}
        />
      </Container>
    );
  }

  closeDrawer = () => {
    this.drawer._root.close();
    this.openedDrawer = false;
  };

  toggleDrawer = () => {
    if (this.openedDrawer) {
      this.drawer._root.close();
      this.openedDrawer = false;
    } else {
      this.drawer._root.open();
      this.openedDrawer = true;
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});