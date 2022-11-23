import { createStore } from "vuex";

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
  };
  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }
  return string;
};

export default createStore({
  state: {
    anillo: [
      {
        title: "Anillo de corazón",
        src: require("@/assets/img/anillo/1.jpeg"),
        price: 5500.00,
        description:
          "Anillo de oro amarillo de 10K de 2mm de grosor con piedra de swarovski en forma de corazón",
        type: "anillo",
        color: "Oro Amarillo",
        brand: "Swarovski",
        gender: "anillo",
        id: 1,
      },

      {
        title: "Anillo de compromiso",
        src: require("@/assets/img/anillo/2.jpeg"),
        price: 6000.00,
        description:
          "Anillo de oro de 10k con incrustaciones de piedras de swarovski cristalino de colores",
        type: "Anillo",
        color: "Oro",
        brand: "Swarovski",
        gender: "anillo",
        id: 2,
      },
      {
        title: "Anillo Princesa",
        src: require("@/assets/img/anillo/3.jpeg"),
        price: 350.00,
        description:
          "Anillo con incrustaciones de swarovski realizado con plata 0.925 en forma de corona de princesa",
        type: "Anillo",
        color: "Plata",
        brand: "Swarovski",
        gender: "anillo",
        id: 3,
      },
      {
        title: "Anillo Swarovski Ligero",
        src: require("@/assets/img/anillo/4.jpeg"),
        price: 150.00,
        description:
          "Anillo de plata 0.925 de 2mm de grosor con incrustaciones de swarovski en el centro",
        type: "Anillo",
        color: "plata",
        brand: "Maison Margiela",
        gender: "anillo",
        id: 4,
      },
      {
        title: "Anillo Llave Española",
        src: require("@/assets/img/anillo/5.jpeg"),
        price: 5000.00,
        description:
          "Anillo en forma de llave española de plata 0.925 y con centro de oro de 10k amarillo",
        type: "Anillo",
        color: "Oro Amarillo",
        brand: "Swarovski",
        gender: "anillo",
        id: 5,
      },
      {
        title: "Anillo Floral",
        src: require("@/assets/img/anillo/6.jpeg"),
        price: 4500.00,
        description:
          "Anillo en forma de flor de oro amarillo de 10k incrustado con swarovski",
        type: "anillo",
        color: "Oro amarillo",
        brand: "Swarovski",
        gender: "anillo",
        id: 6,
      },
      {
        title: "Argolla de matrimonio",
        src: require("@/assets/img/anillo/7.jpeg"),
        price: 3500.00,
        description:
          "Argolla de matrimonio de oro amarillo de 10k adiamantada y ligera",
        type: "Top",
        color: "Oro Amarillo",
        brand: "Canto de Luna",
        gender: "anillo",
        id: 7,
      },
      {
        title: "Anillo Ligero de Infinito",
        src: require("@/assets/img/anillo/8.jpeg"),
        price: 150.00,
        description:
          "Anillo de plata 0.925 de 2mm de grosor con incrustaciones de swarovski en forma de infinito",
        type: "Shoes",
        color: "White",
        brand: "Comme De Garcons",
        gender: "anillo",
        id: 8,
      }
      /*
      ,
      {
        title: "Gold and Black Heels",
        src: require("@/assets/img/anillo/9.jpeg"),
        price: 739.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "anillo",
        id: 9,
      },

      {
        title: "Gold and Pink Floral Heels",
        src: require("@/assets/img/anillo/10.jpeg"),
        price: 1239.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Gold",
        brand: "Dolce & Gabbana",
        gender: "anillo",
        id: 10,
      },
      {
        title: "Stitched Mouse Top",
        src: require("@/assets/img/anillo/11.jpeg"),
        price: 669.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "White",
        brand: "Dolce & Gabbana",
        gender: "anillo",
        id: 11,
      },
      {
        title: "Black Emblem Bag",
        src: require("@/assets/img/anillo/12.jpeg"),
        price: 279.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Black",
        brand: "Jean Paul Gaultier",
        gender: "anillo",
        id: 12,
      },
      {
        title: "Glitter Skull Bag",
        src: require("@/assets/img/anillo/13.jpeg"),
        price: 339.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Blue",
        brand: "Manish Arora",
        gender: "anillo",
        id: 13,
      },
      {
        title: "Portrait Bag",
        src: require("@/assets/img/anillo/14.jpeg"),
        price: 489.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Gold",
        brand: "Moschino",
        gender: "anillo",
        id: 14,
      },
      {
        title: "Gold Bow Heels",
        src: require("@/assets/img/anillo/15.jpeg"),
        price: 1239.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Shoes",
        color: "Gold",
        brand: "Versace",
        gender: "anillo",
        id: 15,
      },
      {
        title: "Black Lace Dress",
        src: require("@/assets/img/anillo/16.jpeg"),
        price: 2579.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Valentino",
        gender: "anillo",
        id: 16,
      },
      {
        title: "Aged Snake Bag",
        src: require("@/assets/img/anillo/17.jpeg"),
        price: 899.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Gold",
        brand: "Valentino",
        gender: "anillo",
        id: 17,
      },
      {
        title: "Transparent Stitched Dress",
        src: require("@/assets/img/anillo/18.jpeg"),
        price: 1529.99,
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Gold",
        brand: "Valentino",
        gender: "anillo",
        id: 18,
      },
      */
    ],
    collar: [
      {
        title: "Cadena Torsal",
        src: require("@/assets/img/collar/1.jpeg"),
        price: 270.00,
        description:
          "Cadena de doble hilo que se encuentra entre tegido, para lograr la emblematica forma de espiral.",
        type: "Collar",
        color: "Plata",
        brand: "Shicel",
        gender: "collar",
        id: 19,
      },
      {
        title: "Cadeena Especial",
        src: require("@/assets/img/collar/2.jpeg"),
        price: 350.00,
        description:
          "Tres cadenas de eslavón sencillo, unidas para formar un extravagante cadena.",
        type: "Collar",
        color: "Plata",
        brand: "Shicel",
        gender: "collar",
        id: 20,
      },
      {
        title: "Cadena Cartier",
        src: require("@/assets/img/collar/3.jpeg"),
        price: 10000.00,
        description:
          "Oro amarillo de 10K, 11.7gr con un largo de 60 cm y un arnchor de 5mm.",
        type: "Collar",
        color: "Oro 10k",
        brand: "Shicel",
        gender: "collar",
        id: 21,
      },
      {
        title: "Cadena Cartier",
        src: require("@/assets/img/collar/4.jpeg"),
        price: 150.00,
        description:
          "Plata 11.7gr con un largo de 60 cm y un arnchor de 5mm.",
        type: "Collar",
        color: "Plata",
        brand: "Shicel",
        gender: "collar",
        id: 22,
      },
      {
        title: "Cadena Gucci Adiamantada",
        src: require("@/assets/img/collar/5.jpeg"),
        price: 300.00,
        description:
          "Cadena de plata de eslavón plano con cortes en la cara superior para dar más brillo.",
        type: "Collar",
        color: "Plata",
        brand: "Gucci",
        gender: "collar",
        id: 23,
      },
      {
        title: "Cadena Semitorsal con Dije de Luna",
        src: require("@/assets/img/collar/6.jpeg"),
        price: 200.00,
        description:
          "Cadena de plata .925 de 50cm con un ancho de 2mm, con un dije de luna azúl con piedra de Swarovski",
        type: "Collar",
        color: "Plata",
        brand: "Swarovski",
        gender: "collar",
        id: 24,
      },
      {
        title: "Gargantilla",
        src: require("@/assets/img/collar/7.jpeg"),
        price: 290.00,
        description:
          "Gargantilla de plata .925 con un largo de 50cm con un dije de corazón.",
        type: "Collar",
        color: "Plata",
        brand: "Shicel",
        gender: "collar",
        id: 25,
      },
      {
        title: "Cadena",
        src: require("@/assets/img/collar/8.jpeg"),
        price: 180.00,
        description:
          "Cadena de plata .925 con un largo de 45cm.",
        type: "Collar",
        color: "Plata",
        brand: "Shicel",
        gender: "collar",
        id: 26,
      }/*
      ,
      {
        title: "Archive Redux",
        src: require("@/assets/img/collar/9.jpeg"),
        price: 93.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Brown",
        brand: "Raf Simons",
        gender: "collar",
        id: 27,
      },
      {
        title: "Red Girl Shirt",
        src: require("@/assets/img/collar/10.jpeg"),
        price: 1349.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Raf Simons",
        gender: "collar",
        id: 28,
      },
      {
        title: "RS Pink Jacket",
        src: require("@/assets/img/collar/11.jpeg"),
        price: 1149.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Raf Simons",
        gender: "collar",
        id: 29,
      },
      {
        title: "Playing Card Pants",
        src: require("@/assets/img/collar/12.jpeg"),
        price: 949.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Bottom",
        color: "Black",
        brand: "Undercover",
        gender: "collar",
        id: 30,
      },
      {
        title: "Castle Backpack",
        src: require("@/assets/img/collar/13.jpeg"),
        price: 699.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Accessories",
        color: "Grey",
        brand: "Undercover",
        gender: "collar",
        id: 31,
      },
      {
        title: "Black Portrait Jacket",
        src: require("@/assets/img/collar/14.jpeg"),
        price: 1299.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Black",
        brand: "Undercover",
        gender: "collar",
        id: 32,
      },
      {
        title: "Red Portrait Girl",
        src: require("@/assets/img/collar/15.jpeg"),
        price: 699.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Yohji Yamamoto",
        gender: "collar",
        id: 33,
      },
      */
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 16,
    shipping: 99,
  },
  getters: {
    allProducts: (state) => state.anillo.concat(state.collar),
    getAnillo: (state) => state.anillo,
    getCollar: (state) => state.collar,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.anillo.find((anillo) => anillo.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.collar.find((collar) => collar.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,

    cartCheckoutPrice: (state) => {
      let total = 0;

      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      total = total + (total * state.tax) / 100;
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.anillo
          .concat(state.collar)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
