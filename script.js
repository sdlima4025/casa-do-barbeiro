const products = [
  {
    id: 1,
    name: "Pasta  Black 150g",
    description: "Fixação média com acabamento natural. Perfeita para penteados modernos com aspecto profissional, fácil de aplicar e remover.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/pasta-hawk-black-150g.jpg",
    badge: "SALE",
    category: "pomadas"
  },
  {
    id: 2,
    name: "Pasta  Incolor Cristal 150g",
    description: "Hidratação intensa com brilho cristalino. Mantém a barba alinhada e perfumada o dia todo, sem deixar resíduos visíveis.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/pasta-hawk-incolor-cristal-150g.jpg",
    badge: "SALE",
    category: "pomadas"
  },
  {
    id: 3,
    name: "Pasta  Caramelo Cristal 150g",
    description: "Combinação de hidratação e fixação com acabamento brilhante em tom caramelo. Ideal para barbas volumosas e penteados sofisticados.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/pasta-hawk-caramelo-150g.jpg",
    badge: "SALE",
    category: "pomadas"
  },
  {
    id: 4,
    name: "Cera  Mate Cristal 150g",
    description: "Efeito fosco moderno com fixação excelente. Perfeita para looks descontraídos que mantêm textura e definição sem brilho.",
    oldPrice: 24.99,
    price: 12.99,
    image: "img/cera-hawk-efeito-matte-150g.jpg",
    badge: "SALE",
    category: "pomadas"
  },
  {
    id: 5,
    name: "Shampoo Anti-Caspa Profissional 300ml",
    description: "Limpeza profunda e eficaz contra caspa. Fórmula especial desenvolvida para barbearias, apropriada para uso diário sem ressecamento.",
    oldPrice: 39.99,
    price: 24.99,
    image: "img/shampoo-anticaspa-classe-a-300ml.jpg",
    badge: "SALE",
    category: "shampoos"
  },
  {
    id: 6,
    name: "Shampoo 3 em 1 Profissional 300ml",
    description: "Limpeza, hidratação e condicionamento em um só produto. Fórmula prática e econômica perfeita para rotinas de barbearia.",
    oldPrice: 39.99,
    price: 24.99,
    image: "img/shampoo-sem-sal-classe-a-300ml.png",
    badge: "SALE",
    category: "shampoos"
  },
  {
    id: 7,
    name: "Gel Cola Fixação Forte 300g",
    description: "Fixação poderosa com brilho controlado. Ideal para penteados que exigem resistência o dia inteiro com acabamento impeccável.",
    oldPrice: 29.99,
    price: 12.99,
    image: "img/gel-cola-megafixacao-classe-a-300g.png",
    badge: "NOVO",
    category: "pomadas"
  },
  {
    id: 8,
    name: "Gel Cera Fixação Forte 300g",
    description: "Fixação robusta com hidratação prolongada. Combina o poder de fixação com maciez nos fios, resultado profissional garantido.",
    oldPrice: 29.99,
    price: 12.99,
    image: "img/gel-cera-hidratante-classe-a-300g.png",
    badge: "NOVO",
    category: "pomadas"
  },
  {
    id: 9,
    name: "Balm para Barba e Bigode 120ml",
    description: "Balm nutritivo que hidrata, alinha e suaviza os fios. Mantém a barba saudável, alinhada e com aroma agradável.",
    oldPrice: 40.0,
    price: 20.0,
    image: "img/balm-barba-bigode-classe-a-120g.png",
    badge: "SALE",
    category: "barba"
  },
  {
    id: 10,
    name: "Pós-Barba Refrescante 240ml",
    description: "Sensação refrescante e revitalizante após o barbear. Acalma a pele, deixando-a suave e com aroma agradável que dura.",
    oldPrice: 35.0,
    price: 22.0,
    image: "img/locao-pos-barba-classe-a-vermelha.png",
    badge: "NOVO",
    category: "barba"
  },
  {
    id: 11,
    name: "Pós-Barba Refrescante 240ml",
    description: "Loção refrescante e hidratante com fragrância vibrante. Acalma irritações pós-barba deixando a pele revitalizada e tonificada.",
    oldPrice: 35.0,
    price: 22.0,
    image: "img/locao-pos-barba-classe-a-verde-240ml.png",
    badge: "NOVO",
    category: "barba"
  },
  {
    id: 12,
    name: "Óleo para Barba 30ml",
    description: "Óleo nutritivo que hidrata profundamente os fios e a pele. Deixa a barba macia, brilhante e com aparência profissional.",
    oldPrice: 32.9,
    price: 18.6,
    image: "img/oleo-barba-classe-a-30ml.png",
    badge: "SALE",
    category: "barba"
  },
  {
    id: 13,
    name: "Gola Higiênica para Barbeiros - pacote com 500 Golas",
    description: "Pacote econômico com 500 golas higiênicas. Essencial para barbearias que buscam higiene, conforto e praticidade no dia a dia.",
    oldPrice: 44.9,
    price: 34.9,
    image: "img/gola-higienica.jpg",
    badge: "SALE",
    category: "bancada"
  },
  {
    id: 14,
    name: "Shaving Gel 1L",
    description: "Gel de barbear profissional em formato econômico. Fornece deslizamento perfeito da lâmina e conforto máximo durante o barbear.",
    oldPrice: 54.99,
    price: 34.99,
    image: "img/shaving-gel-1l-site.jpg",
    badge: "SALE",
    category: "bancada"
  },
  {
    id: 15,
    name: "Lâmina Wilkinson Sword",
    description: "Lâmina de qualidade premium com fio ultra-afiado. Proporciona barbear preciso, confortável e durável para resultados impecáveis.",
    oldPrice: 54.9,
    price: 34.99,
    image: "img/lamina-wilkinson-sword.jpg",
    badge: "SALE",
    category: "bancada"
  },
  {
    id: 16,
    name: "Lâmina Derby Extra",
    description: "Lâmina clássica com excelente relação qualidade-preço. Fio afiado que garante barbear limpo e seguro para profissionais.",
    oldPrice: 54.9,
    price: 34.99,
    image: "img/lamina-derby-extra.jpg",
    badge: "SALE",
    category: "bancada"
  },
  {
    id: 17,
    name: "Serum de Crescimento Hawk",
    description: "Sérum estimulante especial para fortalecer barba e bigode. Promove crescimento saudável e aparência mais densa e volumosa.",
    oldPrice: 59.99,
    price: 34.99,
    image: "img/serum-crescimento-hawk.jpg",
    badge: "SALE",
    category: "barba"
  },
  {
    id: 18,
    name: "Kit Barbeiro Completo com 10 pastas diversas",
    description: "Kit essencial com os produtos mais populares para barba perfeita. Solução completa para quem quer qualidade profissional em casa.",
    oldPrice: 249.99,
    price: 124.99,
    image: "img/kit-barbeiro.jpg",
    badge: "SALE",
    category: "bancada"
  },
  {
    id: 19,
    name: "Kit - 05 produtos diversos com 50% de desconto",
    description: "Kit promocional com seleção especial de produtos Casa do Barbeiro. Descubra as melhores combinações para sua rotina de cuidados.",
    oldPrice: 249.99,
    price: 174.99,
    image:"img/kit1-diversos.png",
    badge: "SALE",
    category: "bancada"
  },
  {
    id: 20,
    name: "Kit - 10 Gel cera ou cola com 50% de desconto",
    description: "Kit exclusivo com produtos de destaque. Aproveitamento máximo para quem deseja experimentar toda a linha Casa do Barbeiro.",
    oldPrice: 249.99,
    price: 124.99,
    image: "img/kit-pastas-300g.png",
    badge: "SALE",
    category: "bancada"
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

        <button class="add-btn" data-product-id="${product.id}">
          Adicionar ao carrinho
        </button>
      </div>
    `;

    const addBtn = productCard.querySelector(".add-btn");
    addBtn.addEventListener("click", () => addToCart(product.id));

    productGrid.appendChild(productCard);
  });
}

let currentCategory = null;

function filterByCategory(category) {
  currentCategory = category;
  productGrid.innerHTML = "";

  const filteredProducts = products.filter((product) => product.category === category);

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `<p class="empty-category">Nenhum produto encontrado nesta categoria.</p>`;
    return;
  }

  filteredProducts.forEach((product) => {
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

        <button class="add-btn" data-product-id="${product.id}">
          Adicionar ao carrinho
        </button>
      </div>
    `;

    const addBtn = productCard.querySelector(".add-btn");
    addBtn.addEventListener("click", () => addToCart(product.id));

    productGrid.appendChild(productCard);
  });
}

function showAllProducts() {
  currentCategory = null;
  renderProducts();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  if (!product) {
    alert("Produto não encontrado!");
    console.error("Produto com ID " + productId + " não encontrado.");
    return;
  }

  const itemInCart = cart.find((item) => item.id === productId);

  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
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
          <button class="qty-btn" data-action="decrease" data-product-id="${item.id}">-</button>
          <strong>${item.quantity}</strong>
          <button class="qty-btn" data-action="increase" data-product-id="${item.id}">+</button>
          <button class="remove-btn" data-action="remove" data-product-id="${item.id}">Remover</button>
        </div>
      `;

      cartItems.appendChild(cartItem);
    });

    // Adicionar event listeners aos botões
    document.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const action = e.target.getAttribute("data-action");
        const productId = parseInt(e.target.getAttribute("data-product-id"));

        if (action === "decrease") {
          decreaseQuantity(productId);
        } else if (action === "increase") {
          increaseQuantity(productId);
        } else if (action === "remove") {
          removeFromCart(productId);
        }
      });
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

  const phoneNumber = "5571983862365";
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
