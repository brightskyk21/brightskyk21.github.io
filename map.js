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
            { 위도: 37.511568, 경도: 127.131453, id: 0 },
            { 위도: 37.473522, 경도: 127.139523, id: 1 },
            { 위도: 37.505529, 경도: 127.090633, id: 2 },
            { 위도: 37.487805, 경도: 127.125935, id: 3 },
            { 위도: 37.490672, 경도: 127.153131, id: 4 },
            { 위도: 37.528084, 경도: 127.124043, id: 5 },
            { 위도: 37.506741, 경도: 127.109729, id: 6 }
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
