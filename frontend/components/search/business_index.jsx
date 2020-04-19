import React from 'react';
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: false,
            businesses: this.props.businesses,
            price: 0
        }

        this.filterCost = this.filterCost.bind(this);
        this.toggleRating = this.toggleRating.bind(this);
        this.filterBusinesses = this.filterBusinesses.bind(this);
        this.onlyUnique = this.onlyUnique.bind(this);
    }

    filterCost(e) {
        this.setState({ price: parseInt(e.target.value) })
    }

    toggleDropdown() {
        document.getElementById("price-dropdown-content").classList.toggle("show")
    }

    toggleRating() {
        document.getElementById("rating-filter").classList.toggle("clicked")
        if (this.state.rating === false) {
            this.setState({ rating: true });
        } else {
            this.setState({ rating: false, businesses: this.props.businesses });
        }
    }

    filterBusinesses(businesses, search) {
        let filteredBizs;
        let { price, rating } = this.state;
        let searchedItems = [];

        if (search.length > 0) {
            for (let i = 0; i < businesses.length; i++) {
                if (businesses[i].categories === search.charAt(0).toUpperCase() + search.slice(1)) {
                    searchedItems.push(businesses[i])
                }
            }
            searchedItems.reverse();
        }

        if (price > 0 && rating) {
            filteredBizs = businesses.filter(biz => biz.cost === this.state.price);
            filteredBizs = filteredBizs.sort(function(b, a){return a.rating - b.rating});
            if (searchedItems.length > 0) {
                for (let i = 0; i < searchedItems.length; i++) {
                    filteredBizs.unshift(searchedItems[i]);
                }
            }
        } else if (price > 0) {
            filteredBizs = businesses.filter(biz => biz.cost === this.state.price);
            if (searchedItems.length > 0) {
                for (let i = 0; i < searchedItems.length; i++) {
                    filteredBizs.unshift(searchedItems[i]);
                }
            }
        } else if (rating === true) {
            filteredBizs = businesses.sort(function(b, a){return a.rating - b.rating});
            if (searchedItems.length > 0) {
                for (let i = 0; i < searchedItems.length; i++) {
                    filteredBizs.unshift(searchedItems[i]);
                }
            }
        } else if (price === 0 && !rating) {
            filteredBizs = businesses;
            if (searchedItems.length > 0) {
                for (let i = 0; i < searchedItems.length; i++) {
                    filteredBizs.unshift(searchedItems[i]);
                }
            }
        }

        return filteredBizs.filter(this.onlyUnique);
    }


    onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    render() {
        window.scrollTo(0,0);
        let { businesses, search } = this.props;
        let businessesCopy = [...businesses];
        let filteredBizs = this.filterBusinesses(businessesCopy, search);

        const displayBusiness = (businesses.length > 0) ? (
            filteredBizs.map((business) => {
                return <BusinessIndexItem key={Math.random()} business={business} />
            })
        ) : (
            <div className="no-searches-found">
                Not able to find what you are looking for. Please redo search
            </div>
        )

        // if (this.state.rating === true) {
        //     businesses = this.state.businesses
        // }
        return (
            <div className="searched-businesses-container">
                <div className="search-filter-header">
                    <label className="filter-header-title">Browsing San Francisco, CA Businesses</label> 
                    <div className="filter-buttons">
                        <div className="price-dropdown">
                            <button className="price-button" onFocus={this.toggleDropdown}>
                                Price &#9660;
                            </button>
                            <form id="price-dropdown-content" className="search-filter-price-dropdown"  onBlur={this.toggleDropdown} >
                                    <label className="price-radio-container">
                                        <input onClick={this.filterCost} 
                                            className="price-radio" 
                                            type="radio" 
                                            name="cost" 
                                            value="0" 
                                        /> 
                                        No Filter
                                    </label>
                                    <label className="price-radio-container">
                                        <input onClick={this.filterCost} 
                                            className="price-radio" 
                                            type="radio" 
                                            name="cost" 
                                            value="1" 
                                        /> 
                                        $ 
                                    </label>
                                    <label className="price-radio-container">
                                        <input onClick={this.filterCost} 
                                            className="price-radio" 
                                            type="radio" 
                                            name="cost" 
                                            value="2" 
                                        /> 
                                        $$ 
                                    </label>
                                    <label className="price-radio-container">
                                        <input onClick={this.filterCost} 
                                            className="price-radio" 
                                            type="radio" 
                                            name="cost" 
                                            value="3" 
                                        /> 
                                        $$$ 
                                    </label>
                                    <label className="price-radio-container">
                                        <input onClick={this.filterCost} 
                                            className="price-radio" 
                                            type="radio" 
                                            name="cost" 
                                            value="4" 
                                        /> 
                                        $$$$ 
                                    </label>
                            </form>
                        </div>
                        <div className="price-dropdown">
                            <button onClick={this.toggleRating} id="rating-filter" className="rating-filter-button">Rating</button>
                        </div>
                    </div>
                </div>
                {displayBusiness}
            </div>
        )
    }
}

export default BusinessIndex;