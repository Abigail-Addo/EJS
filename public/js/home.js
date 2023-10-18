
let user = (new URLSearchParams(window.location.search)).get('username');

if (!user) {
    window.location.href = '/login';
}
