import React from 'react';
import MarkerManager from '../../utils/marker_manager';

class BusinessMap extends React.Component {
    componentDidMount() {
        let mapOptions = {};
        if (this.props.business) {
            mapOptions = {
                center: { lat: this.props.business.lat, lng: this.props.business.lng },
                zoom: 16,
                disableDefaultUI: true,
                draggable: false
            };
        } else {
            let firstBiz = Object.values(this.props.businesses)[0]

            mapOptions = {
                center: { lat: firstBiz.lat, lng: firstBiz.lng },
                zoom: 14
            };
        }
        
        // const mapOptions = {
        //     center: { lat: firstBiz.lat, lng: firstBiz.lng },
        //     zoom: 14
        // };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        if (this.props.business) {
            this.MarkerManager.updateMarkers(this.props.business)
            // this.map.setOptions({ draggable: false});
        } else {
            this.MarkerManager.updateMarkers(this.props.businesses)
        }
        
        // let bounds = { northEast: {
        //                     lat: this.map.getBounds().getNorthEast().lat(),
        //                     lng: this.map.getBounds().getNorthEast().lng()
        //                     },
        //                 southWest: {
        //                     lat: this.map.getBounds().getSouthWest().lat(),
        //                     lng: this.map.getBounds().getSouthWest().lng(),
        //                     }
        //                 }
        // this.props.updateFilters("bounds", bounds)

        // this.map.addListener("idle", () => {
        //     let bounds = { northEast: {
        //                         lat: this.map.getBounds().getNorthEast().lat(),
        //                         lng: this.map.getBounds().getNorthEast().lng()
        //                     },
        //                    southWest: {
        //                        lat: this.map.getBounds().getSouthWest().lat(),
        //                        lng: this.map.getBounds().getSouthWest().lng(),
        //                     }
        //                 }
        //     this.props.updateFilters("bounds", bounds)
        // })
    }

    // boundsOnClick() {
        
    // }

    componentDidUpdate(prevProps) {
        if (prevProps.businesses !== this.props.businesses) {
            this.MarkerManager.updateMarkers(this.props.businesses)
        }
    }

    render() { 
        return (
            <div className="search-map-container">
                <div className="search-map" ref={map => this.mapNode = map}>

                </div>
            </div>
        )
    }
}
            
export default BusinessMap;