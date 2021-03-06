import React from 'react';
import BusinessMap from './business_map'
import BusinessIndex from './business_index'
import BusinessShowHeader from '../business/business_show_header_container';
import BusinessShowHeaderContainer from '../business/business_show_header_container';

const Search = ({ businesses, search, updateFilters, history }) => (
    <div className="search-page-container">
        <BusinessShowHeader history={history}/>
        <div className="index-map-container">
            <BusinessIndex 
                businesses={businesses} 
                updateFilters={updateFilters} 
                search={search}
            />
            <div className="main-map-container">
                <BusinessMap 
                    businesses={businesses} 
                    updateFilters={updateFilters} 
                    search={search}
                />
            </div>
        </div>
    </div>
);

export default Search