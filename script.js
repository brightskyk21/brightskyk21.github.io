var mapOptions = {
    center: new naver.maps.LatLng(37.628156, 127.077821),
    zoom: 17
};

var map = new naver.maps.Map('map', mapOptions);

var markerOptions = {
    position: new naver.maps.LatLng(37.62818181364887, 127.07777691170485),
    map: map
};

var marker = new naver.maps.Marker(markerOptions);
