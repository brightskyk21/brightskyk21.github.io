var mapOptions = {
    center: new naver.maps.LatLng(37.629835024085, 127.07629504),
    zoom: 15
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: new naver.maps.LatLng(37.628105809069, 127.07784697699),
    map: map
};

var marker = new naver.maps.Marker(markerOptions);
