import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout, login } from '../../actions/session_actions'
import { updateFilters } from "../../actions/filter_actions";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
});



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)