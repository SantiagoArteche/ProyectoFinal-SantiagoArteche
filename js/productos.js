const productos = [{
    id: 1,
    nombre: "Remera Nike",
    img: "./images/nike1.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 2500
}, {
    id: 2,
    nombre: "Remera Adidas",
    img: "./images/remeraadidas.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 3000
}, {
    id: 3,
    nombre: "Remera Puma",
    img: "./images/pumaw1.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 3500
}, {
    id: 4,
    nombre: "Remera Jordan",
    img: "./images/jordan1.jpg",
    tipo: "shirt",
    cantidad: 1,
    categoria: {
        nombre: "Shirt",
        id: "shirt",
    },
    precio: 4000
}, {
    id: 5,
    nombre: "Pantalon Nike",
    img: "./images/pantnike.webp",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 3200
}, {
    id: 6,
    nombre: "Pantalon Adidas",
    img: "./images/pantadidas.png",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 3600
}, {
    id: 7,
    nombre: "Pantalon Puma",
    img: "./images/pantpuma.png",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 4400
}, {
    id: 8,
    nombre: "Pantalon Jordan",
    img: "./images/pantsjordan.png",
    tipo: "pant",
    cantidad: 1,
    categoria: {
        nombre: "Pant",
        id: "pant",
    },
    precio: 5900
}, {
    id: 9,
    nombre: "Buzo Nike",
    img: "./images/camperanike.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 6000
}, {
    id: 10,
    nombre: "Buzo Adidas",
    img: "./images/camperaadidas.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 6500
}, {
    id: 11,
    nombre: "Buzo Puma",
    img: "./images/camperapuma.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 8200
}, {
    id: 12,
    nombre: "Buzo Jordan",
    img: "./images/buzojordan.jpg",
    tipo: "hoodie",
    cantidad: 1,
    categoria: {
        nombre: "Hoodie",
        id: "hoodie",
    },
    precio: 9300
}, {
    id: 13,
    nombre: "Zapatillas Nike",
    img: "./images/nikeshoes2.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 6300
}, {
    id: 14,
    nombre: "Zapatillas Adidas",
    img: "./images/adidasshoes.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 8000
}, {
    id: 15,
    nombre: "Zapatillas Puma",
    img: "./images/pumashoes.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 5430
}, {
    id: 16,
    nombre: "Zapatillas Jordan",
    img: "./images/jordanshoes.png",
    tipo: "shoes",
    cantidad: 1,
    categoria: {
        nombre: "Shoes",
        id: "shoes",
    },
    precio: 12300
}];
localStorage.setItem("productos", JSON.stringify(productos))