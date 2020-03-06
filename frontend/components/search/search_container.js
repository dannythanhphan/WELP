import { connect } from "react-redux";
import Search from './search'
import { fetchAllBusinesses } from "../../actions/business_actions";
import updateBounds from "../../actions/filter_actions";



const mapStateToProps = (state) => ({
    businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = (dispatch) => ({
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)