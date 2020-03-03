import { connect } from 'react-redux';
import Login from './login';
import { login } from '../actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
    login: (formUser) => dispatch(login(formUser))
})

export default connect(null, mapDispatchToProps)(Login);