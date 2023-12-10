import { getFirestore, collection, query, where, getDocs, addDoc, doc, updateDoc, increment } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

var firebaseConfig = {
  apiKey: "AIzaSyCgd7e4IrvCHBNUmZgdqloO4Ys-ZP2Rz4U",
  authDomain: "gongneungfoodieguide.firebaseapp.com",
  projectId: "gongneungfoodieguide",
  storageBucket: "gongneungfoodieguide.appspot.com",
  messagingSenderId: "980582164185",
  appId: "1:980582164185:web:bab44b5e0689056b81c0c8",
  measurementId: "G-JKFNL5FF3J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function() {
  // URL에서 placeId 추출
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get('placeId');

  // placesData 객체를 이용하여 placeId에 해당하는 음식점 이름 가져오기
  const placesName = placesData[placeId];

  // <h1> 엘리먼트에 음식점 이름 설정
  const h1Element = document.getElementById('placesName');
  if (placesName) {
    h1Element.textContent = placesName;
  }
  
  const toggleButton = document.getElementById('toggleReviewFormButton');
  const reviewFormContainer = document.getElementById('reviewFormContainer');

  toggleButton.addEventListener('click', function() {
    if (reviewFormContainer.classList.contains('hidden')) {
      // 숨겨진 폼을 보이게 하고 애니메이션 효과 적용
      reviewFormContainer.style.bottom = '0';
      reviewFormContainer.classList.remove('hidden');
    } else {
      // 보이는 폼을 숨기고 애니메이션 효과 적용
      reviewFormContainer.style.bottom = '-100%';
      reviewFormContainer.classList.add('hidden');
    }
  });
});;



window.onload = async function () {
  const reviewForm = document.getElementById('reviewForm');
  const starIcons = document.querySelectorAll('.star-rating i');
  const ratingInput = document.getElementById('rating');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const reviewText = document.getElementById('reviewText');
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get('placeId');

  const ratingButtons = document.querySelectorAll('.rating-button');

  ratingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        const ratingValue = button.textContent;
        const currentRating = ratingInput.value;
        const newValue = currentRating.replace(ratingValue, '').trim();
        ratingInput.value = newValue; // 선택 해제 시 해당 버튼의 값을 제거
      } else {
        button.classList.add('selected');
        const ratingValue = button.textContent;
        const currentRating = ratingInput.value;
        const newValue = `${currentRating} ${ratingValue}`.trim();
        ratingInput.value = newValue; // 선택 시 해당 버튼의 값을 추가
      }
    });
  });

  starIcons.forEach((star, index) => {
    star.addEventListener('click', () => {
      const ratingValue = index + 1; // 현재 클릭된 별점
      const minValue = 1; // 최소 별점 값
      ratingInput.value = Math.max(minValue, ratingValue); // 최소값과 현재 별점 중 큰 값을 선택
      updateStars(ratingInput.value); // 업데이트된 별점 표시
    });
  });
  
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      // checkbox 상태에 따라 처리할 내용 추가
    });
  });
  
  reviewForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const ratingInput = document.getElementById('rating');
    let rating = parseInt(ratingInput.value) || 0;
  
    if (user) {
      if (rating === 0) {
        alert('별점을 선택해 주세요.');
        return;
      }
      
      const tasteButton = document.querySelector('.rating-button.taste');
      const moodButton = document.querySelector('.rating-button.mood');
      const valueButton = document.querySelector('.rating-button.value');
      const kindnessButton = document.querySelector('.rating-button.kindness');
      
      const taste = tasteButton.classList.contains('selected');
      const mood = moodButton.classList.contains('selected');
      const value = valueButton.classList.contains('selected');
      const kindness = kindnessButton.classList.contains('selected');
      const reviewTextValue = reviewText.value;
  
      const reviewData = {
        userId: user.uid,
        rating: rating,
        taste: taste,
        mood: mood,
        value: value,
        kindness: kindness,
        reviewText: reviewTextValue
      };
  
      try {
        await addReview(placeId, reviewData);
        alert('리뷰가 성공적으로 작성되었습니다.');
        location.reload(); // 페이지 새로고침
      } catch (error) {
        alert('리뷰 작성 중 오류가 발생했습니다. 다시 시도해주세요.');
        console.error(error);
      }
  
    } else {
      alert('리뷰 작성을 위해서는 로그인이 필요합니다.');
    }
  });
  

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const urlParams = new URLSearchParams(window.location.search);
      const placeId = urlParams.get('placeId');

      try {
        const reviewsRef = collection(db, 'places', placeId, 'reviews');
        const reviewsContainer = document.getElementById('reviews');
        const querySnapshot = await getDocs(reviewsRef);

        let totalRating = 0;
        let reviewCount = 0;

        querySnapshot.forEach((doc) => {
          const reviewData = doc.data();
          const rating = parseFloat(reviewData.rating);
          const reviewElement = document.createElement('div');
          reviewElement.innerHTML = `
            <p><strong>별점:</strong> ${rating}</p>
            <p><strong>리뷰 내용:</strong> ${reviewData.reviewText}</p>
          `;
          reviewsContainer.appendChild(reviewElement);

          totalRating += rating;
          reviewCount++;
        });

        if (reviewCount > 0) {
          const averageRating = totalRating / reviewCount;
          const averageRatingElement = document.getElementById('averageRating');
          averageRatingElement.textContent = averageRating.toFixed(1);
        }
      } catch (error) {
        console.error('리뷰 정보를 불러오는 중 오류 발생:', error);
      }
    } else {
      console.error('사용자가 로그인하지 않았습니다.');
    }
  });
}

async function addReview(placeId, reviewData) {
  const placeRef = doc(db, 'places', placeId);
  const reviewsRef = collection(placeRef, 'reviews');

  await addDoc(reviewsRef, reviewData);

  await updateRatingStats(placeId, reviewData.rating);
  await updateCategoryTotals(placeId, reviewData.taste, reviewData.mood, reviewData.value, reviewData.kindness);
}

function updateStars(selectedRating) {
  const starIcons = document.querySelectorAll('.star-rating i');

  starIcons.forEach((star, index) => {
    if (index < selectedRating) {
      star.classList.add('fas');
      star.classList.remove('far');
    } else {
      star.classList.remove('fas');
      star.classList.add('far');
    }
  });
}

async function updateRatingStats(placeId, rating) {
  const placeRef = doc(db, 'places', placeId);

  try {
    await updateDoc(placeRef, {
      totalRatings: increment(1),
      totalRatingSum: increment(rating)
    });
  } catch (error) {
    console.error('별점 통계 업데이트 중 오류 발생:', error);
  }
}

async function updateCategoryTotals(placeId, taste, mood, value, kindness) {
  const placeRef = doc(db, 'places', placeId);

  try {
    await updateDoc(placeRef, {
      totalTaste: increment(taste ? 1 : 0),
      totalMood: increment(mood ? 1 : 0),
      totalValue: increment(value ? 1 : 0),
      totalKindness: increment(kindness ? 1 : 0)
    });
  } catch (error) {
    console.error('항목 합계 업데이트 중 오류 발생:', error);
  }
}
