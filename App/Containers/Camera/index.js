import React from 'react';
import { Text, Spinner } from 'native-base';

// Styles
import {
  Container as Wrapper,
  Camera,
  TakePictureButton,
} from './styles/takePictureScreenStyles';

class TakePicture extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null;
  }

  state = {
    loading: false,
  };

  takePicture = async () => {
    if (this.camera) {
      this.setState({ loading: true });
      console.log(this.camera);
      const options = { quality: 0.5, base64: true };
      try {
        const data = await this.camera.takePictureAsync(options);
        console.log(data.base64);
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <Wrapper>
        <Camera
          innerRef={cam => {
            this.camera = cam;
          }}
        >
          <TakePictureButton primary block onPress={this.takePicture}>
            {loading ? <Spinner color="#fff" /> : <Text> Take Picture </Text>}
          </TakePictureButton>
        </Camera>
      </Wrapper>
    );
  }
}

export default TakePicture;
