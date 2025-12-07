// ================================================
// CART.JS - Sepet Yönetimi
// ================================================

let cartItems = [];

const Cart = {
    // Sepeti başlat
    init: () => {
        cartItems = Storage.getCart();
        Cart.updateUI();
    },

    // Sepete ürün ekle
    addItem: (productId) => {
        const product = Products.getProductById(productId);
        if (!product) return;

        // Ürün zaten sepette mi kontrol et
        const existingItem = cartItems.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        Storage.saveCart(cartItems);
        Cart.updateUI();
        Cart.showNotification(`${product.name} sepete eklendi!`);
    },

    // Sepetten ürün çıkar
    removeItem: (productId) => {
        cartItems = cartItems.filter(item => item.id !== productId);
        Storage.saveCart(cartItems);
        Cart.updateUI();
        Cart.showNotification('Ürün sepetten çıkarıldı.');
    },

    // Ürün miktarını artır
    increaseQuantity: (productId) => {
        const item = cartItems.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            Storage.saveCart(cartItems);
            Cart.updateUI();
        }
    },

    // Ürün miktarını azalt
    decreaseQuantity: (productId) => {
        const item = cartItems.find(item => item.id === productId);
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                Cart.removeItem(productId);
                return;
            }
            Storage.saveCart(cartItems);
            Cart.updateUI();
        }
    },

    // Sepeti temizle
    clearCart: () => {
        cartItems = [];
        Storage.saveCart(cartItems);
        Cart.updateUI();
        Cart.showNotification('Sepet temizlendi.');
    },

    // Toplam fiyatı hesapla
    getTotal: () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    // Toplam ürün sayısını getir
    getTotalItems: () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    },

    // Sepet UI'ını güncelle
    updateUI: () => {
        Cart.updateBadge();
        Cart.renderCartItems();
        Cart.updateTotal();
    },

    // Badge'i güncelle
    updateBadge: () => {
        const badge = document.getElementById('cartBadge');
        if (badge) {
            const totalItems = Cart.getTotalItems();
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    },

    // Sepet öğelerini render et
    renderCartItems: () => {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-message">
                    <p>Sepetiniz boş</p>
                </div>
            `;
            return;
        }

        cartItemsContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}₺</div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                        <button class="remove-btn" data-id="${item.id}">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Event listener'ları ekle
        Cart.attachCartEventListeners();
    },

    // Sepet event listener'larını ekle
    attachCartEventListeners: () => {
        // Artır butonları
        document.querySelectorAll('.increase-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                Cart.increaseQuantity(productId);
            });
        });

        // Azalt butonları
        document.querySelectorAll('.decrease-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                Cart.decreaseQuantity(productId);
            });
        });

        // Sil butonları
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                Cart.removeItem(productId);
            });
        });
    },

    // Toplamı güncelle
    updateTotal: () => {
        const totalElement = document.getElementById('cartTotal');
        if (totalElement) {
            totalElement.textContent = `${Cart.getTotal()}₺`;
        }
    },

    // Sepeti aç/kapat
    toggleSidebar: () => {
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar) {
            sidebar.classList.toggle('active');
        }
    },

    // Bildirim göster
    showNotification: (message) => {
        // Basit bir alert yerine daha profesyonel bir bildirim sistemi
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #f3500a, #d92200);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(243, 80, 10, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-weight: 600;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
};

// Sayfa yüklendiğinde sepeti başlat
document.addEventListener('DOMContentLoaded', () => {
    Cart.init();

    // Sepet butonuna tıklama
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => Cart.toggleSidebar());
    }

    // Sepet kapatma butonu
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', () => Cart.toggleSidebar());
    }

    // Checkout butonu
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cartItems.length === 0) {
                Cart.showNotification('Sepetiniz boş!');
                return;
            }
            Cart.showNotification('Siparişiniz alındı! Teşekkür ederiz.');
            setTimeout(() => {
                Cart.clearCart();
                Cart.toggleSidebar();
            }, 1500);
        });
    }
});

// Animasyonlar için CSS ekle
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
