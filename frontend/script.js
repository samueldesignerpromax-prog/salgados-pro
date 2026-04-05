// Dados do Cardápio
const produtos = {
    tradicionais: [
        { id: 1, nome: "Coxinha de Frango", preco: 6.50, categoria: "tradicionais", badge: "hit", imagem: "🍗", descricao: "Coxinha tradicional com frango desfiado" },
        { id: 2, nome: "Coxinha com Catupiry", preco: 7.00, categoria: "tradicionais", badge: "favorite", imagem: "🧀", descricao: "Coxinha recheada com catupiry" },
        { id: 3, nome: "Kibe", preco: 5.50, categoria: "tradicionais", badge: "value", imagem: "🥙", descricao: "Kibe tradicional crocante" },
        { id: 4, nome: "Bolinha de Queijo", preco: 5.00, categoria: "tradicionais", badge: "hit", imagem: "🧀", descricao: "Bolinhas de queijo derretido" },
        { id: 5, nome: "Risole Presunto e Queijo", preco: 6.00, categoria: "tradicionais", badge: "", imagem: "🥐", descricao: "Risole cremoso de presunto e queijo" },
        { id: 6, nome: "Enroladinho de Salsicha", preco: 5.50, categoria: "tradicionais", badge: "", imagem: "🌭", descricao: "Enroladinho de salsicha" },
        { id: 7, nome: "Croquete de Carne", preco: 6.50, categoria: "tradicionais", badge: "", imagem: "🥩", descricao: "Croquete de carne moída" },
        { id: 8, nome: "Pastel Carne", preco: 6.00, categoria: "tradicionais", badge: "", imagem: "🥟", descricao: "Pastel de carne" },
        { id: 9, nome: "Pastel Queijo", preco: 5.50, categoria: "tradicionais", badge: "", imagem: "🧀", descricao: "Pastel de queijo" },
        { id: 10, nome: "Pastel Frango", preco: 6.00, categoria: "tradicionais", badge: "", imagem: "🍗", descricao: "Pastel de frango" }
    ],
    gourmet: [
        { id: 11, nome: "Coxinha de Costela com Catupiry", preco: 9.00, categoria: "gourmet", badge: "premium", imagem: "🥩", descricao: "Coxinha premium com costela desfiada e catupiry" },
        { id: 12, nome: "Coxinha de Frango com Cheddar", preco: 7.50, categoria: "gourmet", badge: "hit", imagem: "🧀", descricao: "Coxinha com cheddar cremoso" },
        { id: 13, nome: "Coxinha de Camarão", preco: 10.00, categoria: "gourmet", badge: "premium", imagem: "🦐", descricao: "Coxinha de camarão premium" },
        { id: 14, nome: "Kibe com Recheio de Queijo", preco: 6.50, categoria: "gourmet", badge: "", imagem: "🧀", descricao: "Kibe recheado com queijo" },
        { id: 15, nome: "Kibe com Cream Cheese", preco: 7.50, categoria: "gourmet", badge: "", imagem: "🧀", descricao: "Kibe com cream cheese" },
        { id: 16, nome: "Risole de Camarão", preco: 9.00, categoria: "gourmet", badge: "premium", imagem: "🦐", descricao: "Risole de camarão" },
        { id: 17, nome: "Esfiha Premium de Carne", preco: 5.50, categoria: "gourmet", badge: "", imagem: "🥙", descricao: "Esfiha de carne premium" },
        { id: 18, nome: "Esfiha Frango com Catupiry", preco: 5.50, categoria: "gourmet", badge: "", imagem: "🍗", descricao: "Esfiha de frango com catupiry" }
    ],
    superPremium: [
        { id: 19, nome: "Bolinho de Bacalhau", preco: 9.00, categoria: "super-premium", badge: "premium", imagem: "🐟", descricao: "Bolinho de bacalhau" },
        { id: 20, nome: "Pastel de Camarão", preco: 9.50, categoria: "super-premium", badge: "premium", imagem: "🦐", descricao: "Pastel de camarão" },
        { id: 21, nome: "Quiche de Alho Poró", preco: 8.50, categoria: "super-premium", badge: "", imagem: "🥧", descricao: "Quiche de alho poró" },
        { id: 22, nome: "Quiche de Queijo", preco: 8.00, categoria: "super-premium", badge: "", imagem: "🧀", descricao: "Quiche de queijo" },
        { id: 23, nome: "Mini Pizza Gourmet", preco: 7.50, categoria: "super-premium", badge: "", imagem: "🍕", descricao: "Mini pizza gourmet" },
        { id: 24, nome: "Empada de Camarão", preco: 9.50, categoria: "super-premium", badge: "premium", imagem: "🦐", descricao: "Empada de camarão" }
    ],
    vegano: [
        { id: 25, nome: "Kibe de Abóbora", preco: 6.50, categoria: "vegano", badge: "new", imagem: "🎃", descricao: "Kibe vegano de abóbora" },
        { id: 26, nome: "Bolinho de Batata Doce", preco: 6.50, categoria: "vegano", badge: "new", imagem: "🍠", descricao: "Bolinho de batata doce" },
        { id: 27, nome: "Esfiha de Palmito", preco: 5.00, categoria: "vegano", badge: "", imagem: "🌴", descricao: "Esfiha de palmito" },
        { id: 28, nome: "Empada de Legumes", preco: 7.00, categoria: "vegano", badge: "", imagem: "🥕", descricao: "Empada de legumes" },
        { id: 29, nome: "Pastel de Palmito", preco: 6.50, categoria: "vegano", badge: "", imagem: "🌴", descricao: "Pastel de palmito" }
    ],
    assados: [
        { id: 30, nome: "Coxinha Assada", preco: 7.50, categoria: "assados", badge: "hit", imagem: "🍗", descricao: "Coxinha assada" },
        { id: 31, nome: "Esfiha Assada", preco: 4.50, categoria: "assados", badge: "value", imagem: "🥙", descricao: "Esfiha assada" },
        { id: 32, nome: "Empada Assada", preco: 7.00, categoria: "assados", badge: "", imagem: "🥧", descricao: "Empada assada" },
        { id: 33, nome: "Pão de Queijo", preco: 5.50, categoria: "assados", badge: "hit", imagem: "🧀", descricao: "Pão de queijo mineiro" }
    ],
    doces: [
        { id: 34, nome: "Churros Doce de Leite", preco: 5.50, categoria: "doces", badge: "favorite", imagem: "🥨", descricao: "Churros com doce de leite" },
        { id: 35, nome: "Churros Chocolate", preco: 5.50, categoria: "doces", badge: "favorite", imagem: "🍫", descricao: "Churros com chocolate" },
        { id: 36, nome: "Bolinha de Chocolate", preco: 6.00, categoria: "doces", badge: "", imagem: "🍫", descricao: "Bolinha de chocolate" },
        { id: 37, nome: "Esfiha de Chocolate", preco: 5.00, categoria: "doces", badge: "", imagem: "🍫", descricao: "Esfiha doce de chocolate" },
        { id: 38, nome: "Pastel de Chocolate", preco: 6.50, categoria: "doces", badge: "", imagem: "🍫", descricao: "Pastel doce de chocolate" },
        { id: 39, nome: "Banana com Canela", preco: 5.50, categoria: "doces", badge: "", imagem: "🍌", descricao: "Banana frita com canela" }
    ],
    bebidas: [
        { id: 40, nome: "Refrigerante Lata", preco: 6.00, categoria: "bebidas", badge: "", imagem: "🥤", descricao: "Refrigerante em lata" },
        { id: 41, nome: "Refrigerante 600ml", preco: 8.00, categoria: "bebidas", badge: "", imagem: "🥤", descricao: "Refrigerante 600ml" },
        { id: 42, nome: "Refrigerante 2L", preco: 12.00, categoria: "bebidas", badge: "value", imagem: "🥤", descricao: "Refrigerante 2 litros" },
        { id: 43, nome: "Suco Natural", preco: 7.00, categoria: "bebidas", badge: "", imagem: "🧃", descricao: "Suco natural da fruta" },
        { id: 44, nome: "Água", preco: 3.00, categoria: "bebidas", badge: "", imagem: "💧", descricao: "Água mineral" }
    ],
    combos: [
        { id: 45, nome: "5 Salgados", preco: 28.00, categoria: "combos", badge: "value", imagem: "📦", descricao: "5 salgados a sua escolha" },
        { id: 46, nome: "10 Salgados", preco: 55.00, categoria: "combos", badge: "hit", imagem: "📦", descricao: "10 salgados a sua escolha" },
        { id: 47, nome: "20 Salgados", preco: 100.00, categoria: "combos", badge: "value", imagem: "📦", descricao: "20 salgados a sua escolha" },
        { id: 48, nome: "30 Salgados", preco: 140.00, categoria: "combos", badge: "hit", imagem: "📦", descricao: "30 salgados a sua escolha" },
        { id: 49, nome: "30 + Refri 2L", preco: 150.00, categoria: "combos", badge: "value", imagem: "📦", descricao: "30 salgados + Refri 2L" },
        { id: 50, nome: "50 Salgados", preco: 240.00, categoria: "combos", badge: "hit", imagem: "📦", descricao: "50 salgados a sua escolha" },
        { id: 51, nome: "100 Salgados", preco: 450.00, categoria: "combos", badge: "premium", imagem: "📦", descricao: "100 salgados a sua escolha" },
        { id: 52, nome: "200 Salgados", preco: 850.00, categoria: "combos", badge: "premium", imagem: "📦", descricao: "200 salgados a sua escolha" }
    ]
};

// Carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Funções do Carrinho
function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${product.nome} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div style="text-align: center; padding: 40px;">Seu carrinho está vazio</div>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.nome}</h4>
                        <div class="cart-item-price">R$ ${item.preco.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #ff4444; color: white;">×</button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    if (cartTotalElement) {
        const total = cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
        cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
    }
    
    updateCartCount();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.preco * item.quantity), 0);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Renderizar Produtos
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = products.map(product => {
        let badgeHtml = '';
        if (product.badge === 'hit') badgeHtml = '<span class="product-badge badge-hit">🔥 Mais vendido</span>';
        else if (product.badge === 'favorite') badgeHtml = '<span class="product-badge badge-favorite">⭐ Favorito</span>';
        else if (product.badge === 'value') badgeHtml = '<span class="product-badge badge-value">💰 Melhor custo-benefício</span>';
        else if (product.badge === 'premium') badgeHtml = '<span class="product-badge badge-premium">👑 Premium</span>';
        else if (product.badge === 'new') badgeHtml = '<span class="product-badge badge-new">🆕 Novo</span>';
        
        return `
            <div class="product-card" onclick="event.stopPropagation()">
                ${badgeHtml}
                <div class="product-image">
                    ${product.imagem}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.nome}</h3>
                    <p style="color: #666; font-size: 14px; margin-bottom: 8px;">${product.descricao}</p>
                    <div class="product-price">R$ ${product.preco.toFixed(2)}</div>
                    <div class="product-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')}, 1)">+</button>
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')}, 1)">
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filtrar Produtos por Categoria
function filterByCategory(category) {
    const allProducts = Object.values(produtos).flat();
    
    if (category === 'all') {
        renderProducts(allProducts, 'products-container');
    } else {
        const filtered = allProducts.filter(p => p.categoria === category);
        renderProducts(filtered, 'products-container');
    }
    
    // Atualizar botões ativos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Inicializar página
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar produtos na home
    if (document.getElementById('products-container')) {
        const destaques = [...produtos.tradicionais.slice(0, 4), ...produtos.gourmet.slice(0, 2), ...produtos.combos.slice(0, 2)];
        renderProducts(destaques, 'products-container');
    }
    
    // Renderizar cardápio completo
    if (document.getElementById('full-products-container')) {
        const allProducts = Object.values(produtos).flat();
        renderProducts(allProducts, 'full-products-container');
    }
    
    // Inicializar carrinho
    updateCartUI();
    
    // Abrir/Fechar carrinho
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const overlay = document.getElementById('overlay');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('open');
            overlay.classList.add('active');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
    
    // Finalizar pedido
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Seu carrinho está vazio!');
                return;
            }
            window.location.href = 'checkout.html';
        });
    }
});

// Funções Globais
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.filterByCategory = filterByCategory;
