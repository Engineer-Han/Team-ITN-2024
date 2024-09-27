function updateMovieDetails() {
    const movieSelect = document.getElementById('movieTitleSelect');
    const selectedMovie = movieSelect.value;

    const movieSummary = document.getElementById('movieSummary');
    const movieCast = document.getElementById('movieCast');
    const movieDirector = document.getElementById('movieDirector');
    const ageRatingSelect = document.getElementById('ageRatingSelect');

    // 영화 제목에 따라 정보를 설정
    switch (selectedMovie) {
        case '베테랑2':
            movieSummary.value = "액션과 감동이 어우러진 범죄 액션 영화.";
            movieCast.value = "황정민, 이성민";
            movieDirector.value = "류승완";
            ageRatingSelect.value = "15세"; // 연령 등급 자동 설정
            break;
        case '대도시의 사랑법':
            movieSummary.value = "도시에서 벌어지는 사랑 이야기.";
            movieCast.value = "정일우, 이성경";
            movieDirector.value = "이동욱";
            ageRatingSelect.value = "12세"; // 연령 등급 자동 설정
            break;
        case '조커: 폴리 아 되':
            movieSummary.value = "조커의 또 다른 이야기.";
            movieCast.value = "호아킨 피닉스, 자레드 레토";
            movieDirector.value = "토드 필립스";
            ageRatingSelect.value = "19세"; // 연령 등급 자동 설정
            break;
        case '트랜스포머 one':
            movieSummary.value = "로봇과 인간의 전투를 다룬 SF 액션 영화.";
            movieCast.value = "마크 월버그, 안소니 홉킨스";
            movieDirector.value = "마이클 베이";
            ageRatingSelect.value = "전체 이용가"; // 연령 등급 자동 설정
            break;
        case '룩백':
            movieSummary.value = "과거의 회한을 다룬 드라마.";
            movieCast.value = "정해인, 김고은";
            movieDirector.value = "이병헌";
            ageRatingSelect.value = "12세"; // 연령 등급 자동 설정
            break;
        default:
            movieSummary.value = "";
            movieCast.value = "";
            movieDirector.value = "";
            ageRatingSelect.value = "연령 등급 선택"; // 선택 초기화
            break;
    }
}
