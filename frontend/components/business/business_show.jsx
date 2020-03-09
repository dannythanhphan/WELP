import React from 'react';
import BusinessShowHeader from './business_show_header'

class BusinessShow extends React.Component {
    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id);
    }

    render() {
        const { business } = this.props

        return (
            <div>
                <BusinessShowHeader />
                <div>
                    {business.cost}
                </div>
            </div>
        );
    }
}

export default BusinessShow;