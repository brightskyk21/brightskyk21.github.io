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

    // 마커 클릭 이벤트에 openInfoWindow 함수를 연결합니다.
    naver.maps.Event.addListener(marker, 'click', function() {
        openInfoWindow(marker, place);
    });

    naver.maps.Event.addListener(marker, 'touchend', function(e) {
        openInfoWindow(marker, place);
    });

    currentMarkers.push(marker)
}

function openInfoWindow(marker, place) {
    var modal = document.getElementById('restaurantModal');
    var modalContent = modal.querySelector('.modal-content');

    // 먼저 메뉴 헤더를 정의합니다.
    var menuTableHtml = `
        <table class="menu-table">
            <tbody>
                <tr>
                    <th colspan="2"><i class="fas fa-clipboard-list"></i></th>
                </tr>`;

    // 그 다음에 메뉴 항목들을 매핑합니다.
    menuTableHtml += place.menu.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td class="price">${item.price}</td>
                </tr>
            `).join('');

    // 마지막으로 테이블 닫기 태그를 추가합니다.
    menuTableHtml += `
            </tbody>
        </table>`;

    // modalContent의 내부 HTML을 업데이트합니다.
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
    showPlaces(restaurants); // 'restaurants'는 음식점 객체 배열입니다.
});

document.getElementById('showCafes').addEventListener('click', function () {
    showPlaces(cafes); // 'cafes'는 카페 객체 배열입니다.
});

window.onclick = function(event) {
    var modal = document.getElementById('restaurantModal');
    var modalBackground = document.querySelector('.modal-background');

    // 모달 배경을 클릭했을 때만 모달을 닫습니다.
    if (event.target === modalBackground) {
        modal.style.display = "none";
    }
};
