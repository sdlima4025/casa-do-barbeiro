const products = [
  {
    id: 1,
    name: "Pasta  Black 150g",
    description: "Fixação média, acabamento natural e fácil aplicação para penteados modernos.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/pasta-hawk-black-150g.jpg",
    badge: "SALE"
  },
  {
    id: 2,
    name: "Pasta  Incolor Cristal 150g",
    description: "Hidrata, perfuma e ajuda a manter a barba alinhada durante o dia.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/pasta-hawk-incolor-cristal-150g.jpg",
    badge: "SALE"
  },
  {
    id: 2,
    name: "Pasta  Caramelo Cristal 150g",
    description: "Hidrata, perfuma e ajuda a manter a barba alinhada durante o dia.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/pasta-hawk-caramelo-150g.jpg",
    badge: "SALE"
  },
  {
    id: 2,
    name: "Cera  Mate Cristal 150g",
    description: "Hidrata, perfuma e ajuda a manter a barba alinhada durante o dia.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/cera-hawk-efeito-matte-150g.jpg",
    badge: "SALE"
  },
  {
    id: 3,
    name: "Shampoo Anti-Caspa Profissional 300ml",
    description: "Limpeza profunda com fórmula ideal para uso diário em barbearias.",
    oldPrice: 39.99,
    price: 24.99,
    image: "img/shampoo-anticaspa-classe-a-300ml.jpg",
    badge: "SALE"
  },
  {
    id: 3,
    name: "Shampoo 3 em 1 Profissional 300ml",
    description: "Limpeza profunda com fórmula ideal para uso diário em barbearias.",
    oldPrice: 39.99,
    price: 24.99,
    image: "img/shampoo-sem-sal-classe-a-300ml.png",
    badge: "SALE"
  },
  {
    id: 4,
    name: "Gel Cola Fixação Forte 300g",
    description: "Alta fixação, brilho controlado e excelente rendimento para uso profissional.",
    oldPrice: 29.99,
    price: 12.99,
    image: "img/gel-cola-megafixacao-classe-a-300g.png",
    badge: "NOVO"
  },
  {
    id: 4,
    name: "Gel Cera Fixação Forte 300g",
    description: "Alta fixação, brilho controlado e excelente rendimento para uso profissional.",
    oldPrice: 29.99,
    price: 12.99,
    image: "img/gel-cera-hidratante-classe-a-300g.png",
    badge: "NOVO"
  },
  {
    id: 5,
    name: "Balm para Barba e Bigode 120ml",
    description: "Ajuda a hidratar, alinhar e suavizar os fios da barba.",
    oldPrice: 40.0,
    price: 20.0,
    image: "img/balm-barba-bigode-classe-a-120g.png",
    badge: "SALE"
  },
  {
    id: 6,
    name: "Pós-Barba Refrescante 240ml",
    description: "Sensação refrescante após o barbear, ajudando a acalmar a pele.",
    oldPrice: 35.0,
    price: 22.0,
    image: "img/locao-pos-barba-classe-a-vermelha.png",
    badge: "NOVO"
  },
  {
    id: 6,
    name: "Pós-Barba Refrescante 240ml",
    description: "Sensação refrescante após o barbear, ajudando a acalmar a pele.",
    oldPrice: 35.0,
    price: 22.0,
    image: "img/locao-pos-barba-classe-a-verde-240ml.png",
    badge: "NOVO"
  },
  {
    id: 7,
    name: "Óleo para Barba 30ml",
    description: "Produto ideal para hidratação dos fios da barba, produzindo uma aparência profissional.",
    oldPrice: 32.9,
    price: 18.6,
    image: "img/oleo-barba-classe-a-30ml.png",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Gel Cola Mega Fixação 1000g",
    description: "Fixação extra forte para penteados que precisam durar o dia inteiro.",
    oldPrice: 32.9,
    price: 18.0,
    image: "img/gel-cola.png",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Gel Cola Mega Fixação 500g",
    description: "Fixação extra forte para penteados que precisam durar o dia inteiro.",
    oldPrice: 32.9,
    price: 18.0,
    image: "img/gel-cola.png",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Gel Cola Mega Fixação 500g",
    description: "Fixação extra forte para penteados que precisam durar o dia inteiro.",
    oldPrice: 32.9,
    price: 18.0,
    image: "img/gel-cola.png",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Gel Cola Mega Fixação 500g",
    description: "Fixação extra forte para penteados que precisam durar o dia inteiro.",
    oldPrice: 32.9,
    price: 18.0,
    image: "img/gel-cola.png",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Gel Cola Mega Fixação 500g",
    description: "Fixação extra forte para penteados que precisam durar o dia inteiro.",
    oldPrice: 32.9,
    price: 18.0,
    image: "img/gel-cola.png",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Gel Cola Mega Fixação 500g",
    description: "Fixação extra forte para penteados que precisam durar o dia inteiro.",
    oldPrice: 32.9,
    price: 18.0,
    image: "img/gel-cola.png",
    badge: "SALE"
  },
  {
    id: 8,
    name: "Gel Cola Mega Fixação 500g",
    description: "Fixação extra forte para penteados que precisam durar o dia inteiro.",
    oldPrice: 32.9,
    price: 18.0,
    image: "img/gel-cola.png",
    badge: "SALE"
  }
];

