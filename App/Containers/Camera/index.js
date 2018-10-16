import React from 'react';
import { View } from 'react-native';
import { Text, Spinner, H1, Icon } from 'native-base';
import AWS from 'aws-sdk/dist/aws-sdk-react-native';
import base64 from 'base-64';

// Styles
import {
  Container as Wrapper,
  Camera,
  TakePictureButton,
} from './styles/takePictureScreenStyles';

// AWS Config
import AWSConfig from '../../Lib/AWSConfig';

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
    console.tron.log(AWSConfig);
    this.rekognition = new AWS.Rekognition(AWSConfig);
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
        const { labels } = await this.detectLabels(image);
        console.tron.log(labels);
      } catch (error) {
        console.tron.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  detectLabels = bytes =>
    new Promise((resolve, reject) => {
      const params = { Image: { Bytes: this.getBinary(bytes) } };
      this.rekognition.detectLabels(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });

  getBinary = base64Image => {
    const binaryString = base64.decode(base64Image);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
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
