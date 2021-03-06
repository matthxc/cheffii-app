import styled from 'styled-components';
import { RNCamera } from 'react-native-camera';
import { Button } from 'native-base';

export const Container = styled.View`
  flex: 1;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TakePictureButton = styled(Button)`
  position: absolute;
  bottom: 20;
  margin-left: 30;
  margin-right: 30;
  left: 0;
  right: 0;
  z-index: 1;
`;
