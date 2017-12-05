var MapWrapper = function(container, coords, zoom){
    this.googleMap = new google.maps.Map(container, {
        center: coords,
        zoom: zoom,
    });
    this.markers = [];
}

MapWrapper.prototype.getMarkerInfo = function(marker){
    var infoWindow = new google.maps.InfoWindow({
        content: "Interesting Information!"
    });

    marker.addListener('click', function(){
        infoWindow.open(this.googleMap, marker);
    });
}

MapWrapper.prototype.setCenter = function(){
    this.googleMap.setCenter({lat:41.878114, lng:-87.629798});
}

MapWrapper.prototype.addMarker = function(coords){
    var marker = new google.maps.Marker({
        position: coords,
        map: this.googleMap
    });

    this.markers.push(marker);
    return marker;
}

MapWrapper.prototype.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
        console.log(event);
        console.log(event.latLng.lat());
        this.addMarker(event.latLng);
    }.bind(this))
}

MapWrapper.prototype.bounceMarkers = function(){
    this.markers.forEach(function(marker){
        marker.setAnimation(google.maps.Animation.BOUNCE)
    });
}

MapWrapper.prototype.clearMarkers = function(){
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
        this.markers = [];
}
