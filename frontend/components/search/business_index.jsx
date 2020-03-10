import React from 'react';
import BusinessIndexItem from './business_index_item'

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: false,
        }

        this.filterCost = this.filterCost.bind(this);
        this.toggleRating = this.toggleRating.bind(this);
    }

    filterCost(e) {
        this.props.updateFilters("maxCost", parseInt(e.target.value))
    }

    toggleDropdown() {
        document.getElementById("price-dropdown-content").classList.toggle("show")
    }

    toggleRating() {
        document.getElementById("rating-filter").classList.toggle("clicked")
        if (this.state.rating === false) {
            this.setState({ rating: true });
            this.props.updateFilters("rating", true);
        } else {
            this.setState({ rating: false });
            this.props.updateFilters("rating", false);
        }
    }
    
    render() {
        const { businesses } = this.props
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
                {businesses.map((business) => {
                    return <BusinessIndexItem key={business.id} business={business} />
                })}
            </div>
        )
    }
}

export default BusinessIndex;