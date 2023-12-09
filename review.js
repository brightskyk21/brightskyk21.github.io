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

window.onload = async function () {
  const reviewForm = document.getElementById('reviewForm');
  const starIcons = document.querySelectorAll('.star-rating i');
  const ratingInput = document.getElementById('rating');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const reviewText = document.getElementById('reviewText');
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get('placeId');


  starIcons.forEach((star, index) => {
    star.addEventListener('click', () => {
      const ratingValue = index + 1;
      ratingInput.value = ratingValue;
      updateStars(ratingValue);
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
    });
  });

  reviewForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const user = auth.currentUser;

    if (user) {
      const rating = ratingInput.value;
      const taste = document.getElementById('goodTaste').checked;
      const mood = document.getElementById('goodMood').checked;
      const value = document.getElementById('goodValue').checked;
      const kindness = document.getElementById('goodService').checked;
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

      await addReview(placeId, reviewData);

      console.log('리뷰가 성공적으로 작성되었습니다.');

    } else {
      console.error('리뷰 작성을 위해서는 로그인이 필요합니다.');
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
  const placeRef = doc(db, 'places', placeId);이름

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
