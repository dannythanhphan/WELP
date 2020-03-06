import React from 'react';
import MarkerManager from '../../utils/marker_manager';


class BusinessMap extends React.Component {
    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 14
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.businesses)

        this.map.addListener("idle", () => {
            let bounds = { northEast: {
                                lat: this.map.getBounds().getNorthEast().lat(),
                                lng: this.map.getBounds().getNorthEast().lng()
                            },
                           southWest: {
                               lat: this.map.getBounds().getSouthWest().lat(),
                               lng: this.map.getBounds().getSouthWest().lng(),
                            }
                        }
            this.props.updateBounds(bounds)
        })
    }

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