
let user = (new URLSearchParams(window.location.search)).get('username');

if (user != "Abigail") {
    window.location.href = '/login';
}
