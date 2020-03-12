import { receiveSpecificReviews } from "../../actions/review_actions";
import { connect } from "react-redux";
import ReviewItem from "./review_item";
import { fetchUsers } from '../../actions/user_actions'
const mapStateToProps = (state) => ({
    reviews: state.entities.reviews,
    users: state.entities.users
})

const mapDispatchToProps = (dispatch) => ({
    receiveSpecificReviews: (businessId) => dispatch(receiveSpecificReviews(businessId)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem)