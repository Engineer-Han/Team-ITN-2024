// chart.js
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('visitorChart').getContext('2d');
    const visitorChart = new Chart(ctx, {
        type: 'line', // 그래프 종류
        data: {
            labels: ['일', '월', '화', '수', '목', '금', '토'], // x축 라벨
            datasets: [{
                label: '일일 접속자 수',
                data: [12, 19, 3, 5, 2, 3, 8], // y축 데이터
                borderColor: 'rgba(102, 051, 000, 1)',
                backgroundColor: 'rgba(102, 051, 000, 0.2)',
                borderWidth: 1,
                fill: true // 선 아래 색을 채울지 여부
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('visitorChart2').getContext('2d');
    const visitorChart = new Chart(ctx, {
        type: 'line', // 그래프 종류
        data: {
            labels: ['일', '월', '화', '수', '목', '금', '토'], // x축 라벨
            datasets: [{
                label: '일일 예매 현황',
                data: [300, 200, 700, 500, 300, 900, 1000], // y축 데이터
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: true // 선 아래 색을 채울지 여부
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