let cart = [];

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const subtotalElement = document.getElementById("subtotal");
const discountElement = document.getElementById("discount");
const totalElement = document.getElementById("total");
const discountMessage = document.getElementById("discountMessage");
const checkoutBtn = document.getElementById("checkoutBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const discountMinimum = 100;
const discountPercent = 0.10;

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function renderProducts() {
  productGrid.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <div class="sale-badge">${product.badge}</div>

      <div class="product-img">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="price-box">
          <span class="old-price">${formatCurrency(product.oldPrice)}</span>
          <strong>${formatCurrency(product.price)}</strong>
          <small>Valor por unidade</small>
        </div>

        <button class="add-btn" onclick="addToCart(${product.id})">
          Adicionar ao carrinho
        </button>
      </div>
    `;

    productGrid.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const itemInCart = cart.find((item) => item.id === productId);

  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  renderCart();
}

function decreaseQuantity(productId) {
  const itemInCart = cart.find((item) => item.id === productId);

  if (!itemInCart) {
    return;
  }

  if (itemInCart.quantity > 1) {
    itemInCart.quantity -= 1;
  } else {
    removeFromCart(productId);
    return;
  }

  renderCart();
}

function increaseQuantity(productId) {
  const itemInCart = cart.find((item) => item.id === productId);

  if (itemInCart) {
    itemInCart.quantity += 1;
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  renderCart();
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

function calculateDiscount(subtotal) {
  if (subtotal >= discountMinimum) {
    return subtotal * discountPercent;
  }

  return 0;
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Seu carrinho ainda está vazio.</p>`;
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
        <div>
          <h4>${item.name}</h4>
          <p>
            ${formatCurrency(item.price)} x ${item.quantity} =
            <strong>${formatCurrency(item.price * item.quantity)}</strong>
          </p>
        </div>

        <div class="cart-controls">
          <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
          <strong>${item.quantity}</strong>
          <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remover</button>
        </div>
      `;

      cartItems.appendChild(cartItem);
    });
  }

  updateSummary();
}

function updateSummary() {
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const total = subtotal - discount;

  subtotalElement.textContent = formatCurrency(subtotal);
  discountElement.textContent = formatCurrency(discount);
  totalElement.textContent = formatCurrency(total);

  if (subtotal === 0) {
    discountMessage.textContent = "Faltam R$ 100,00 para liberar 10% de desconto.";
  } else if (subtotal < discountMinimum) {
    const missingValue = discountMinimum - subtotal;
    discountMessage.textContent = `Faltam ${formatCurrency(missingValue)} para liberar 10% de desconto.`;
  } else {
    discountMessage.textContent = "Parabéns! Você ganhou 10% de desconto nesta compra.";
  }
}

function clearCart() {
  cart = [];
  renderCart();
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio. Adicione pelo menos um produto.");
    return;
  }

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const total = subtotal - discount;

  let message = "Olá! Tenho interesse nos produtos da Casa do Barbeiro:%0A%0A";

  cart.forEach((item) => {
    message += `- ${item.name}%0A`;
    message += `Quantidade: ${item.quantity}%0A`;
    message += `Valor unitário: ${formatCurrency(item.price)}%0A`;
    message += `Subtotal do item: ${formatCurrency(item.price * item.quantity)}%0A%0A`;
  });

  message += `Subtotal: ${formatCurrency(subtotal)}%0A`;
  message += `Desconto: ${formatCurrency(discount)}%0A`;
  message += `Total: ${formatCurrency(total)}%0A%0A`;
  message += "Gostaria de confirmar disponibilidade, entrega e forma de pagamento.";

  const phoneNumber = "5571999999999";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappUrl, "_blank");
}

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

checkoutBtn.addEventListener("click", checkoutWhatsApp);
clearCartBtn.addEventListener("click", clearCart);

renderProducts();
renderCart();
