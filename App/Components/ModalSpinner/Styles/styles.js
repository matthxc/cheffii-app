import { View } from 'react-native-animatable';
import styled from 'styled-components';

export const Container = styled(View)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const AnimatableView = styled(View)`
  background-color: 'rgb(255, 255, 255)';
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  border-radius: 15px;
`;
