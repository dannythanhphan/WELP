import React from 'react';
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cost: 0
        }
    }

    filterCost(e) {
        this.setState({ cost: e.target.value })
        this.props.updateFilters("maxCost", this.state.cost)
    }

    toggleDropdown() {
        document.getElementById("price-dropdown-content").classList.toggle("show")
    }

    
    render() {
        const { businesses } = this.props
        return (
            <div className="searched-businesses-container">
                <div className="search-filter-header">
                    Browsing San Francisco, CA Businesses
                    <div className="price-dropdown">
                        <button className="price-button" onFocus={this.toggleDropdown}>
                            Price &#9660;
                        </button>
                        <form id="price-dropdown-content" className="search-filter-price-dropdown"  onBlur={this.toggleDropdown} >
                                <input type="radio" name="cost" value="1" /> $
                                <input type="radio" name="cost" value="2" /> $$
                                <input type="radio" name="cost" value="3" /> $$$
                                <input type="radio" name="cost" value="4" /> $$$$
                                <button onClick={this.filterCost}>Save</button>
                        </form>
                    </div>
                </div>
                {businesses.map((business) => {
                    return <BusinessIndexItem key={business.id} business={business} />
                })}
            </div>
        )
    }
}

export default BusinessIndex;