// 장르 추가 기능
document.getElementById('addGenre').addEventListener('click', function() {
    const genreSelect = document.getElementById('genre');
    const selectedGenre = genreSelect.value;
    const selectedGenresContainer = document.getElementById('selectedGenres');

    if (selectedGenre !== '장르 선택') {
        // 이미 추가된 장르인지 확인
        if (![...selectedGenresContainer.children].some(div => div.textContent === selectedGenre)) {
            const genreDiv = document.createElement('div');
            genreDiv.className = 'badge bg-light text-dark me-2 mb-2'; // 흰색 배경으로 변경
            genreDiv.textContent = selectedGenre;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'btn-close btn-close-dark ms-2'; // 아이콘 색상 변경
            removeBtn.onclick = function() {
                selectedGenresContainer.removeChild(genreDiv);
            };

            genreDiv.appendChild(removeBtn);
            selectedGenresContainer.appendChild(genreDiv);
        }
        genreSelect.value = '장르 선택'; // 선택 초기화
    }
});

function resetForm() {
    document.getElementById('movieForm').reset(); // 폼 초기화
    const selectedGenresContainer = document.getElementById('selectedGenres');
    selectedGenresContainer.innerHTML = ''; // 선택된 장르 초기화
}
