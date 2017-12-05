var initialise = function(){
    var center = {lat:55.864237, lng:-4.251806};
    var container = document.getElementById('main-map');

    var mainMap = new MapWrapper(container, center, 14);
    mainMap.addClickEvent();

    var bounceButton = document.getElementById('button-bounce-markers');
    bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

    var clearButton = document.getElementById('button-clear');
    clearButton.addEventListener("click", mainMap.clearMarkers.bind(mainMap));

    var centerMarker = mainMap.addMarker(center);
    mainMap.getMarkerInfo(centerMarker);

    var buttonChicago = document.getElementById('button-chicago');
    buttonChicago.addEventListener("click", mainMap.setCenter.bind(mainMap));

}

window.addEventListener('load', initialise);
