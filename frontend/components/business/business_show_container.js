import { connect } from "react-redux";
import BusinessShow from "./business_show";
import { fetchBusiness } from "../../actions/business_actions";
import { updateFilters } from "../../actions/filter_actions";

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id],
});

const mapDispatchToProps = (dispatch) => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);