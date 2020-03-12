import { connect } from "react-redux";
import { createNewReview } from "../../actions/review_actions";
import ReviewForm from './review_form'
import { fetchBusiness } from "../../actions/business_actions";

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.business_id]
});

const mapDispatchToProps = (dispatch) => ({
    createNewReview: (form) => dispatch(createNewReview(form)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
