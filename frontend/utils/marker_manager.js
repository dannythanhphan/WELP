class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        businesses.forEach((business) => {
            
        })
        businesses.forEach((business) => {
            let bizId = business.id
            this.createMarkerFromBusiness(business)
            if (!Object.keys(this.markers).includes(bizId)) {
                this.removeMarker()
            }
        })
    }

    createMarkerFromBusiness(business) {
        Object.assign(this.markers, {[business.id]: new google.maps.Marker({
            position: {lat: business.lat, lng: business.lng},
            map: this.map,
            title: business.name
        })});
    }

    removeMarker() {

    }
}

export default MarkerManager