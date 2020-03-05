import React from 'react';
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component {
    componentDidMount() {
        this.props.fetchBusinesses()
    }
    render() {
        const { businesses } = this.props
        return (
            <div className="searched-businesses-container">
                {businesses.map((business) => {
                    return <BusinessIndexItem business={business} />
                })}
            </div>
        )
    }
}

export default BusinessIndex;