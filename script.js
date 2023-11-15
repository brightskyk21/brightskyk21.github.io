var mapOptions = {
    center: new naver.maps.LatLng(37.629835024085, 127.07629504),
    zoom: 17
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: new naver.maps.LatLng(37.628181, 127.077827),
    map: map
};

var marker = new naver.maps.Marker(markerOptions);
