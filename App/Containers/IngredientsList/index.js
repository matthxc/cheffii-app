import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, SwipeRow, Text, Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Redux
import { makeSelectIngredientsList } from './selectors';
import { setIngredientsList } from './actions';

// Styles
import { ItemList } from './styles/IngredientsList';

class IngredientsList extends Component {
  static propTypes = {
    ingredientsList: PropTypes.object.isRequired,
    setIngredientsList: PropTypes.func.isRequired,
  };

  ingredientsList = ingredients =>
    ingredients.map((ingredient, counter) => (
      <SwipeRow
        key={counter}
        rightOpenValue={-75}
        body={
          <ItemList>
            <Text>{ingredient.Name}</Text>
          </ItemList>
        }
        right={
          <Button danger onPress={() => alert('Trash')}>
            <Icon active name="trash" />
          </Button>
        }
      />
    ));

  render() {
    const {
      ingredientsList: { data },
    } = this.props;
    return (
      <Container>
        <Content scrollEnabled={false}>{this.ingredientsList(data)}</Content>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  ingredientsList: makeSelectIngredientsList(),
});

const mapDispatchToProps = {
  setIngredientsList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IngredientsList);
