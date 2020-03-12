import { connect } from "react-redux";
import HomeBody from './home_body';
import { fetchAllBusinesses } from '../../actions/business_actions'
import { updateFilters } from '../../actions/filter_actions'

const mapStateToProps = (state) => ({
    businesses: state.entities.businesses
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBody)