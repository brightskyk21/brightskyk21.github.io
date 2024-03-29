var cafes = [
    {   
        id: "cafe1",
        name: "메트로폴리스",
        phone: "0507-1392-6632",
        position: new naver.maps.LatLng(37.621480, 127.075124),
        menu: [
            { name: "소금빵", price: "변동"},
            { name: "에그타르트", price: "변동"},
            { name: "블랙 폴 카스테라", price: "10,000원"},
            { name: "밀크티", price: "6,500원"}
        ]
    },
    {
        id: "cafe2",
        name: "엔젤로",
        phone: "0507-1303-9392",
        position: new naver.maps.LatLng(37.622338, 127.076604),
        menu: [
            { name: "카이막+소프트바게트+꿀", price: "8,500원"},
            { name: "실같은 페스츄리 쿠나파", price: "6,500원"},
            { name: "발르슈트", price: "4,500원"},
            { name: "발르슈트라뗴", price: "5,000원"}
        ]
    },
    {
        id: "cafe3",
        name: "시프스",
        phone: "0507-1358-1314",
        position: new naver.maps.LatLng(37.626265, 127.076412),
        menu: [
            { name: "솔티드 카라멜 슈페너", price: "5,500원"},
            { name: "밤밤(떠먹는 밤 커피)", price: "6,000원"},
            { name: "수수(떠먹는 옥수수 커피)", price: "6,000원"},
            { name: "시프스 초콜릿 브라우니", price: "7,500원"}
        ]
    },
    {
        id: "cafe4",
        name: "에이프릴사워",
        phone: "0507-1356-2593",
        position: new naver.maps.LatLng(37.625329, 127.076862),
        menu: [
            { name: "에이프릴 선셋티", price: "5,800원"},
            { name: "오션라떼", price: "6,300원"},
            { name: "자두펄그린티", price: "5,800원"},
            { name: "딸기라떼", price: "5,800원"}
        ]
    },
    {   
        id: "cafe5",
        name: "호이폴로이 커피로스터스",
        phone: "010-2613-5782",
        position: new naver.maps.LatLng(37.625262, 127.076519),
        menu: [
            { name: "배치브루커피", price: "3,800원"},
            { name: "카페라떼", price: "4,500원"},
            { name: "핸드드립", price: "5,000 ~ 6,500원"},
            { name: "소금빵", price: "3,000원"}
        ]
    },
    {
        id: "cafe6",
        name: "라라브레드 공릉점",
        phone: "1800-2790",
        position: new naver.maps.LatLng(37.624853, 127.077870),
        menu: [
            { name: "라라 콘파냐", price: "4,000원"},
            { name: "딸기요거트 스무디", price: "6,800원"},
            { name: "허니자몽티", price: "4,500원"},
            { name: "통베이컨 토마토 파스타", price: "15,500원"}
        ]
    },
    {
        id: "cafe7",
        name: "트위그 페스츄리",
        phone: "070-4012-6321",
        position: new naver.maps.LatLng(37.623298, 127.076884),
        menu: [
            { name: "얼그레이", price: "3,300원"},
            { name: "레몬마테", price: "3,300원"},
            { name: "아메리카노", price: "2,800원"},
            { name: "소금빵", price: "2,200원"}
        ]
    },
    {
        id: "cafe8",
        name: "리브인오후",
        phone: "0507-1334-5706",
        position: new naver.maps.LatLng(37.622219, 127.076669),
        menu: [
            { name: "구황작물 치즈 케이크", price: "변동"},
            { name: "피스타치오 보틀", price: "8,800원"},
            { name: "초코피칸 치즈 케이크", price: "8,800원"},
            { name: "깨고구마 치즈 케이크", price: "8,600원"}
        ]
    },
    {
        id: "cafe9",
        name: "던모스",
        phone: "0507-1362-5044",
        position: new naver.maps.LatLng(37.621344, 127.078471),
        menu: [
            { name: "아메리카노", price: "4,000원"},
            { name: "아인슈패너", price: "5,000원"},
            { name: "망고 패션후르츠 에이드", price: "6,000원"},
            { name: "치즈케이크", price: "6,500원"}
        ]
    },
    {
        id: "cafe10",
        name: "올리볼렌",
        phone: "02-6449-8250",
        position: new naver.maps.LatLng(37.6288763669285, 127.076382140937),
        menu: [
            { name: "글레이즈 도넛", price: "2,800원"},
            { name: "우유 크림 도넛", price: "3,800원"},
            { name: "파인콘", price: "3,500원"},
            { name: "베어클라우", price: "3,800원"}
        ]
    },
    {
        id: "cafe11",
        name: "미라쥬양과점",
        phone: "010-2006-9433",
        position: new naver.maps.LatLng(37.624530, 127.077463),
        menu: [
            { name: "마들렌", price: "변동"},
            { name: "휘낭시에", price: "변동"},
            { name: "마카롱", price: "변동"},
            { name: "8구 선물세트", price: "24,000원"}
        ]
    },
    {
        id: "cafe12",
        name: "파운드그레도",
        phone: "02-979-1102",
        position: new naver.maps.LatLng(37.628287, 127.071991),
        menu: [
            { name: "그레도 앙버터", price: "4,200원"},
            { name: "고메버터 프레첼", price: "3,900원"},
            { name: "에그 솔트 타르트", price: "4,600원"},
            { name: "씹히는 블루베리 스무디", price: "5,900원"}
        ]
    },
    {
        id: "cafe13",
        name: "마카모예 브레드바",
        phone: "02-6449-2228",
        position: new naver.maps.LatLng(37.626477, 127.076411),
        menu: [
            { name: "잠봉뵈르샌드위치", price: "8,000원"},
            { name: "대파베이글", price: "6,000원"},
            { name: "초당순두부크림치즈샌드위치", price: "8,000원"},
            { name: "바질와사비김빵", price: "7,000원"}
        ]
    },
    {
        id: "cafe14",
        name: "온고이",
        phone: "0507-1394-2449",
        position: new naver.maps.LatLng(37.625347, 127.077034),
        menu: [
            { name: "딸기우유생크림케이크", price: "변동"},
            { name: "라즈베리쇼콜라", price: "7,500원"},
            { name: "쑥갸또크럼블", price: "7,300원"},
            { name: "딥초코바나나", price: "변동"}
        ]
    },
    {
        id: "cafe15",
        name: "오피셜커피",
        phone: "010-9077-1177",
        position: new naver.maps.LatLng(37.624939, 127.077334),
        menu: [
            { name: "아메리카노", price: "4,800원"},
            { name: "카페라떼", price: "5,500원"},
            { name: "바닐라라떼", price: "6,000원"},
            { name: "아인슈패너", price: "6,000원"}
        ]
    },
    {
        id: "cafe16",
        name: "카페쉔",
        phone: "070-7799-0252",
        position: new naver.maps.LatLng(37.624429, 127.076518),
        menu: [
            { name: "아메리카노", price: "4,000원"},
            { name: "카페라떼", price: "4,500원"},
            { name: "바닐라라떼", price: "5,000원"},
            { name: "모카라떼", price: "5,000원"}
        ]
    },
    {
        id: "cafe17",
        name: "우아즈",
        phone: "0507-1444-8092",
        position: new naver.maps.LatLng(37.624336, 127.077956),
        menu: [
            { name: "타이 홍차 밀크티", price: "5,500원"},
            { name: "우아즈 에이드", price: "6,500원"},
            { name: "아이스크림 인절미 꿀호떡", price: "5,800원"},
            { name: "청귤차", price: "6,000원"}
        ]
    },
    {
        id: "cafe18",
        name: "플랫커피",
        phone: "010-5571-0776",
        position: new naver.maps.LatLng(37.623851, 127.078342),
        menu: [
            { name: "아메리카노", price: "4,500원"},
            { name: "엘라도 라떼", price: "6,000원"},
            { name: "바나나 푸딩", price: "5,700원"},
            { name: "약과 푸딩", price: "6,600원"}
        ]
    },
    {
        id: "cafe19",
        name: "딜리스",
        phone: "010-9108-3576",
        position: new naver.maps.LatLng(37.623792, 127.078664),
        menu: [
            { name: "아메리카노", price: "4,000원"},
            { name: "카페라떼", price: "4,500원"},
            { name: "말차에스프레소라떼", price: "6,500원"},
            { name: "자몽블랙티", price: "6,000원"}
        ]
    },
    {
        id: "cafe20",
        name: "샹드마르스커피 공릉점",
        phone: "02-3296-3655",
        position: new naver.maps.LatLng(37.623392, 127.078107),
        menu: [
            { name: "필터드립", price: "변동"},
            { name: "크림브륄레", price: "5,000원"},
            { name: "생크림 크레이프", price: "7,000원"},
            { name: "블랙포레스트 케이크", price: "6,800원"}
        ]
    },
    {
        id: "cafe21",
        name: "원주율",
        phone: "0507-1475-0415",
        position: new naver.maps.LatLng(37.622180, 127.077791),
        menu: [
            { name: "아메리카노", price: "4,000원"},
            { name: "아인슈페너", price: "5,000원"},
            { name: "베리요거트(블루베리+바나나)", price: "5,800원"},
            { name: "버터바", price: "4,500원"}
        ]
    },
    {
        id: "cafe22",
        name: "mood share",
        phone: "070-8286-6626",
        position: new naver.maps.LatLng(37.621480, 127.077934),
        menu: [
            { name: "아메리카노", price: "4,800원"},
            { name: "카라멜아인슈퍼네", price: "6,000원"},
            { name: "청귤에이드", price: "5,500원"},
            { name: "크림얼그레이", price: "6,000원"}
        ]
    },
    {
        id: "cafe23",
        name: "달콤한순간",
        phone: "02-979-8489",
        position: new naver.maps.LatLng(37.621438, 127.078430),
        menu: [
            { name: "아이스크림 컵(두가지 맛)", price: "4,500원"},
            { name: "아메리카노", price: "3,500원"},
            { name: "카페라떼", price: "4,000원"},
            { name: "젤라또카페라떼", price: "6,000원"}
        ]
    },
    {
        id: "cafe24",
        name: "ddami coffee",
        phone: "070-7793-1201",
        position: new naver.maps.LatLng(37.620732, 127.078471),
        menu: [
            { name: "(아이스)더치아메리카노", price: "4,500원"},
            { name: "(아이스)더치라떼", price: "5,000원"},
            { name: "아인슈페너", price: "5,000원"},
            { name: "초코라떼", price: "5,500원"}
        ]
    },
    {
        id: "cafe25",
        name: "카페에이치",
        phone: "0507-1350-7444",
        position: new naver.maps.LatLng(37.620401, 127.078128),
        menu: [
            { name: "(아이스)아메리카노", price: "4,500원"},
            { name: "(아이스)얼그레이바닐라라떼", price: "5,500원"},
            { name: "가래떡SET", price: "6,000원"},
            { name: "미숫가루", price: "5,000원"}
        ]
    },
    {
        id: "cafe26",
        name: "영스테이",
        phone: "010-5838-0572",
        position: new naver.maps.LatLng(37.620028, 127.077828),
        menu: [
            { name: "와플", price: "3,200원"},
            { name: "크로플", price: "3,200원"},
            { name: "아메리카노", price: "3,200원"},
            { name: "바닐라딸기라떼", price: "4,300원"}
        ]
    },
    {
        id: "cafe27",
        name: "메모아",
        phone: "010-3394-9998",
        position: new naver.maps.LatLng(37.619856, 127.077463),
        menu: [
            { name: "아메리카노", price: "4,500원"},
            { name: "메모아라떼", price: "7,000원"},
            { name: "모카라떼", price: "6,000원"},
            { name: "블랙티자몽에이드", price: "7,000원"}
        ]
    },
    {
        id: "cafe28",
        name: "모퉁이",
        phone: "02-948-5563",
        position: new naver.maps.LatLng(37.618972, 127.077312),
        menu: [
            { name: "아메리카노", price: "3,000원"},
            { name: "더치아메리카노", price: "4,500원"},
            { name: "녹차라떼", price: "4,500원"},
            { name: "초코라떼", price: "4,500원"}
        ]
    },
    {
        id: "cafe29",
        name: "비스킷플로어",
        phone: "010-7709-8610",
        position: new naver.maps.LatLng(37.625073, 127.073751),
        menu: [
            { name: "아메리카노", price: "4,000원"},
            { name: "플랫화이트", price: "4,500원"},
            { name: "바닐라라떼", price: "5,500원"},
            { name: "오렌지에이드", price: "6,000원"}
        ]
    },
    {
        id: "cafe30",
        name: "오누이",
        phone: "0507-1400-1453",
        position: new naver.maps.LatLng(37.624632, 127.072399),
        menu: [
            { name: "수제요거트", price: "6,500원"},
            { name: "수제그릭요거트", price: "7,500원"},
            { name: "복숭아에이드", price: "6,000원"},
            { name: "그릭후르츠산도", price: "7,500원"}
        ]
    },
    {
        id: "cafe31",
        name: "이너모스트",
        phone: "0507-1493-5612",
        position: new naver.maps.LatLng(37.623816, 127.072871),
        menu: [
            { name: "아메리카노", price: "3,500원"},
            { name: "카페라떼", price: "4,500원"},
            { name: "런던바닐라밀크티", price: "5,500원"},
            { name: "쑥라떼", price: "5,500원"}
        ]
    },
    {
        id: "cafe32",
        name: "커피콩",
        phone: "02-977-6164",
        position: new naver.maps.LatLng(37.625917, 127.071175),
        menu: [
            { name: "옛날빙수", price: "11,900원"},
            { name: "녹차빙수", price: "15,900원"},
            { name: "망고빙수", price: "19,900원"},
            { name: "자몽빙수", price: "19,900원"}
        ]
    }
]
