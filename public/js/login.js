const btn = document.querySelector('.submit');
btn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('input');
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.classList.add('message');

    if (input.value === "" || input.value === null) {
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
