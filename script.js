var mapOptions = {
    center: new naver.maps.LatLng(37.627773, 127.077664),
    zoom: 16
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

    naver.maps.Event.addListener(marker, 'touchend', function () {
        openInfoWindow(marker, place);
    });

    currentMarkers.push(marker)
}

function openInfoWindow(marker, place) {
    var modal = document.getElementById('restaurantModal');
    var modalContent = modal.querySelector('.modal-content');

    var menuTableHtml = `
        <table class="menu-table">
            <tbody>
                <tr>
                    <th colspan="2"><i class="fas fa-clipboard-list"></i></th>
                </tr>`;

    menuTableHtml += place.menu.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td class="price">${item.price}</td>
                </tr>
            `).join('');

    menuTableHtml += `
            </tbody>
        </table>`;

    modalContent.innerHTML = `
        <div class="info-window-content">
            <h3>${place.name}</h3>
            <p><i class="fas fa-phone-alt"></i> ${place.phone}</p>
            ${menuTableHtml}
        </div>`;

    modal.style.display = 'block';
}

function showPlaces(places) {
    clearMarkers();
    places.forEach(createMarker);
}

document.getElementById('showRestaurants').addEventListener('click', function () {
    showPlaces(restaurants);
});

document.getElementById('showCafes').addEventListener('click', function () {
    showPlaces(cafes);
});

window.onclick = function (event) {
    var modal = document.getElementById('restaurantModal');
    var modalBackground = document.querySelector('.modal-background');

    if (event.target === modalBackground) {
        modal.style.display = "none";
    }
};
