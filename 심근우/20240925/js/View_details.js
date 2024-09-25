document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const reviewText = document.getElementById('review').value;

    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card p-3 mb-3 border';
    reviewCard.innerHTML = `
        <p class="card-text">작성자: ${username}</p>
        <p class="card-text">관람평: ${reviewText}</p>
        <div class="d-flex justify-content-end">
            <button class="btn btn-secondary btn-sm me-2 edit-review">수정</button>
            <button class="btn btn-dark btn-sm delete-review">삭제</button>
        </div>
    `;
    document.getElementById('reviews').appendChild(reviewCard);
    document.getElementById('reviewForm').reset();
});

document.getElementById('reviews').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-review')) {
        const reviewCard = event.target.closest('.review-card');
        reviewCard.remove();
    }

    if (event.target.classList.contains('edit-review')) {
        const reviewCard = event.target.closest('.review-card');
        const reviewTexts = reviewCard.querySelectorAll('.card-text');
        const username = reviewTexts[0].textContent.split(': ')[1]; // 작성자
        const reviewText = reviewTexts[1].textContent.split(': ')[1]; // 관람평

        document.getElementById('username').value = username;
        document.getElementById('review').value = reviewText;

        reviewCard.remove();
    }
});