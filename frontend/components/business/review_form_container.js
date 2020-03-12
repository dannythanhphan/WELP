import { connect } from "react-redux";
import { createNewReview } from "../../actions/review_actions";
import ReviewForm from './review_form'

const mapDispatchToProps = (dispatch) => ({
    createNewReview: (form) => dispatch(createNewReview(form))
});

export default connect(null, mapDispatchToProps)(ReviewForm)
