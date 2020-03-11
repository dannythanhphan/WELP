import { connect } from "react-redux";
import HomeBody from './home_body';
import { fetchAllBusinesses } from '../../actions/business_actions'

const mapStateToProps = (state) => ({
    businesses: state.entities.businesses
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody)