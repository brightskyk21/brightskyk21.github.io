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

        // 클러스터 중심점
        var centroids = [
            { 위도: 37.510195, 경도: 127.094944, id: 0 },
            { 위도: 37.488963, 경도: 127.121022, id: 1 },
            { 위도: 37.518748, 경도: 127.123260, id: 2 },
            { 위도: 37.489792, 경도: 127.144586, id: 3 }
        ];

        centroids.forEach(centroid => {
            var centroidMarker = new naver.maps.Marker({
                position: new naver.maps.LatLng(centroid.위도, centroid.경도),
                map: map,
                icon: {
                    content: `<div style="width:16px; height:16px; background-color:red; border-radius:50%; border: 2px solid black;"></div>`,
                    anchor: new naver.maps.Point(8, 8)
                }
            });

            var centroidInfoWindow = new naver.maps.InfoWindow({
                content: `<div style="padding:10px;">Cluster Center ${centroid.id}</div>`
            });

            naver.maps.Event.addListener(centroidMarker, 'click', function() {
                if (openInfoWindow) {
                    openInfoWindow.close();
                }

                centroidInfoWindow.open(map, centroidMarker);
                openInfoWindow = centroidInfoWindow;
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
