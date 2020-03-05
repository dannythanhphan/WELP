import React from 'react';
import BusinessMap from './business_map'
import BusinessIndex from './business_index'
import BusinessShowHeader from '../business/business_show_header_container';
import BusinessShowHeaderContainer from '../business/business_show_header_container';

const Search = ({ businesses, fetchBusinesses}) => (
    <div className="search-page-container">
        <BusinessShowHeader />
        <BusinessIndex businesses={businesses} fetchBusinesses={fetchBusinesses}/>
        <BusinessMap />
    </div>
);

export default Search