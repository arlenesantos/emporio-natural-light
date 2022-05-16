import { products } from "./products.js";


const showProducts = (products) => {
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
                                    <a href="https://wa.me/5541988287796" class="btn btn-whatsapp rounded-whatsapp"><i class="bi bi-whatsapp" role="img" aria-label="Contato de Whatsapp"></i></a>
                                </div>                                
                            </div>
                        </div>
                    `;

        document.querySelector("#product-card").appendChild(card);

    }

}

showProducts(products);