import React from 'react';
import BusinessShowHeader from './business_show_header'

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.id)
    }
    
    render() {
        this.id = Number(this.props.match.params.id)
        const { business } = this.props

        return (
            <div>
                <BusinessShowHeader />
                <div>
                    {business.name}
                </div>
            </div>
        );
    }
}

export default BusinessShow;