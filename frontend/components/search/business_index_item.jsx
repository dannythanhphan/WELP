import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
    let cost = ""
    for (let i = 1; i <= business.cost; i++) {
        cost += "$";
    }
    return (
        <Link to={`/businesses/${business.id}`} className="business-info-box-container">
            <div className="business-picture-container"></div>
            <div className="business-info-container">
                <div className="search-business-name">{business.name}</div>
                <div className="stars-count-container">
                    <div className="stars-container">
                        <span className={`fa fa-star index-star ${business.rating >= 1 ? "checked" : ""}`} />
                        <span className={`fa fa-star index-star ${business.rating >= 2 ? "checked" : ""}`} />
                        <span className={`fa fa-star index-star ${business.rating >= 3 ? "checked" : ""}`} />
                        <span className={`fa fa-star index-star ${business.rating >= 4 ? "checked" : ""}`} />
                        <span className={`fa fa-star index-star ${business.rating >= 5 ? "checked" : ""}`} />
                    </div>
                    <div className="review-count">{business.num_reviews}</div>
                </div>  
                <div className="cost-cat-container">
                    <span className="cost-cat">
                        {cost} 
                    </span>
                    <span className="cost-cat">
                        &#8226; 
                    </span>
                    <span className="cost-cat">
                        {business.categories}
                    </span>
                </div>

                <div className="business-item-review">
                    "{business.review}"
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