// 테마 적용
const themeCheckbox = document.getElementById('theme-checkbox');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeCheckbox.checked = true;
}
themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

// Formspree AJAX 제출
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = '전송 중...';

    const data = new FormData(form);

    try {
        const res = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
            form.style.display = 'none';
            successMsg.style.display = 'block';
        } else {
            alert('전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
            submitBtn.disabled = false;
            submitBtn.textContent = '문의 보내기';
        }
    } catch {
        alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        submitBtn.disabled = false;
        submitBtn.textContent = '문의 보내기';
    }
});
