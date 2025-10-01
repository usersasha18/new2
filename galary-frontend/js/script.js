// переменные DOM элементов
const img_container = document.querySelector('.flex-contaier');
const images_container = img_container.querySelectorAll('.inner-flex-container')
const categoty_buttons = document.querySelectorAll('.category_button')
const modalWindow = document.querySelector('.modal');
const img_arr = [
    {
        id: 1,
        category: "cats",
        url_img: "234182208-0ebdd2ed-8ef8-4060-94e9-a0865cfa5696.jpg",
    },
    {
        id: 2,
        category: 'cats',
        url_img: 'i.webp',
    },
    {
        id: 3,
        category: 'cats',
        url_img: 'maine-coon-pictures-1beyp7otru9dkz38.jpg'
    },
    {
        id: 4,
        category: "cars",
        url_img: '0cc577b511e380800b07d7c81b636cd6.jpg'
    },
    {
        id: 5,
        category: 'cars',
        url_img: '1580x1140.jpg',
    },
    {
        id: 6,
        category: "cars",
        url_img: "34448a36a8447295dbb04361862c14be.jpg",
    },
    {
        id: 7,
        category: "moto",
        url_img: "7402e10f6999fef75e940d23eb9af78a.jpg",
    },
    {
        id: 8,
        category: "moto",
        url_img: "171355574.jpeg",
    },
    {
        id: 9,
        category: "moto",
        url_img: "motocykle.webp",
    },

]

categoty_buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        let selectedCategory = button.dataset.category;
        if(selectedCategory == "clear" || !selectedCategory) {
            templateRender(img_arr)
        }
        else {
            const filteredImages = img_arr.filter(img => img.category === selectedCategory)
            templateRender(filteredImages)
        }
    })
});

function templateRender(arr) {
    img_container.innerHTML = ``;
    arr.forEach(images => {
        img_container.innerHTML += `
            <div class="inner-flex-container">
                <img src="./images/${images.url_img}" data-category="${images.category}"">
            </div>
        `
    });
}
templateRender(img_arr)

img_container.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        renderModalWindow(e.target);
    }
});


function renderModalWindow(img) {
    const modal = document.querySelector('.modal');
    const close = document.querySelector('#modalClose');
    let modalImage = document.querySelector('#modalImage')
    
    modal.style.display = "flex";
    modalImage.src = img.src 
    

    close.addEventListener('click', () => {
        modal.style.display = "none";
    })
}

// визуальное выделение активной категории кнопок.