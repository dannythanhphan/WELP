import { connect } from "react-redux";
import Search from './search'
import { fetchAllBusinesses } from "../../actions/business_actions";
import { updateFilters } from "../../actions/filter_actions";

const mapStateToProps = (state) => ({
    businesses: Object.values(state.entities.businesses),
    maxCost: state.ui.filter.maxCost
});

const mapDispatchToProps = (dispatch) => ({
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)