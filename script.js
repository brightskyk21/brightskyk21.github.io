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

    // 마커 클릭 이벤트에 openInfoWindow 함수를 연결합니다.
    naver.maps.Event.addListener(marker, 'click', function() {
        openInfoWindow(marker, place);
    });
}

function openInfoWindow(marker, place) {
    var modal = document.getElementById('restaurantModal');
    var modalContent = modal.querySelector('.modal-content');

    modalContent.innerHTML = `
        <div class="info-window-content">
            <h3>${place.name}</h3>
            <p>전화번호: ${place.phone}</p>
            <ul>${place.menu.map(item => `<li>${item.name}: ${item.price}</li>`).join('')}</ul>
        </div>`;

    modal.style.display = 'block';
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

window.onclick = function(event) {
    var modal = document.getElementById('restaurantModal');
    // 모달이 열려 있고, 클릭된 요소가 모달의 내용이 아니면 모달을 닫습니다.
    if (modal.style.display == 'block' && !modal.contains(event.target)) {
        modal.style.display = "none";
    }
}
