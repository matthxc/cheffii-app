import React from 'react';
import { Text } from 'native-base';

// Styles
import {
  Container as Wrapper,
  Camera,
  TakePictureButton,
} from './styles/takePictureScreenStyles';

class TakePicture extends React.Component {
  takePicture = () => {
    const options = {};
    // options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <Wrapper>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
        >
          <TakePictureButton primary block onPress={this.takePicture}>
            <Text> Take Picture </Text>
          </TakePictureButton>
        </Camera>
      </Wrapper>
    );
  }
}

export default TakePicture;
