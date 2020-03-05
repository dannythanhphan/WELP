import React from 'react';
import BusinessShowHeader from './business_show_header'
class BusinessShow extends React.Component {
    componentDidMount() {
        this.props.fetchBusiness(1);
    }

    render() {
        const { business } = this.props

        return (
            <div>
                <BusinessShowHeader />
                <div>

                </div>
            </div>
        );
    }
}

export default BusinessShow;