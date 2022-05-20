import { products } from "./products.js";


const showProductsGrid = (products) => {
    for (let product of products) {
        let card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `        
                        <div class="card h-100 shadow-sm">
                            <div class="text-center p-3 ">
                                <img src="assets/images/${product.name}.png" class=" img-product" alt="imagem ilustrativa do produto: ${product.name}">
                            </div>
                            <div class="card-body ">
                                <h1 class="h5 card-title">${product.name}</h1>
                                <p class="card-text text-success fw-bold">R$ ${product.price}</p>
                                <div class="text-end">
                                    <a href="https://wa.me/5541988287796" class="btn btn-whatsapp rounded-whatsapp" target="_blank"><i class="bi bi-whatsapp" role="img" aria-label="Contato de Whatsapp"></i></a>
                                </div>                                
                            </div>
                        </div>
                    `;

        document.querySelector("#product-card").appendChild(card);

    }

};

const showCarousel = (products, cardsPerSlide) => {

    let slidesQty = Math.ceil(products.length / cardsPerSlide);

    let carouselIndicators = document.createElement("div");
    carouselIndicators.classList.add("carousel-indicators");

    for (let i = 1; i <= slidesQty; i++) {
        carouselIndicators.innerHTML += `
        <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="${i - 1}" aria-current="true" aria-label="Slide ${i}"></button>
            `
    }

    document.querySelector("#carouselIndicators").appendChild(carouselIndicators);

    let btn = document.querySelector(".carousel-indicators button");
    btn.classList.add("active");


    for (let i = 0; i < products.length; i += cardsPerSlide) {

        let indexCurrentSlide = i;
        let indexNextSlide = i + cardsPerSlide;

        if (indexNextSlide > products.length) {
            indexNextSlide = products.length;
        }

        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        if (indexCurrentSlide == 0) {
            carouselItem.classList.add("active");
        }

        let itemRow = document.createElement("div");
        itemRow.classList.add("row", "justify-content-center", "row-cols-1", "row-cols-sm-2", "row-cols-md-3");


        for (let j = indexCurrentSlide; j >= indexCurrentSlide && j < indexNextSlide; j++) {

            itemRow.innerHTML += `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <div class="text-center p-3 ">
                            <img src="assets/images/${products[j].name}.png" class=" img-product" alt="imagem ilustrativa do produto">
                        </div>
                        <div class="card-body text-center">
                            <h1 class="h5 card-title">${products[j].name}</h1>
                            <p class="card-text text-success fw-bold">R$ ${products[j].price}</p>                                                            
                        </div>
                    </div>
                </div>
                `
        }
        carouselItem.appendChild(itemRow);
        document.querySelector(".carousel-inner").appendChild(carouselItem);

    }

};

(() => {
    if (document.body.clientWidth < 576) {
        showCarousel(products, 1);

    } else if (document.body.clientWidth < 768) {
        showCarousel(products, 2);

    } else {
        showCarousel(products, 3);
    }

    showProductsGrid(products);

})();




