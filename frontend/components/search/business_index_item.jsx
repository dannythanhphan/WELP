import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
    return (
        <Link to={`/businesses/${business.id}`} className="business-info-box-container">
            <div className="business-picture-container"></div>
            <div className="business-info-container">
                <div className="search-business-name">{business.name}</div>
            </div>
            <div className="search-phone-street-container">
                <p className="search-business-phone">{business.business_phone}</p>
                <p className="search-business-street">{business.street_address}</p>
            </div>

        </Link>
    )
};

export default BusinessIndexItem