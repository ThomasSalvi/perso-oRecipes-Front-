import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeField, handleLogin, handleLogout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: state.user.loggedMessage,
  pseudo: state.user.pseudo,

});

const mapDispatchToProps = (dispatch) => (
  {
    changeField: () => {
      dispatch(changeField());
    },
    handleLogin: () => {
      dispatch(handleLogin());
    },
    handleLogout: () => {
      dispatch(handleLogout());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
