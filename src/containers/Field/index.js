import { connect } from 'react-redux';
import Field from 'src/components/LoginForm/Field';
import { onChange } from 'src/actions/user';

const mapStateToProps = (state) => ({
  values: state.user.value,
});

const mapDispatchToProps = (dispatch) => (
  {
    onChange: (value, target) => {
      dispatch(onChange(value, target));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Field);
