// JavaScript Document
$(document).ready(function () {
    $('ul').find('li').on('click', function (e) {
        e.preventDefault();
        let idElemento = $(this).find('a').attr('href');
        let posElemento = $(idElemento).offset().top;
        window.scrollTo({ top: posElemento, behavior: 'smooth' });
    });
});


function filterByCategory(category) {
    const products = document.querySelectorAll(".produto");
    const anuncioImage = document.querySelector(".anuncio"); // Select the image element

    // Hide the image when a category is selected
    if (category) {
        anuncioImage.style.display = "none";
    } else {
        anuncioImage.style.display = "block"; // Show the image if no category is selected
    }
    products.forEach(product => {
        const productName = product.querySelector("p").textContent.toLowerCase();
        let shouldDisplay = false;

        // Condições para cada categoria
        if (category === 'bobinas' && productName.includes('bobinas')) {
            shouldDisplay = true;
        } else if (category === 'dentes' && productName.includes('dente')) {
            shouldDisplay = true;
        } else if (category === 'maquinas') {
            // Mostrar produtos que não tenham "bobina" nem "dente" no nome
            if (!productName.includes('bobinas') && !productName.includes('dente')) {
                shouldDisplay = true;
            }
        }



        // Atualizar a exibição dos produtos
        product.style.display = shouldDisplay ? "block" : "none";
    });
}

function searchProduct() {
    const searchValue = document.getElementById("searchbar").value.toLowerCase(); // Get the search bar value
    const products = document.querySelectorAll(".produto"); // Select all products
    const anuncioImage = document.querySelector(".anuncio"); // Select the image element

    // Hide or show the image depending on the search input
    if (searchValue) {
        anuncioImage.style.display = "none"; // Hide image when searching
    } else {
        anuncioImage.style.display = "block"; // Show image when search bar is cleared
    }

    // Filter products based on the search value
    products.forEach(product => {
        const productName = product.querySelector("p").textContent.toLowerCase(); // Get the product name
        product.style.display = productName.includes(searchValue) ? "block" : "none"; // Show or hide the product
    });
}

