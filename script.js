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
        position: place.position,
        map: map
    };

    var marker = new naver.maps.Marker(markerOptions);
    naver.maps.Event.addListener(marker, 'click', function () {
        openInfoWindow(marker, place);
    });

    currentMarkers.push(marker);
}

function openInfoWindow(marker, place) {
    var menuItemsHtml = place.menu.map(function (item) {
        return '<li>' + item.name + ': ' + item.price + '</li>';
    }).join('');

    var contentString = `
        <div class="info-window-content">
            <h3>${place.name}</h3>
            <p>${place.phone}</p>
            <ul>${menuItemsHtml}</ul>
        </div>`;

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
    showPlaces(restaurants); // 'restaurants'는 음식점 객체 배열입니다.
});

document.getElementById('showCafes').addEventListener('click', function () {
    showPlaces(cafes); // 'cafes'는 카페 객체 배열입니다.
});

window.onclick = function (event) {
    var modal = document.getElementById('restaurantModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelector('.close').onclick = function () {
    var modal = document.getElementById('restaurantModal');
    modal.style.display = "none";
}
