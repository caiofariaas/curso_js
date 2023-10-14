// const -> variável constante
// let -> variavel comum

const catalogo = [{
    id: 1, 
    nomeProd: "Air max plus Tn' Black and White",
    descProd: " blabla",
    precoProd: 295.00,
    imgProd: "./image/ferramentas/parafusadeira.jpeg"
},

{
    id: 2, 
    nomeProd: "Air max plus Tn' Chargers",
    descProd: " bla",
    precoProd: 295.00,
    imgProd: "./image/ferramentas/esmeril.jpeg"
},

{
    id: 3, 
    nomeProd: "Air max plus 95 Neon'",
    descProd: " bla",
    precoProd: 330.00,
    imgProd: "./image/ferramentas/parafusadeira.jpeg"
},

{
    id: 4, 
    nomeProd: "Air max plus Tn' Triple Black",
    descProd: " bl",
    precoProd: 295.00,
    imgProd: "./image/ferramentas/parafusadeira.jpeg"
},

{
    id: 5, 
    nomeProd: "Air Force 1'07 White",
    descProd: " bl",
    precoProd: 295.00,
    imgProd: "./image/ferramentas/parafusadeira.jpeg"
},

{
    id: 6, 
    nomeProd: "Nike shox TL Triple Black",
    descProd: " bl",
    precoProd: 350.00,
    imgProd: "./image/ferramentas/parafusadeira.jpeg"
}
]


function mostrarProd(){
    const catalogoContainer = document.getElementById('home_product_grid');

    for(let i = 0; i < catalogo.length; i++){
        let prod = catalogo[i]

            // html do produto deve estar entre Crases ' ` '

        let cardProd = `
        <div class="product_card">
            <a href="produto${prod.id}.html">
                <img class="product_image" src="${prod.imgProd}" alt="${prod.nomeProd}">
                <h3>${prod.nomeProd}</h3>
                <p>${prod.descProd}</p>
                <p>Preço: R$ ${prod.precoProd.toFixed(2)}</p>
            </a>
        </div>`;

        home_product_grid.innerHTML += cardProd;

        console.log(`O produto de id ${prod.id} esta nomeado como ${prod.nomeProd} e custa ${prod.precoProd}`)
    }
}
