import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
    return (
        <Link to={`/businesses/${business.id}`} className="business-info-box-container">
            <div className="business-picture-container"></div>
            <div className="business-info-container">
                <div className="search-business-name">{business.name}</div>
                <div className="stars-count-container">
                    <div className="stars-container">
                        <span className={`fa fa-star ${business.rating >= 1 ? "checked" : ""}`} />
                        <span className={`fa fa-star ${business.rating >= 2 ? "checked" : ""}`} />
                        <span className={`fa fa-star ${business.rating >= 3 ? "checked" : ""}`} />
                        <span className={`fa fa-star ${business.rating >= 4 ? "checked" : ""}`} />
                        <span className={`fa fa-star ${business.rating >= 5 ? "checked" : ""}`} />
                    </div>
                    <div className="review-count">{business.num_reviews}</div>
                </div>  

            </div>
            <div className="search-phone-street-container">
                <p className="search-business-phone">{business.business_phone}</p>
                <p className="search-business-street">{business.street_address}</p>
            </div>
            <br/>

        </Link>
    )
};

export default BusinessIndexItem