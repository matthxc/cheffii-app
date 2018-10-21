import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

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
