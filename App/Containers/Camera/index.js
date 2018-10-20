import React from 'react';
import { View } from 'react-native';
import { Text, Spinner, H1, Icon } from 'native-base';
import { API } from 'aws-amplify';

// Styles
import {
  Container as Wrapper,
  Camera,
  TakePictureButton,
} from './styles/takePictureScreenStyles';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Icon name="camera" style={{ marginBottom: 20, fontSize: 52 }} />
    <H1 style={{ fontFamily: 'Montserrat-Bold' }}>Waiting...</H1>
  </View>
);
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
      const options = { quality: 0.2, base64: true };
      try {
        const { base64: image } = await this.camera.takePictureAsync(options);
        const response = await this.detectLabels(image);
        console.tron.log(response);
      } catch (error) {
        console.tron.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  detectLabels = async bytes => {
    const myInit = {
      body: {
        image: bytes,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await API.post(
        'cheffii-api-dev',
        '/rekognition',
        myInit,
      );
      return response;
    } catch (error) {
      throw error;
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
          notAuthorizedView={<PendingView />}
          pendingAuthorizationView={<PendingView />}
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
