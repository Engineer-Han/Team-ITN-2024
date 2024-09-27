// 입력값이 변경될 때마다 자동으로 계산하도록 이벤트 리스너 추가
document.getElementById('releaseHour').addEventListener('input', calculateTotalTime);
document.getElementById('releaseMinute').addEventListener('input', calculateTotalTime);
document.getElementById('endHour').addEventListener('input', calculateTotalTime);
document.getElementById('endMinute').addEventListener('input', calculateTotalTime);

function calculateTotalTime() {
    const startHour = parseInt(document.getElementById('releaseHour').value, 10);
    const startMinute = parseInt(document.getElementById('releaseMinute').value, 10);
    const endHour = parseInt(document.getElementById('endHour').value, 10);
    const endMinute = parseInt(document.getElementById('endMinute').value, 10);

    if (isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute)) {
        document.getElementById('totalTimeDisplay').innerText = "모든 시간을 입력해주세요.";
        return;
    }

    // 총 분으로 변환
    const totalStartMinutes = startHour * 60 + startMinute;
    const totalEndMinutes = endHour * 60 + endMinute;

    // 총 상영 시간 계산
    const totalTime = totalEndMinutes - totalStartMinutes;

    // 결과 표시
    const totalTimeDisplay = document.getElementById('totalTimeDisplay');
    if (totalTime < 0) {
        totalTimeDisplay.innerText = "종영 시간이 상영 시작 시간보다 빨라야 합니다.";
    } else {
        totalTimeDisplay.innerText = `총 상영 시간: ${totalTime}분`;
    }
}
