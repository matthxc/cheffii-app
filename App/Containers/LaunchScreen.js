import React, { Component } from 'react';
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
} from 'native-base';

/* eslint-disable react/prefer-stateless-function */
export default class LaunchScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}
