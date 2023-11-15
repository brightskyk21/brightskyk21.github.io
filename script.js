var mapOptions = {
    center: new naver.maps.LatLng(37.629835024085, 127.07629504),
    zoom: 17
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: new naver.maps.LatLng(37.6282158, 127.0777373),
    map: map
};

var marker = new naver.maps.Marker(markerOptions);
