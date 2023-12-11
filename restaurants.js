var restaurants = [
    {
        id: "restaurant1",
        name: "쪼매매운떡볶이",
        phone: "02-977-1120",
        position: new naver.maps.LatLng(37.628183, 127.077828),
        menu: [
            { name: "떡볶이", price: "4,000원" },
            { name: "튀김(3개)", price: "2,000원" },
            { name: "순대", price: "4,000원" },
            { name: "쪼매김밥", price: "1,500원" }
        ]
    },
    {
        id: "restaurant2",
        name: "바우네수제왕돈까스",
        phone: "02-973-9431",
        position: new naver.maps.LatLng(37.630460, 127.075853),
        menu: [
            { name: "돈까스", price: "7,500원" },
            { name: "면류", price: "7,000원" },
            { name: "밥류", price: "7,000원" },
            { name: "모둠돈까스", price: "9,000원" }
        ]
    },
    {
        id: "restaurant3",
        name: "핏짜굽는언니 공릉점",
        phone: "02-979-0234",
        position: new naver.maps.LatLng(37.629482, 127.074760),
        menu: [
            { name: "마르게리따 핏짜", price: "13,000원" },
            { name: "루꼴라 카나디안", price: "19,000원" },
            { name: "언니 샐러드", price: "14,000원" },
            { name: "해산물 리조또", price: "14,000원" }
        ]
    },
    {
        id: "restaurant4",
        name: "더맛나곱창",
        phone: "02-948-5453",
        position: new naver.maps.LatLng(37.629100, 127.073579),
        menu: [
            { name: "야채곱창볶음", price: "8,000원" },
            { name: "야채순대볶음", price: "8,000원" },
            { name: "곱창+순대볶음(중)", price: "10,000원" },
        ]
    },
    {
        id: "restaurant5",
        name: "마인하우스",
        phone: "010-9988-7590",
        position: new naver.maps.LatLng(37.630217, 127.075983),
        menu: [
            { name: "치즈 닭 데리야끼", price: "5,500원" },
            { name: "돼지 데리야끼", price: "5,000원" },
            { name: "오리 데리야끼(반마리)", price: "16,000원" },
        ]
    },
    {
        id: "restaurant6",
        name: "샹츠마라",
        phone: "0507-1383-8288",
        position: new naver.maps.LatLng(37.629611, 127.076026),
        menu: [
            { name: "샹츠마라샹궈", price: "15,000원" },
            { name: "샹츠마라탕", price: "8,000원" },
            { name: "꿔바로우", price: "11,000원" },
            { name: "볶음밥", price: "7,000원" }
        ]
    },
    {
        id: "restaurant7",
        name: "찬이네곱창",
        phone: "02-974-3121",
        position: new naver.maps.LatLng(37.628754, 127.076861),
        menu: [
            { name: "야채곱창", price: "11,000원" },
            { name: "알곱창", price: "12,000원" },
            { name: "치즈곱창", price: "13,000원" },
            { name: "양념막창", price: "16,000원" }
        ]
    },
    {
        id: "restaurant8",
        name: "세겹먹는날",
        phone: "02-972-8322",
        position: new naver.maps.LatLng(37.628949, 127.076755),
        menu: [
            { name: "세집삼겹살(180g)", price: "9,900원" },
            { name: "벌집삽결살(180g)", price: "9,900원" },
            { name: "소차돌박이(180g)", price: "15,000원" },
            { name: "소갈비살(180g)", price: "17,000원" }
        ]
    },
    {
        id: "restaurant9",
        name: "아리랑핫도그 과학기술대점",
        phone: "02-971-7090",
        position: new naver.maps.LatLng(37.628695, 127.077142),
        menu: [
            { name: "아리랑핫도그", price: "1,500원" },
            { name: "모짜렐라핫도그", price: "2,500원" },
            { name: "쌀떡꼬치", price: "2,000원" },
            { name: "회오리감자", price: "3,500원" }
        ]
    },
    {
        id: "restaurant10",
        name: "소문날라",
        phone: "02-974-5252",
        position: new naver.maps.LatLng(37.6282993079139, 127.077315687829),
        menu: [
            { name: "제육볶음", price: "8,000원" },
            { name: "동태찌개", price: "9,000원" },
            { name: "부대찌개", price: "8,000원" },
            { name: "김치찌개", price: "7,000원" }
        ]
    },
    {
        id: "restaurant11",
        name: "기린",
        phone: "0507-1319-2708",
        position: new naver.maps.LatLng(37.628091, 127.077527),
        menu: [
            { name: "돈코츠라멘", price: "6,900원" },
            { name: "카라구치라멘", price: "6,900원" },
            { name: "사케동", price: "10,000원" },
            { name: "차슈동", price: "7,500원" }
        ]
    },
    {
        id: "restaurant12",
        name: "이정림수제햄부대찌개",
        phone: "0507-1339-3804",
        position: new naver.maps.LatLng(37.627964, 127.077591),
        menu: [
            { name: "부대찌개", price: "8,000원" },
            { name: "부대볶음", price: "8,000원" },
            { name: "부대볶찌", price: "9,000원" },
            { name: "김치찌개", price: "8,000원" }
        ]
    },
    {
        id: "restaurant13",
        name: "로지스시",
        phone: "02-972-4003",
        position: new naver.maps.LatLng(37.627675, 127.077612),
        menu: [
            { name: "오마카세(12p)", price: "20,000원" },
            { name: "모둠초밥", price: "17,000원" },
            { name: "찌라시스시(8p)", price: "16,000원" },
            { name: "연어", price: "3,500원" }
        ]
    },
    {
        id: "restaurant14",
        name: "네코정",
        phone: "070-4110-5224",
        position: new naver.maps.LatLng(37.6274166134936, 127.07689914049),
        menu: [
            { name: "스테이크동", price: "18,500원" },
            { name: "사케동", price: "14,500원" },
            { name: "텐동", price: "11,000원" },
            { name: "가츠동", price: "10,500원" }
        ]
    },
    {
        id: "restaurant15",
        name: "열화철판",
        phone: "02-6013-5892",
        position: new naver.maps.LatLng(37.627399, 127.077764),
        menu: [
            { name: "철판오돌뼈볶음", price: "18,000원" },
            { name: "철판제육볶음", price: "19,000원" },
            { name: "철판직화무뼈닭발", price: "16,000원" },
            { name: "철판야채순대볶음", price: "10,900원" }
        ]
    },
    {
        id: "restaurant16",
        name: "무봉리토종순대국 공릉점",
        phone: "02-977-7396",
        position: new naver.maps.LatLng(37.627112, 127.076326),
        menu: [
            { name: "토종순대국", price: "9,000원" },
            { name: "모둠순대", price: "18,000원" },
            { name: "머리고기수욕", price: "20,000원" },
            { name: "야채곱창순대볶음(소)", price: "27,000원" }
        ]
    },
    {
        id: "restaurant17",
        name: "왕짜장",
        phone: "02-972-9822",
        position: new naver.maps.LatLng(37.627419, 127.078213),
        menu: [
            { name: "콩짜장", price: "5,500원" },
            { name: "간짜장", price: "6,500원" },
            { name: "짬뽕", price: "6,500원" },
            { name: "탕수육(소)", price: "17,000원" }
        ]
    },
    {
        id: "restaurant18",
        name: "스시쟁이",
        phone: "02-972-5944",
        position: new naver.maps.LatLng(37.627179, 127.078450),
        menu: [
            { name: "오늘의초밥(10p)", price: "12,000원" },
            { name: "연어초밥(18p)", price: "18,000원" },
            { name: "광어초밥(18p)", price: "18,000원" },
            { name: "회덮밥", price: "10,000원" }
        ]
    },
    {
        id: "restaurant19",
        name: "원조강영숙봉평메밀촌 본점",
        phone: "02-971-6953",
        position: new naver.maps.LatLng(37.626898, 127.078686),
        menu: [
            { name: "물막국수", price: "9,000원" },
            { name: "비빔막국수", price: "9,000원" },
            { name: "한방수육", price: "25,000원" },
            { name: "메밀전병", price: "8,000원" }
        ]
    },
    {
        id: "restaurant20",
        name: "공릉순두부",
        phone: "070-8151-8229",
        position: new naver.maps.LatLng(37.6270452076453, 127.079108885797),
        menu: [
            { name: "순두부", price: "7,000원" },
            { name: "해물순두부", price: "7,000원" },
            { name: "치즈순두부", price: "7,000원" },
            { name: "우삼겹순두부", price: "7,000원" }
        ]
    },
    {
        id: "restaurant21",
        name: "지호한방삼계탕 공릉점",
        phone: "02-948-2300",
        position: new naver.maps.LatLng(37.626076, 127.079888),
        menu: [
            { name: "건강한방삼계탕", price: "17,000원" },
            { name: "얼큰한방삼계탕", price: "18,000원" },
            { name: "옻한방삼계탕", price: "19,000원" },
            { name: "헛개한방삼계탕", price: "19,000원" }
        ]
    },
    {
        id: "restaurant22",
        name: "로지다이닝키친",
        phone: "02-974-0100",
        position: new naver.maps.LatLng(37.626151, 127.078600),
        menu: [
            { name: "호르몬덮밥", price: "11,500원" },
            { name: "일본식회덮밥", price: "10,000원" },
            { name: "연어회덮밥", price: "9,500원" },
            { name: "명란날치알크림파스타", price: "9,500원" }
        ]
    },
    {
        id: "restaurant23",
        name: "등촌샤브칼국수 공릉점",
        phone: "02-949-1170",
        position: new naver.maps.LatLng(37.625828, 127.079695),
        menu: [
            { name: "얼큰버섯칼국수", price: "10,000원" },
            { name: "맑은버섯칼국수", price: "10,000원" },
            { name: "샤브소고기(200g)", price: "10,000원" },
            { name: "1인분 주문시", price: "11,000원" }
        ]
    },
    {
        id: "restaurant24",
        name: "알러이",
        phone: "02-977-3011",
        position: new naver.maps.LatLng(37.626007, 127.0787069),
        menu: [
            { name: "사천포크", price: "15,800원" },
            { name: "스파이시 포크", price: "15,800원" },
            { name: "소이소스 포크", price: "15,800원" },
            { name: "상하이 완탕롤", price: "8,900원" }
        ]
    },
    {
        id: "restaurant25",
        name: "일상다반",
        phone: "02-971-0666",
        position: new naver.maps.LatLng(37.626160, 127.076883),
        menu: [
            { name: "가츠동", price: "11,000원" },
            { name: "에비동", price: "11,000원" },
            { name: "튀김우동", price: "10,000원" },
            { name: "연어덮밥", price: "14,000원" }
        ]
    },
    {
        id: "restaurant26",
        name: "원조이모네연탄불곱창",
        phone: "02-973-4658",
        position: new naver.maps.LatLng(37.626570, 127.075661),
        menu: [
            { name: "소금구이(1인분)", price: "18,000원" },
            { name: "소주", price: "5,000원" },
            { name: "맥주", price: "5,000원" },
            { name: "음료수", price: "2,000원" }
        ]
    },
    {
        id: "restaurant27",
        name: "가원양꼬치",
        phone: "070-4133-0539",
        position: new naver.maps.LatLng(37.6265202574678, 127.075589368289),
        menu: [
            { name: "양꼬치(일반)", price: "12,000원" },
            { name: "양꼬치(양념)", price: "12,000원" },
            { name: "양갈비살꼬치", price: "15,000원" },
            { name: "소갈비살꼬치", price: "15,000원" }
        ]
    },
    {
        id: "restaurant28",
        name: "신미방마라탕 공릉점",
        phone: "0507-1428-3346",
        position: new naver.maps.LatLng(37.625889, 127.075381),
        menu: [
            { name: "마라탕", price: "9,900원" },
            { name: "마라향궈", price: "16,000원" },
            { name: "꿔바로우(소)", price: "9,900원" },
            { name: "향라닭날개(소)", price: "9,900원" }
        ]
    },
    {
        id: "restaurant29",
        name: "시작이밤이다",
        phone: "010-7148-3119",
        position: new naver.maps.LatLng(37.625864, 127.074973),
        menu: [
            { name: "크림새우닭", price: "20,000원" },
            { name: "바지락홍합스튜", price: "17,000원" },
            { name: "프리미엄한우육회", price: "24,000원" },
            { name: "버터명란구이", price: "17,000원" }
        ]
    },
    {
        id: "restaurant30",
        name: "아소코",
        phone: "02-6052-1003",
        position: new naver.maps.LatLng(37.624614, 127.076626),
        menu: [
            { name: "하와이안롤카츠", price: "13,000원" },
            { name: "냉우동세트", price: "11,000원" },
            { name: "연어덮밥", price: "13,000원" },
            { name: "항정살덮밥", price: "9,500원" }
        ]
    },
    {
        id: "restaurant31",
        name: "인차이나",
        phone: "02-971-4009",
        position: new naver.maps.LatLng(37.624904, 127.079609),
        menu: [
            { name: "짜장면", price: "6,000원" },
            { name: "짬뽕", price: "7,000원" },
            { name: "탕수육", price: "18,000원" },
            { name: "깐풍기", price: "25,000원" }
        ]
    },
    {
        id: "restaurant32",
        name: "비스트로 무크",
        phone: "070-8111-3257",
        position: new naver.maps.LatLng(37.624461, 127.076089),
        menu: [
            { name: "모듬사시미", price: "40,000원" },
            { name: "가지고기튀김", price: "16,000원" },
            { name: "봉골레술찜", price: "16,000원" },
            { name: "모츠나베", price: "25,000원" }
        ]
    },
    {
        id: "restaurant33",
        name: "오대양횟집",
        phone: "02-979-6936",
        position: new naver.maps.LatLng(37.622737, 127.076261),
        menu: [
            { name: "광어(소)", price: "25,000원" },
            { name: "우럭(소)", price: "35,000원" },
            { name: "놀래미", price: "40,000원" },
            { name: "농어", price: "60,000원" }
        ]
    },
    {
        id: "restaurant34",
        name: "닭한마리 공릉본점",
        phone: "02-972-7459",
        position: new naver.maps.LatLng(37.621250, 127.074716),
        menu: [
            { name: "닭한마리", price: "24,000원" },
            { name: "닭반마리", price: "12,000원" },
            { name: "소주", price: "5,000원" },
            { name: "맥주", price: "5,000원" }
        ]
    },
    {
        id: "restaurant35",
        name: "공도",
        phone: "0507-1435-5890",
        position: new naver.maps.LatLng(37.621132, 127.075403),
        menu: [
            { name: "등심스테이크덮밥", price: "11,000원" },
            { name: "치킨로제파스타", price: "12,000원" },
            { name: "치킨브라운파스타", price: "12,000원" },
            { name: "우삼겹크림파스타", price: "15,000원" }
        ]
    },
    {
        id: "restaurant36",
        name: "에그머니",
        phone: "02-977-2999",
        position: new naver.maps.LatLng(37.6195389066918, 127.075951334662),
        menu: [
            { name: "와사비오믈렛", price: "11,000원" },
            { name: "갈릭오믈렛", price: "12,000원" },
            { name: "명란오믈렛", price: "12,000원" },
            { name: "치즈오믈렛", price: "13,000원" }
        ]
    },
    {
        id: "restaurant37",
        name: "코쿠카츠",
        phone: "02-6014-3225",
        position: new naver.maps.LatLng(37.620451, 127.078171),
        menu: [
            { name: "로스카츠", price: "9,500원" },
            { name: "순살카츠", price: "9,500원" },
            { name: "히레카츠", price: "10,500원" },
            { name: "특로스카츠", price: "11,500원" }
        ]
    },
    {
        id: "restaurant38",
        name: "오늘의파스타",
        phone: "02-977-7764",
        position: new naver.maps.LatLng(37.620655, 127.078364),
        menu: [
            { name: "봉골레파스타", price: "14,000원" },
            { name: "풍기알리오올리오", price: "12,000원" },
            { name: "풍기크림파스타", price: "13,000원" },
            { name: "볼로네제", price: "15,000원" }
        ]
    },
    {
        id: "restaurant39",
        name: "하노이별 공릉점",
        phone: "02-975-7470",
        position: new naver.maps.LatLng(37.622048, 127.078600),
        menu: [
            { name: "양지차돌박이쌀국수", price: "8,500원" },
            { name: "홍두깨쌀국수", price: "9,000원" },
            { name: "해물 팟타이", price: "10,000원" },
            { name: "스프링롤", price: "4,000원" }
        ]
    },
    {
        id: "restaurant40",
        name: "페페그라노",
        phone: "0507-1308-0570",
        position: new naver.maps.LatLng(37.622049, 127.079630),
        menu: [
            { name: "페페그라노", price: "17,500원" },
            { name: "알리오올리오", price: "16,500원" },
            { name: "크림뇨끼", price: "16,500원" },
            { name: "라자냐", price: "18,500원" }
        ]
    },
    {
        id: "restaurant41",
        name: "웨일스",
        phone: "070-4647-0210",
        position: new naver.maps.LatLng(37.622873, 127.078064),
        menu: [
            { name: "통베이컨크림파스타", price: "20,900원" },
            { name: "항정살갈치속젓파스타", price: "20,900원" },
            { name: "로제퐁듀새우", price: "19,900원" },
            { name: "크림짬뽕", price: "22,000원" }
        ]
    },
    {
        id: "restaurant42",
        name: "차차",
        phone: "0507-1343-9959",
        position: new naver.maps.LatLng(37.622958, 127.079223),
        menu: [
            { name: "태국소고기쌀국수", price: "12,000원" },
            { name: "팟타이꿍", price: "14,000원" },
            { name: "팟카파오", price: "14,000원" },
            { name: "뿌팟봉커리", price: "29,000원" }
        ]
    },
    {
        id: "restaurant43",
        name: "주세프명인",
        phone: "02-948-1395",
        position: new naver.maps.LatLng(37.623188, 127.080703),
        menu: [
            { name: "옛날짜장", price: "6,000원" },
            { name: "옛날짬뽕", price: "8,000원" },
            { name: "간짜장", price: "8,000원" },
            { name: "송이잡채밥", price: "9,000원" }
        ]
    },
    {
        id: "restaurant44",
        name: "솔직하다",
        phone: "0507-1388-4898",
        position: new naver.maps.LatLng(37.624284, 127.080059),
        menu: [
            { name: "커리누들", price: "9,900원" },
            { name: "연어덮밥", price: "15,500원" },
            { name: "큐브스테이크덮밥", price: "13,000원" },
            { name: "유부우동", price: "9,000원" }
        ]
    },
    {
        id: "restaurant45",
        name: "퍼스트쿡카츠",
        phone: "0507-1336-4029",
        position: new naver.maps.LatLng(37.624606, 127.079158),
        menu: [
            { name: "경양식돈까스", price: "10,000원" },
            { name: "핫경양식돈까스", price: "10,000원" },
            { name: "더블치즈카츠", price: "11,000원" },
            { name: "마제소바", price: "9,500원" }
        ]
    },
    {
        id: "restaurant46",
        name: "경성초밥",
        phone: "02-978-8864",
        position: new naver.maps.LatLng(37.621012, 127.0782558),
        menu: [
            { name: "모둠초밥(11p)", price: "20,000원" },
            { name: "특초밥(11p)", price: "28,000원" },
            { name: "생연어초밥(10p)", price: "23,000원" },
            { name: "우동", price: "6,000원" }
        ]
    },
    {
        id: "restaurant47",
        name: "스시락2호점",
        phone: "02-6080-0228",
        position: new naver.maps.LatLng(37.623171, 127.079544),
        menu: [
            { name: "모둠초밥(10p)", price: "12,000원" },
            { name: "특모둠초밥(12p)", price: "16,000원" },
            { name: "냉모밀", price: "8,000원" },
            { name: "회덮밥", price: "10,000원" }
        ]
    },
    {
        id: "restaurant48",
        name: "디에트로",
        phone: "0507-1307-9944",
        position: new naver.maps.LatLng(37.623119, 127.076219),
        menu: [
            { name: "갑오징어오일파스타", price: "23,000원" },
            { name: "문어스테이크먹물리조또", price: "29,000원" },
            { name: "양갈비스테이크", price: "41,000원" },
            { name: "뇨끼", price: "22,000원" }
        ]
    },
    {
        id: "restaurant49",
        name: "태릉양꼬치양갈비",
        phone: "0507-1319-4587",
        position: new naver.maps.LatLng(37.620111, 127.078064),
        menu: [
            { name: "원조양꼬치", price: "14,000원" },
            { name: "고급양갈비", price: "28,000원" },
            { name: "매운맛양꼬치", price: "14,000원" },
            { name: "순한맛양꼬치", price: "14,000원" }
        ]
    },
    {
        id: "restaurant50",
        name: "제일콩집",
        phone: "02-972-7016",
        position: new naver.maps.LatLng(37.619551, 127.077592),
        menu: [
            { name: "진콩국수", price: "12,000원" },
            { name: "청국장", price: "12,000원" },
            { name: "순두부", price: "12,000원" },
            { name: "손두부", price: "14,000원" }
        ]
    },
    {
        id: "restaurant51",
        name: "석천숯불갈비",
        phone: "02-976-0258",
        position: new naver.maps.LatLng(37.619576, 127.074738),
        menu: [
            { name: "이동갈비 4대", price: "39,000원" },
            { name: "소갈비살 200g", price: "20,000원" },
            { name: "한방돼지갈비 300g", price: "18,000원" },
            { name: "생삼겹살 200g", price: "16,000원" }
        ]
    },
    {
        id: "restaurant52",
        name: "히딩크의 추억",
        phone: "02-978-9295",
        position: new naver.maps.LatLng(37.623647, 127.073944),
        menu: [
            { name: "국내산 생 삼겹살", price: "17,000원" },
            { name: "얼큰 등심순두부", price: "8,000원" },
            { name: "곱창구이", price: "22,000원" },
            { name: "냉면", price: "10,000원" }
        ]
    }
]
