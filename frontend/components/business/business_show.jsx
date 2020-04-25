import React from 'react';
import BusinessShowHeaderContainer from './business_show_header_container'
import BusinessShowHeader from './business_show_header'
import { Link } from 'react-router-dom'
import BusinessMap from '../search/business_map';
import ReviewItemContainer from './review_item_container';

class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.id)
    }

    // reSearch(category) {
    //     this.props.updateFilters("categories", category)
    //         .then(() => this.props.history.push("/search"))
    // }
    
    render() {
        const { business } = this.props

        let cost = "";
        let number = ""
        // debugger

        if (business) {
            for (let i = 1; i <= business.cost; i++) {
                cost += "$";
            }
            let numbersString = business.business_phone.toString()
            for (let i = 0; i <= 2; i++) {
                if (i === 0) {
                    number += `(${numbersString[0]}`
                } else if (i === 2) {
                    number += `${numbersString[2]}) `
                } else {
                    number += `${numbersString[1]}`
                }
            }

            for (let i = 3; i < 10; i++) {
                if (i === 5) {
                    number += `${numbersString[i]}-`
                } else {
                    number += `${numbersString[i]}`
                } 
            }
        }

        const business_photo = this.props.business ? (
            <div className="show-photos-container">
                <img src={`${business.photoUrl}`} className="business-picture"/>
            </div>
        ) : ( 
            null
        )

        const business_info = this.props.business ? (
            <div className="show-info-container">
                <div className="show-main-content-container">    
                    <div className="show-main-left-side">
                        <div className="biz-name">
                            {business.name}
                        </div>
                        <div className="show-stars-count-container">
                            <div className="show-stars-container">
                                <span className={`fa fa-star show-star ${business.rating >= 1 ? "picked" : ""}`} />
                                <span className={`fa fa-star show-star ${business.rating >= 2 ? "picked" : ""}`} />
                                <span className={`fa fa-star show-star ${business.rating >= 3 ? "picked" : ""}`} />
                                <span className={`fa fa-star show-star ${business.rating >= 4 ? "picked" : ""}`} />
                                <span className={`fa fa-star show-star ${business.rating >= 5 ? "picked" : ""}`} />
                            </div>
                            <div className="show-review-count">
                                {business.num_reviews} {business.num_reviews === 1 ? "review" : "reviews"}
                            </div>
                        </div>  
                        <div className="show-cost-cat">
                            <span className="show-cost">
                                {cost}
                            </span>
                            <span className="cost-cat">
                                &#8226;
                            </span>
                            <span className="show-cat">
                                {business.categories}
                            </span>
                        </div>
                        <div className="show-review-photo-buttons-container">
                            <Link to={`/businesses/${this.props.business.id}/reviews`}>
                                <button className="show-review-button">
                                    <i className="fa fa-star show-review-container">
                                        <p className="show-review-text"> Write a Review </p>
                                    </i>
                                </button>
                            </Link>
                            <button className="add-photo-button">
                                <i className="fa fa-camera show-photo-container">
                                    <p className="show-photo-text"> Add Photo</p>
                                </i>
                            </button>
                        </div>
                        <div className="show-border-line"></div>
                        <div className="show-business-map">
                            <p className="show-map-title">Location & Hours</p>
                            <div className="actual-map">
                                <BusinessMap business={business} />
                            </div>
                            <div className="business-map-address">
                                {business.street_address}
                                <br/>
                                {business.city}, {business.state} {business.zip_code}
                            </div>
                        </div>
                        <div className="show-border-line"></div>
                        <div>
                            <ReviewItemContainer business={business} />
                        </div>
                    </div>
                    <div className="show-stickied-right">
                        <div className="show-stickied">
                            <div className="biz-sticky">
                                <i className="fas fa-signature signature"></i>
                                {business.name}
                            </div>
                            <div className="biz-sticky">
                                <i className="fas fa-phone phone"></i>
                                {number}
                            </div>
                            <div className="biz-number">
                                <i className="far fa-window-maximize window"></i>
                                {business.url}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        ) : (
            null
        )

        return (
            <div>
                <BusinessShowHeaderContainer history={this.props.history}/>
                {business_photo}
                {business_info}
            </div>
        );
    }
}

export default BusinessShow;