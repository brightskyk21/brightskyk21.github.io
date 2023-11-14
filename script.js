var map = L.map('map').setView([37.53142, 126.9854], 12); // 중심좌표

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// 예시 음식점 데이터
var restaurants = [
    {
        name: "다운타우너",
        lat: 37.52402,
        lon: 127.0385,
        image: "downtowner",
        website: "https://downtowner.co.kr/about",
        phone: "070-8833-3696",
        reviews: [
            "https://blog.naver.com/elixir0827/221269713183",
            "https://manzzin.tistory.com/143",
            "https://blog.naver.com/dnjswjd1113/223252105593"
        ]
    },

    {
        name: "블루보틀",
        lat: 37.525162243739,
        lon: 127.02871445023,
        image: "bluebottle",
        website: "https://www.bluebottlecoffeekorea.com/",
        phone: "1533-6906",
        reviews: [
            "https://blog.naver.com/gamejaki/223196072403",
            "https://dailybriley.tistory.com/246",
            "https://blog.naver.com/kem8732/223193941099"
        ]
    }
    // ... 다른 음식점 데이터 추가 ...
];

let popupIndex = 0;

restaurants.forEach(function(restaurant) {
    var marker = L.marker([restaurant.lat, restaurant.lon]).addTo(map);
    popupIndex++;

    var popupContent = `
    <img src="${imageUrls[restaurant.image]}" alt="${restaurant.name}" width="300" style="display: block; margin: 0 auto;">
    <div style="text-align: center; margin-top: 5px; font-size: 20px">
        <strong>${restaurant.name}</strong>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 15px;">
        <a href="${restaurant.website}" target="_blank" style="margin-right: 10px;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvZhqEjmRTNbuGogcC0vzldd0_xGFYL_YZg&usqp=CAU" width="30">
        </a>
        <a href="tel:${restaurant.phone}" style="margin-right: 10px;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfuvA17sabvpGQnMbbqowEccEX_hB88DjUQ&usqp=CAU" alt="Phone Icon" width="30">
        </a>
        <div id="reviewIcon${popupIndex}" style="cursor: pointer;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISFRgmOAFPTt_Pi8S3aYUNRlk2YQ3_FgjAQ&usqp=CAU" alt="Review Icon" width="30">
        </div>
    </div>
    <div id="reviewPopup${popupIndex}" style="display: none; border: 1px solid #ddd; padding: 10px;">
        <ul style="padding-left: 0; list-style-position: inside;">
        ${restaurant.reviews.map(review => `<li style="text-align: left;"><a href="${review}" target="_blank" style="text-align: left;">${review}</a></li>`).join('')}
        </ul>
    </div>
`;


    marker.bindPopup(popupContent);
});


map.on('popupopen', function(e) {
    for (let i = 1; i <= popupIndex; i++) {
        let reviewIcon = document.getElementById(`reviewIcon${i}`);
        let reviewPopup = document.getElementById(`reviewPopup${i}`);
        
        if (reviewIcon) {
            reviewIcon.addEventListener('click', function() {
                if (reviewPopup.style.display === 'none') {
                    reviewPopup.style.display = 'block';
                } else {
                    reviewPopup.style.display = 'none';
                }
            });
        }
    }
});


