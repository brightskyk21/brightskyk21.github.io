// 지도 옵션 설정
var mapOptions = {
    center: new naver.maps.LatLng(37.50630188, 127.12139893),
    zoom: 14
};

var map = new naver.maps.Map('map', mapOptions);

var openInfoWindow = null;

var jsonFilePath = 'songpa_station.json';

fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
        data.forEach(station => {
            var marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(station.위도, station.경도),
                map: map
            });

            var infoWindow = new naver.maps.InfoWindow({
                content: `<div style="padding:10px;">${station.대여소명}</div>`
            });

            naver.maps.Event.addListener(marker, 'click', function() {
                if (openInfoWindow) {
                    openInfoWindow.close();
                }

                infoWindow.open(map, marker);
                openInfoWindow = infoWindow;
            });
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));

naver.maps.Event.addListener(map, 'click', function() {
    if (openInfoWindow) {
        openInfoWindow.close();
        openInfoWindow = null;
    }
});
