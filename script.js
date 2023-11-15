var mapOptions = {
    center: new naver.maps.LatLng(37.629835024085, 127.07629504),
    zoom: 17
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: new naver.maps.LatLng(37.62818181364887, 127.07777691170485),
    map: map
};

var marker = new naver.maps.Marker(markerOptions);
