import { connect } from 'react-redux';
import App from 'src/components/App';
import { wsConnect, saveRecipes } from 'src/actions/recipes';

const mapStateToProps = (state) => ({
  list: state.recipes.list,
  loading: state.recipes.loading,
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
