import { connect } from 'react-redux';
import Menu from 'src/components/Menu';
import { wsConnect, saveRecipes } from 'src/actions/recipes';

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
  laoding: state.recipes.loading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => (
  {
    wsConnect: () => {
      dispatch(wsConnect());
    },
    saveRecipes: (data) => {
      dispatch(saveRecipes(data));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
