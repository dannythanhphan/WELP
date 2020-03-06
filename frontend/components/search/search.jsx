import React from 'react';
import BusinessMap from './business_map'
import BusinessIndex from './business_index'
import BusinessShowHeader from '../business/business_show_header_container';
import BusinessShowHeaderContainer from '../business/business_show_header_container';

const Search = ({ businesses, fetchBusinesses, updateBounds}) => (
    <div className="search-page-container">
        <BusinessShowHeader />
        <div className="index-map-container">
            <BusinessIndex businesses={businesses} updateBounds={updateBounds}/>
            <BusinessMap businesses={businesses} updateBounds={updateBounds} />
        </div>
    </div>
);

export default Search