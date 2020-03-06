class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        businesses.forEach((business) => {
            let bizId = business.id
            if (!Object.keys(this.markers).includes(bizId)) {
                Object.assign(this.markers, {[business.id]: business.id})
                return this.createMarkerFromBusiness(business)
            }
        })
    }

    createMarkerFromBusiness(business) {
        new google.maps.Marker({
            position: {lat: business.lat, lng: business.lng},
            map: this.map,
            title: business.name
        });
    }
}

export default MarkerManager