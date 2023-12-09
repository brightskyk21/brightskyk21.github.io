import { getFirestore, collection, query, where, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'; // Firebase Authentication 모듈 추가

// Firebase 초기화 코드
var firebaseConfig = {
    apiKey: "AIzaSyCgd7e4IrvCHBNUmZgdqloO4Ys-ZP2Rz4U",
    authDomain: "gongneungfoodieguide.firebaseapp.com",
    projectId: "gongneungfoodieguide",
    storageBucket: "gongneungfoodieguide.appspot.com",
    messagingSenderId: "980582164185",
    appId: "1:980582164185:web:bab44b5e0689056b81c0c8",
    measurementId: "G-JKFNL5FF3J"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Firestore 참조 설정
const db = getFirestore(app);

// Firebase Authentication 인스턴스 가져오기
const auth = getAuth(app);

// 페이지 로드 후 실행되는 함수
window.onload = async function () {
    // URL에서 placeId 파라미터 추출
    const urlParams = new URLSearchParams(window.location.search);
    const placeId = urlParams.get('placeId');

    // 사용자 로그인 상태 변경 감지
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // 사용자가 로그인한 경우
            try {
                // Firebase Firestore 참조 설정
                const reviewsRef = collection(db, 'reviews');

                // 리뷰 정보 표시
                const reviewsContainer = document.getElementById('reviews');
                const querySnapshot = await getDocs(query(reviewsRef, where('restaurantId', '==', placeId)));
                querySnapshot.forEach((doc) => {
                    const reviewData = doc.data();
                    const reviewElement = document.createElement('div');
                    reviewElement.innerHTML = `
                        <p><strong>별점:</strong> ${reviewData.rating}</p>
                        <p><strong>리뷰 내용:</strong> ${reviewData.text}</p>
                    `;
                    reviewsContainer.appendChild(reviewElement);
                });

                // 리뷰 작성 폼 핸들링
                const reviewForm = document.getElementById('reviewForm');
                reviewForm.addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const reviewText = document.getElementById('reviewText').value;
                    const reviewRating = document.getElementById('reviewRating').value;

                    // Firebase에 리뷰 추가
                    await addDoc(collection(db, 'reviews'), {
                        restaurantId: placeId,
                        text: reviewText,
                        rating: reviewRating,
                        // 추가 정보 (예: 사용자 ID 등)를 여기에 추가할 수 있음
                    });

                    console.log('리뷰가 성공적으로 작성되었습니다.');
                    // 작성 완료 후 필요한 작업 수행
                });
            } catch (error) {
                console.error('오류 발생:', error);
            }
        } else {
            // 사용자가 로그인하지 않은 경우
            console.error('사용자가 로그인하지 않았습니다.');
            // 로그인 페이지로 리다이렉트 또는 사용자에게 로그인 요청 메시지 표시
        }
    });
};
