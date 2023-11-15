function openRestaurantInfo(restaurantData) {
    var modal = document.getElementById('restaurantModal');
    // 예시: 식당 이름과 전화번호 설정
    document.getElementById('restaurantName').innerText = restaurantData.name;
    document.getElementById('restaurantPhone').innerText = restaurantData.phone;

    // 웹사이트가 제공되지 않은 경우 '-'로 표시
    var website = restaurantData.website === '-' ? '#' : restaurantData.website;
    document.getElementById('restaurantWebsite').href = website;

    modal.style.display = "block";

    // 모달의 닫기 버튼
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // 모달 외부 클릭시 닫기
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var mapOptions = {
    center: new naver.maps.LatLng(37.629835024085, 127.07629504),
    zoom: 17
};

var map = new naver.maps.Map('map', mapOptions);

// 식당 데이터 예시
var restaurants = [
    {
        name: "쪼매매운떡볶이",
        phone: "02-977-1120",
        website: "-",
        position: new naver.maps.LatLng(37.628181, 127.077827) // 위치 데이터
    },
    // 여기에 다른 식당 데이터 추가...
];

// 각 식당에 대한 마커 생성
restaurants.forEach(function(restaurant) {
    var markerOptions = {
        position: restaurant.position,
        map: map
    };

    var marker = new naver.maps.Marker(markerOptions);

    // 마커에 식당 데이터 연결
    marker.restaurantData = restaurant;

    // 마커 클릭 이벤트 리스너
    naver.maps.Event.addListener(marker, 'click', function() {
        openRestaurantInfo(marker.restaurantData);
    });
});
