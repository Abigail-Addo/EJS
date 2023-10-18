
let user = (new URLSearchParams(window.location.search)).get('username');

if (!user) {
    window.location.href = '/login';
}

window.addEventListener('load', async () => {



    const result = await fetch('http://localhost:2023/api/v1/getMeals');
    const response = await result.json();
    console.log(response);

    const row = document.querySelector('.content');

    let contents = '';
    response.meal.forEach(meal => {
        contents += `
            <div class="col">
            <div class="card shadow-sm d-flex justify-content-center align-items-center" id=${meal.id}>
                <img src="${meal.image}" class="card-img-top w-25 h-25 pt-3" alt="hot deals">
                <div class="card-body py-0">
                    <div class="card-text text-justify">
                    <p class="fw-bold textTruncate d-block para">${meal.name}</p>
                        <p class="price para">&cent; ${meal.price} </p>
                        <p class="text-muted para lastChild">${meal.description}</p>
                        <a href="" class="text-dark">
                            <i class="fa fa-shopping-cart addCart" aria-hidden="true" id=${meal.id}></i> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
        row.innerHTML = contents;
    });

});