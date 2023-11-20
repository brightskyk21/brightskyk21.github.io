var mapOptions = {
    center: new naver.maps.LatLng(37.629835024085, 127.07629504),
    zoom: 17
};

var map = new naver.maps.Map('map', mapOptions);
var currentMarkers = [];

function clearMarkers() {
    currentMarkers.forEach(function (marker) {
        marker.setMap(null);
    });
    currentMarkers = [];
}

function createMarker(place) {
    var markerOptions = {
        position: new naver.maps.LatLng(place.latitude, place.longitude),
        map: map
    };

    var marker = new naver.maps.Marker(markerOptions);
    naver.maps.Event.addListener(marker, 'click', function () {
        openInfoWindow(marker, place);
    });

    currentMarkers.push(marker);
}

function openInfoWindow(marker, place) {
    var contentString = '<div class="info-window-content">' +
                        '<h3>' + place.name + '</h3>' +
                        '<p>' + place.category + '</p>' +
                        // Add more place details here
                        '</div>';

    var infoWindow = new naver.maps.InfoWindow({
        content: contentString
    });

    infoWindow.open(map, marker);
}

function showPlaces(places) {
    clearMarkers();
    places.forEach(createMarker);
}

document.getElementById('showRestaurants').addEventListener('click', function () {
    showPlaces(restaurants); // Assuming 'restaurants' is an array of restaurant objects
});

document.getElementById('showCafes').addEventListener('click', function () {
    showPlaces(cafes); // Assuming 'cafes' is an array of cafe objects
});

// Initialize with restaurants shown
showPlaces(restaurants);
