const mainBlock = document.querySelector('.main__body');

async function getData() {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();

    // const tenOnly = data.slice(0, 12);

    data.forEach((product) => {
        const newBlock = document.createElement('div');
        newBlock.classList.add('main__block');
        newBlock.innerHTML = `<div class="main__img-rate">
        <div class="main__img">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="main__rate">
            ${starRate()}
        </div>
    </div>
    <div class="main__info">
        <div class="main__title">
            <h3>${productTitle()}</h3>
        </div>
        <div class="main__description">
            <p>${productDesc()} <span>read more</span></p>
        </div>
        <div class="main__cat">
            <p>Category: <span>${product.category}</span></p>
        </div>
        <div class="main__price">
            <p><span>${product.price}</span> €</p>
        </div>
    </div>
    <div class="main__modal-info hidden">
        <p>${containSlash()}</p>
    </div>`;

        function containSlash() {
            if (product.description.includes('/')) {
                return product.description.replaceAll('/', ' / ');
            } else {
                return product.description;
            }
        }

        function starRate() {
            if (product.rating.rate > 4) {
                return `<img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">`
            } else if (product.rating.rate > 3) {
                return `<img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">`
            } else if (product.rating.rate > 2) {
                return `<img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">`
            } else if (product.rating.rate > 1) {
                return `<img src="yellow.png" alt="rate icon">
                <img src="yellow.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">`
            } else if (product.rating.rate <= 1) {
                return `<img src="yellow.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">
                <img src="grey.png" alt="rate icon">`
            }
        }

        function productTitle() {
            if (product.title.length > 40) {
                return product.title.slice(0, 38) + '...';
            } else {
                return product.title;
            }
        }

        function productDesc() {
            if (product.description.length > 150) {
                return product.description.slice(0, 150);
            } else {
                return product.description;
            }
        }

        mainBlock.append(newBlock);

        const readBtn = document.querySelectorAll('.main__description span');

        readBtn.forEach((e) => {
            e.addEventListener('mouseover', (e) => {
                e.target.closest('.main__block').querySelector('.main__modal-info').classList.remove('hidden');
            });
            e.addEventListener('mouseout', (e) => {
                e.target.closest('.main__block').querySelector('.main__modal-info').classList.add('hidden');
            });
        });
    });
}

getData();


//Sort by category

