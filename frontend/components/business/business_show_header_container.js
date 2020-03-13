import { connect } from "react-redux";
import BusinessShowHeader from "./business_show_header";
import { login, logout } from "../../actions/session_actions" 
import { updateFilters } from "../../actions/filter_actions";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUser]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
});



export default connect(mapStateToProps, mapDispatchToProps)(BusinessShowHeader)