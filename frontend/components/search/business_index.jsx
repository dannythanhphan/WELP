import React from 'react';
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component {
    render() {
        const { businesses } = this.props
        return (
            <div className="searched-businesses-container">
                {/* <div className="search-filter-header">
                    Browsing San Francisco, CA Businesses
                </div>
                <button className="search-filter-price">
                    Price
                    <form>
                        <input type="checkbox" value="1" /> $
                        <input type="checkbox" value="2" /> $$
                        <input type="checkbox" value="3" /> $$$
                        <input type="checkbox" value="4" /> $$$$
                        <button>Save</button>
                    </form>
                </button> */}
                {businesses.map((business) => {
                    return <BusinessIndexItem key={business.id} business={business} />
                })}
            </div>
        )
    }
}

export default BusinessIndex;