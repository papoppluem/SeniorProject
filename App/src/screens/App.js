/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Input,
  Item,
  Card,
  CardItem,
} from 'native-base';
import style from './style';
import {View, Image} from 'react-native';

class App extends Component {
  render() {
    return (
      <View
          {/* eslint-disable-next-line react-native/no-inline-styles */}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Container>
          <Header searchBar style={style.container}>
            <Left>
              <Button transparent>
                <Icon name="home" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="home" />
                <Icon name="home" />
              </Button>
            </Right>
          </Header>
          <Content padder>
            <Item regular style={style.searchBar}>
              <Icon active name="home" />
              <Input placeholder="Search" />
            </Item>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: '#',
                  }}
                  style={{
                    height: 100,
                    width: null,
                    flex: 1,
                    backgroundColor: 'grey',
                  }}
                />
              </CardItem>
              <CardItem footer>
                <Left>
                  <Body>
                    <Text>ร้านก๋วยเตี๋ยวเจ๊ไฝ</Text>
                    <Text note>อาหารเส้น</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: '#',
                  }}
                  style={{
                    height: 100,
                    width: null,
                    flex: 1,
                    backgroundColor: 'grey',
                  }}
                />
              </CardItem>
              <CardItem footer>
                <Left>
                  <Body>
                    <Text>ร้านก๋วยเตี๋ยวเจ๊ไฝ</Text>
                    <Text note>อาหารเส้น</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
            <CardItem>
              <Button warning>
                <Text> Warning </Text>
              </Button>
              <Button warning>
                <Text> Warning </Text>
              </Button>
              <Button warning>
                <Text> Warning </Text>
              </Button>
            </CardItem>
          </Content>
          <Content padder>
            <Card>
              <Left>
                <CardItem>
                  <Image
                    source={{uri: '#'}}
                    style={{height: '100px', width: '50px'}}
                  />
                </CardItem>
              </Left>
            </Card>
          </Content>
          <Footer>
            <FooterTab>
              <Button style={style.container} full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </View>
    );
  }
}

export default App;
