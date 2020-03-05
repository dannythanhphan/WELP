import { connect } from "react-redux";
import Search from './search'
import { fetchAllBusinesses } from "../../actions/business_actions";

const mapStateToProps = (state) => ({
    businesses: Object.values(state.entities.businesses)
});

const mapDispatchToProps = (dispatch) => ({
    fetchBusinesses: () => dispatch(fetchAllBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)