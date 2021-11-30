import { connect } from 'react-redux';
import Fav from 'src/components/Fav';
import { fetchFav } from 'src/actions/user';

const mapStateToProps = (state) => ({
  recipes: state.recipes.favList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFav: () => {
    dispatch(fetchFav());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Fav);
