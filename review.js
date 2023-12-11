import { getFirestore, collection, query, where, getDocs, addDoc, doc, updateDoc, increment, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"
import { get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


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
const database = getDatabase(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const placeId = urlParams.get('placeId');
  const placesName = placesData[placeId];
  const h1Element = document.getElementById('placesName');
  if (placesName) {
    h1Element.textContent = placesName;
  }

  const toggleButton = document.getElementById('toggleReviewFormButton');
  const reviewFormContainer = document.getElementById('reviewFormContainer');

  toggleButton.addEventListener('click', function () {
    if (reviewFormContainer.classList.contains('hidden')) {
      reviewFormContainer.style.bottom = '0';
      reviewFormContainer.classList.remove('hidden');
    } else {
      reviewFormContainer.style.bottom = '-100%';
      reviewFormContainer.classList.add('hidden');
    }
  });
});;

function renderRatingStars(rating) {
  const maxRating = 5;
  let starsHTML = '';

  for (let i = 1; i <= maxRating; i++) {
    const starClass = i <= rating ? 'fa-solid fa-star red-stars' : 'fa-regular fa-star';
    starsHTML += `<i class="${starClass}" data-rating="${i}"></i>`;
  }

  return starsHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  const starsElement = document.getElementById('stars');
  const ratingInput = document.getElementById('rating');

  if (starsElement) {
    starsElement.addEventListener('click', (event) => {
      if (event.target.tagName === 'I') {
        const selectedRating = parseInt(event.target.getAttribute('data-rating'));
        ratingInput.value = selectedRating;

        starsElement.innerHTML = renderRatingStars(selectedRating);
      }
    });

    const initialRating = 0;
    starsElement.innerHTML = renderRatingStars(initialRating);
  }
});

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
        ratingInput.value = newValue; 
      } else {
        button.classList.add('selected');
        const ratingValue = button.textContent;
        const currentRating = ratingInput.value;
        const newValue = `${currentRating} ${ratingValue}`.trim();
        ratingInput.value = newValue; 
      }
    });
  });

  starIcons.forEach((star, index) => {
    star.addEventListener('click', () => {
      const ratingValue = index + 1; 
      const minValue = 1; 
      ratingInput.value = Math.max(minValue, ratingValue); 
      updateStars(ratingInput.value); 
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
        location.reload(); 
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

        for (const doc of querySnapshot.docs) {
          const reviewData = doc.data();
          const rating = parseFloat(reviewData.rating);
          const userId = reviewData.userId;

          const userRef = ref(database, 'users/' + userId);
          const userSnapshot = await get(userRef); 

          if (userSnapshot.exists()) {
            const userData = userSnapshot.val();
            const userNickname = userData.nickname;

            const starsHTML = renderRatingStars(rating);

            const createdAt = reviewData.createdAt.toDate();
            const formattedDate = createdAt.toLocaleDateString('ko-KR');
            const formattedTime = createdAt.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review-item');

            reviewElement.style.display = 'flex';
            reviewElement.style.justifyContent = 'space-between';
            reviewElement.style.alignItems = 'center';

            const starsParagraph = document.createElement('p');
            starsParagraph.innerHTML = starsHTML;

            const nicknameAndDate = document.createElement('p');
            nicknameAndDate.innerHTML = `<strong><span style="margin-right: 10px;">${userNickname}</span><span class="date-text">${formattedDate}</span></strong>`;

            const textBubble = document.createElement('div');
            textBubble.classList.add('bubble');
            textBubble.textContent = reviewData.reviewText;

            const reviewContentContainer = document.createElement('div');
            reviewContentContainer.classList.add('review-content');

            reviewContentContainer.appendChild(starsParagraph);
            reviewContentContainer.appendChild(nicknameAndDate);
            reviewContentContainer.appendChild(textBubble);

            const deleteButtonContainer = document.createElement('div');
            deleteButtonContainer.classList.add('delete-button-container');

            if (user.uid === reviewData.userId) {
              const deleteButton = document.createElement('button');
              deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
              deleteButton.classList.add('delete-button');
              deleteButton.onclick = function() {
                deleteReview(placeId, doc.id);
              };

              deleteButtonContainer.appendChild(deleteButton);
            }

            reviewElement.style.display = 'flex';
            reviewElement.style.justifyContent = 'space-between';
            reviewElement.style.alignItems = 'flex-start';

            reviewElement.appendChild(reviewContentContainer);
            reviewElement.appendChild(deleteButtonContainer);

            reviewsContainer.appendChild(reviewElement);

            totalRating += rating;
            reviewCount++;
          }
        }

        if (reviewCount > 0) {
          const averageRating = totalRating / reviewCount;
          const averageRatingElement = document.getElementById('averageRating');
          if (averageRatingElement) {
            averageRatingElement.textContent = `${averageRating.toFixed(2)} (${reviewCount})`;
          } else {
            console.error('평균 별점을 표시할 엘리먼트가 존재하지 않습니다.');
          }
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
  reviewData.createdAt = new Date();

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
      star.classList.add('fa-solid');
      star.classList.remove('fa-regular');
    } else {
      star.classList.remove('fa-solid');
      star.classList.add('fa-regular');
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

async function deleteReview(placeId, reviewId) {
  if (!confirm('리뷰를 삭제하시겠습니까?')) {
    return;
  }

  try {
    const reviewRef = doc(db, 'places', placeId, 'reviews', reviewId);
    await deleteDoc(reviewRef);
    alert('리뷰가 삭제되었습니다.');
    location.reload();
  } catch (error) {
    console.error('리뷰 삭제 중 오류 발생:', error);
    alert('리뷰를 삭제할 수 없습니다.');
  }
}
