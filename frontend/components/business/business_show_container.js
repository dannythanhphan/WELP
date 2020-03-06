import { connect } from "react-redux";
import BusinessShow from "./business_show";
import { fetchBusiness } from "../../actions/business_actions";

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[1],
});

const mapDispatchToProps = (dispatch) => ({
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);