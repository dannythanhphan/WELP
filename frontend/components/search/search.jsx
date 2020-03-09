import React from 'react';
import BusinessMap from './business_map'
import BusinessIndex from './business_index'
import BusinessShowHeader from '../business/business_show_header_container';
import BusinessShowHeaderContainer from '../business/business_show_header_container';

const Search = ({ businesses, fetchBusinesses, updateFilters}) => (
    <div className="search-page-container">
        <BusinessShowHeader />
        <div className="index-map-container">
            <BusinessIndex businesses={businesses} updateFilters={updateFilters}/>
            <BusinessMap businesses={businesses} updateFilters={updateFilters} />
        </div>
    </div>
);

export default Search