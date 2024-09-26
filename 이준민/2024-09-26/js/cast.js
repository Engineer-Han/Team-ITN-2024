function addBulletPoint() {
    const textarea = document.getElementById('movieCast');
    const lines = textarea.value.split('\n');

    // 각 줄 앞에 • 추가
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() && !lines[i].startsWith('•')) {
            lines[i] = '• ' + lines[i].trim();
        }
    }

    textarea.value = lines.join('\n');
}
