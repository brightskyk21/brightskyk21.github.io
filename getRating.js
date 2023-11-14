const axios = require('axios');
const cheerio = require('cheerio');

// 식당의 정보를 가져오는 함수
async function fetchRestaurantRating(url) {
  try {
    // HTTP 요청을 통해 HTML을 가져옵니다.
    const response = await axios.get(url);
    const html = response.data;

    // cheerio를 사용하여 HTML을 로드합니다.
    const $ = cheerio.load(html);

    // 별점과 리뷰 개수를 추출합니다.
    const rating = $('em').first().text().trim();
    const reviewCountText = $('.m7jAR').last().text();
    const reviewCountMatch = reviewCountText.match(/(\d+[,.\d]*)개 평점/);
    const reviewCount = reviewCountMatch ? reviewCountMatch[1].replace(/,/g, '') : null;

    // 결과를 객체로 반환합니다.
    return {
      rating,
      reviewCount
    };
  } catch (error) {
    console.error(`Error fetching restaurant rating: ${error}`);
    return null;
  }
}

// 예시 URL
const exampleUrl = 'https://map.naver.com/p/entry/place/887123043?lng=127.03849764356836&lat=37.5240289117912&placePath=%2Fhome&entry=plt&c=15.00,0,0,0,dh';

// 함수를 실행하여 결과를 확인합니다.
fetchRestaurantRating(exampleUrl).then((data) => {
  console.log(data);
});
