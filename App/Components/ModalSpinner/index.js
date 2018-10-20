import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Spinner } from 'native-base';
import _ from 'lodash';
import { Colors } from '../../Themes';
import { AnimatableView, Container } from './Styles/styles';

class ModalSpinner extends React.PureComponent {
  static defaultProps = {
    loading: false,
  };

  static propTypes = {
    message: PropTypes.string.isRequired,
    loading: PropTypes.bool,
  };

  state = { mount: false };

  componentDidMount = () => {
    if (this.props.loading) {
      this.setState({ mount: true });
    }
  };

  componentDidUpdate = prevProps => {
    const { loading } = this.props;
    const { mount } = this.state;
    if (prevProps.loading !== loading && loading && !mount) {
      this.setState({ mount: true });
    }
  };

  onDisappear = () => {
    if (!this.props.loading) {
      this.setState({ mount: false });
    }
  };

  render() {
    const { message, loading } = this.props;
    const { mount } = this.state;
    if (mount) {
      return (
        <Container
          animation={loading ? 'fadeIn' : 'fadeOut'}
          duration={300}
          onAnimationEnd={this.onDisappear}
        >
          <AnimatableView
            animation={loading ? 'fadeInUp' : 'fadeOutDown'}
            duration={300}
          >
            <Text>{message}</Text>
            <Spinner color={Colors.primary} />
          </AnimatableView>
        </Container>
      );
    }
    return [];
  }
}

export default ModalSpinner;
