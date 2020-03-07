class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(businesses) {
        this.businessObj = {};
        businesses.forEach((business) => {
            Object.assign(this.businessObj, {[business.id]: business})
        })

        this.markerKeys = Object.keys(this.markers);

        for (let i = 0; i < this.markerKeys.length; i++) {
            if (!Object.keys(this.businessObj).includes(this.markerKeys[i])) {
                this.removeMarker(this.markers[this.markerKeys[i]])
                delete this.markers[this.markerKeys[i]]
            }
        }
        let that = this;
        businesses.forEach((business) => {

            if (!Object.keys(that.markers).includes(`${business.id}`)) {
                this.createMarkerFromBusiness(business)
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

    removeMarker(marker) {
        marker.setMap(null)
    }
}

export default MarkerManager