window.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.innerText == 'Jewelery') {
        const jewBlock = window.document.querySelectorAll('.main__cat p span');
        jewBlock.forEach((e) => {
            if (e.innerText != 'Jewelery') {
                e.closest('.main__block').classList.add('hidden');
            }
        });

        const sortBtns = window.document.querySelectorAll('.cat__block a');
        sortBtns.forEach((e) => {
            if (e.innerText != 'Jewelery') {
                e.closest('.cat__block').classList.add('hidden');
            } else if (e.innerText == 'Jewelery') {
                e.closest('.cat__block').querySelector('.cat__block-close').classList.remove('hidden');
            }
        });

        // e.target.parentElement.children[1].classList.add('hidden');
        // console.log(!e.target.closest('.cat__block').classList.contains('hidden'));
        if (!e.target.closest('.cat__block').classList.contains('hidden')) {
            const catBlock = window.document.querySelectorAll('.cat__block');
            e.target.closest('.cat__block').children[1].addEventListener('click', () => {
                catBlock.forEach((e) => {
                    e.classList.remove('hidden');
                    if (!e.children[1].classList.contains('hidden')) {
                        e.children[1].classList.add('hidden');
                        jewBlock.forEach((e) => {
                            if (e.innerText != 'Jewelery') {
                                e.closest('.main__block').classList.remove('hidden');
                            }
                        });
                    }
                });
            });
        } //removes hidden from "sort by" hidden categories & add hidden to "cancel(red cirlce and white cross) button"

    } else if (e.target.innerText == "Men's Clothing") {
        const jewBlock = window.document.querySelectorAll('.main__cat p span');
        jewBlock.forEach((e) => {
            if (e.innerText != "Men's Clothing") {
                e.closest('.main__block').classList.add('hidden');
            }
        });

        const sortBtns = window.document.querySelectorAll('.cat__block a');
        sortBtns.forEach((e) => {
            if (e.innerText != "Men's Clothing") {
                e.closest('.cat__block').classList.add('hidden');
            } else if (e.innerText == "Men's Clothing") {
                e.closest('.cat__block').querySelector('.cat__block-close').classList.remove('hidden');
            }
        });

        if (!e.target.closest('.cat__block').classList.contains('hidden')) {
            const catBlock = window.document.querySelectorAll('.cat__block');
            e.target.closest('.cat__block').children[1].addEventListener('click', () => {
                catBlock.forEach((e) => {
                    e.classList.remove('hidden');
                    if (!e.children[1].classList.contains('hidden')) {
                        e.children[1].classList.add('hidden');
                        jewBlock.forEach((e) => {
                            if (e.innerText != "Men's Clothing") {
                                e.closest('.main__block').classList.remove('hidden');
                            }
                        });
                    }
                });
            });
        }
    } else if (e.target.innerText == 'Electronics') {
        const jewBlock = window.document.querySelectorAll('.main__cat p span');
        jewBlock.forEach((e) => {
            if (e.innerText != 'Electronics') {
                e.closest('.main__block').classList.add('hidden');
            }
        });

        const sortBtns = window.document.querySelectorAll('.cat__block a');
        sortBtns.forEach((e) => {
            if (e.innerText != 'Electronics') {
                e.closest('.cat__block').classList.add('hidden');
            } else if (e.innerText == 'Electronics') {
                e.closest('.cat__block').querySelector('.cat__block-close').classList.remove('hidden');
            }
        });

        if (!e.target.closest('.cat__block').classList.contains('hidden')) {
            const catBlock = window.document.querySelectorAll('.cat__block');
            e.target.closest('.cat__block').children[1].addEventListener('click', () => {
                catBlock.forEach((e) => {
                    e.classList.remove('hidden');
                    if (!e.children[1].classList.contains('hidden')) {
                        e.children[1].classList.add('hidden');
                        jewBlock.forEach((e) => {
                            if (e.innerText != 'Electronics') {
                                e.closest('.main__block').classList.remove('hidden');
                            }
                        });
                    }
                });
            });
        }
    } else if (e.target.innerText == "Women's Clothing") {
        const jewBlock = window.document.querySelectorAll('.main__cat p span');
        jewBlock.forEach((e) => {
            if (e.innerText != "Women's Clothing") {
                e.closest('.main__block').classList.add('hidden');
            }
        });

        const sortBtns = window.document.querySelectorAll('.cat__block a');
        sortBtns.forEach((e) => {
            if (e.innerText != "Women's Clothing") {
                e.closest('.cat__block').classList.add('hidden');
            } else if (e.innerText == "Women's Clothing") {
                e.closest('.cat__block').querySelector('.cat__block-close').classList.remove('hidden');
            }
        });

        if (!e.target.closest('.cat__block').classList.contains('hidden')) {
            const catBlock = window.document.querySelectorAll('.cat__block');
            e.target.closest('.cat__block').children[1].addEventListener('click', () => {
                catBlock.forEach((e) => {
                    e.classList.remove('hidden');
                    if (!e.children[1].classList.contains('hidden')) {
                        e.children[1].classList.add('hidden');
                        jewBlock.forEach((e) => {
                            if (e.innerText != "Women's Clothing") {
                                e.closest('.main__block').classList.remove('hidden');
                            }
                        });
                    }
                });
            });
        }
    }
    // console.log(e.target);
});

const form = document.querySelector('.form');
const search = document.querySelector('.form input');
const mainBodyInfo = window.document.querySelector('.main__body');

search.addEventListener('input', () => {
    search.value = search.value.replace(/[A-Z]/g, function (match) {
        return match.toLowerCase();
    });
}); //transforms all uppercase to lowercase

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (search.value.length >= 4 && mainBodyInfo.innerText.toLowerCase().includes(search.value)) {
        const mainBlockInfo = window.document.querySelectorAll('.main__block');
        mainBlockInfo.forEach((e) => {
            if (!e.innerText.toLowerCase().includes(search.value)) {
                e.closest('.main__block').classList.add('hidden');
            }
        });
        search.value = '';
    } else if (search.value.length <= 3) {
        search.value = '';
    } else {
        search.value = '';
    }
});