const btn = document.querySelector('.submit');
btn.addEventListener('click', (e) => {
    e.preventDefault();

    const username = document.querySelector('.username');
    const password = document.querySelector('.password');
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.classList.add('message');

    if (username.value === "" || username.value === null || password.value === "" || password.value === null) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Please fill all fields";
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 1500);
        return;
    }
    let url = '/home?username=Abigail';

    window.location.href = url;

});
