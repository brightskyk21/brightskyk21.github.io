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
        website: "http://jjoemae-tteokbokki.com",
        position: new naver.maps.LatLng(37.628181, 127.077827),
        menu: [
            { name: "떡볶이", price: "4,000원"},
            { name: "튀김(3개)", price: "2,000원"}
        ]
    }//,
    // 새로운 식당 데이터 추가
    //{
        //name: "새로운식당",
        //phone: "02-123-4567",
        //website: "http://newrestaurant.com",
        //position: new naver.maps.LatLng(37.630000, 127.076000),
        //menu: [
            //{ name: "김밥", price: "3,000원"},
            //{ name: "라면", price: "2,500원"}
        //]
    //}
    // 추가 식당 데이터...
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

function openRestaurantInfo(restaurantData) {
    // 모달 요소를 찾음
    var modal = document.getElementById('restaurantModal');

    // 팝업 내용을 위한 HTML 문자열 생성
    var modalContentHtml = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="modal-header">
                <h2 id="restaurantName">${restaurantData.name}</h2>
                <p id="restaurantPhone">${restaurantData.phone}</p>
                <a href="${restaurantData.website}" target="_blank">웹사이트</a>
            </div>
            <div class="modal-body">
                <table>
                    <tr>
                        <th>메뉴</th>
                        <th>가격</th>
                    </tr>
                    ${restaurantData.menu.map(function(item) {
                        return `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.price}</td>
                            </tr>
                        `;
                    }).join('')}
                </table>
            </div>
        </div>
    `;

    // 모달 내용을 업데이트
    modal.innerHTML = modalContentHtml;

    // 모달을 표시
    modal.style.display = "block";

    // 닫기 버튼 핸들러 설정
    modal.querySelector(".close").onclick = function() {
        modal.style.display = "none";
    };

    // 모달 외부 클릭시 닫기 핸들러 설정
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
