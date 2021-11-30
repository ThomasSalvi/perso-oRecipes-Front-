import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { withRouter } from 'react-router';
import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  recipe: findRecipe(state.recipes.list, ownProps.match.params.slug),
});

const mapDispatchToProps = null;

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
