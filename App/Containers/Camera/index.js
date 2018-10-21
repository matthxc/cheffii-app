import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, H1, Icon } from 'native-base';
import { API } from 'aws-amplify';
import { connect } from 'react-redux';

// Components
import ModalSpinner from 'Components/ModalSpinner';

// Redux
import { setIngredientsList } from 'Containers/IngredientsList/actions';

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
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    setIngredientsList: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.camera = null;
  }

  state = {
    loading: false,
    statusMessage: '',
  };

  takePicture = async () => {
    if (this.camera) {
      this.setState({ loading: true, statusMessage: 'Sending Picture' });
      const options = { quality: 0.2, base64: true };
      try {
        const { base64: image } = await this.camera.takePictureAsync(options);
        const { Labels } = await this.detectLabels(image);
        this.props.setIngredientsList(Labels);
        this.props.navigation.navigate('ingredientsList');
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
    this.setState({ statusMessage: 'Processing image' });
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
    const { loading, statusMessage } = this.state;
    return (
      <Wrapper>
        <ModalSpinner loading={loading} message={statusMessage} />
        <Camera
          innerRef={cam => {
            this.camera = cam;
          }}
          notAuthorizedView={<PendingView />}
          pendingAuthorizationView={<PendingView />}
        >
          <TakePictureButton
            primary
            block
            onPress={this.takePicture}
            disabled={loading}
          >
            <Text> Take Picture </Text>
          </TakePictureButton>
        </Camera>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  setIngredientsList,
};

export default connect(
  null,
  mapDispatchToProps,
)(TakePicture);
