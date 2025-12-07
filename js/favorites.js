// ================================================
// FAVORITES.JS - Favori Yönetimi
// ================================================

let favoriteItems = [];

const Favorites = {
    // Favorileri başlat
    init: () => {
        favoriteItems = Storage.getFavorites();
        Favorites.updateUI();
    },

    // Favorilere ekle/çıkar (toggle)
    toggle: (productId) => {
        const index = favoriteItems.indexOf(productId);

        if (index > -1) {
            // Favorilerden çıkar
            favoriteItems.splice(index, 1);
            Favorites.showNotification('Favorilerden çıkarıldı.');
        } else {
            // Favorilere ekle
            favoriteItems.push(productId);
            Favorites.showNotification('Favorilere eklendi!');
        }

        Storage.saveFavorites(favoriteItems);
        Favorites.updateUI();

        // Tüm favori butonlarını güncelle
        Favorites.updateAllFavoriteButtons();
    },

    // Ürünün favori olup olmadığını kontrol et
    isFavorite: (productId) => {
        return favoriteItems.includes(productId);
    },

    // Favorileri temizle
    clearFavorites: () => {
        favoriteItems = [];
        Storage.saveFavorites(favoriteItems);
        Favorites.updateUI();
        Favorites.updateAllFavoriteButtons();
        Favorites.showNotification('Favoriler temizlendi.');
    },

    // Favori UI'ını güncelle
    updateUI: () => {
        Favorites.updateBadge();
        Favorites.renderFavoriteItems();
    },

    // Badge'i güncelle
    updateBadge: () => {
        const badge = document.getElementById('favoritesBadge');
        if (badge) {
            const totalFavorites = favoriteItems.length;
            badge.textContent = totalFavorites;
            badge.style.display = totalFavorites > 0 ? 'flex' : 'none';
        }
    },

    // Favori öğelerini render et
    renderFavoriteItems: () => {
        const favoritesContainer = document.getElementById('favoritesItems');
        if (!favoritesContainer) return;

        if (favoriteItems.length === 0) {
            favoritesContainer.innerHTML = `
                <div class="empty-message">
                    <p>Favori ürününüz yok</p>
                </div>
            `;
            return;
        }

        const favoriteProducts = favoriteItems
            .map(id => Products.getProductById(id))
            .filter(product => product !== undefined);

        favoritesContainer.innerHTML = favoriteProducts.map(product => `
            <div class="favorite-item">
                <img src="${product.image}" alt="${product.name}" class="favorite-item-image">
                <div class="favorite-item-details">
                    <div class="favorite-item-name">${product.name}</div>
                    <div class="cart-item-price">${product.price}₺</div>
                    <div style="display: flex; gap: 8px; margin-top: 8px;">
                        <button class="add-to-cart-btn" data-id="${product.id}" style="font-size: 0.85rem; padding: 6px 12px;">
                            Sepete Ekle
                        </button>
                        <button class="remove-btn" data-id="${product.id}" title="Favorilerden çıkar">
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
        Favorites.attachFavoriteEventListeners();
    },

    // Favori event listener'larını ekle
    attachFavoriteEventListeners: () => {
        // Sepete ekle butonları
        document.querySelectorAll('#favoritesItems .add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                Cart.addItem(productId);
            });
        });

        // Favorilerden çıkar butonları
        document.querySelectorAll('#favoritesItems .remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.dataset.id);
                Favorites.toggle(productId);
            });
        });
    },

    // Tüm favori butonlarını güncelle (sayfadaki tüm ürün kartlarında)
    updateAllFavoriteButtons: () => {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const productId = parseInt(btn.dataset.id);
            if (Favorites.isFavorite(productId)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    // Favoriler sidebar'ını aç/kapat
    toggleSidebar: () => {
        const sidebar = document.getElementById('favoritesSidebar');
        if (sidebar) {
            sidebar.classList.toggle('active');
        }
    },

    // Bildirim göster
    showNotification: (message) => {
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

// Sayfa yüklendiğinde favorileri başlat
document.addEventListener('DOMContentLoaded', () => {
    Favorites.init();

    // Favoriler butonuna tıklama
    const favoritesBtn = document.getElementById('favoritesBtn');
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', () => Favorites.toggleSidebar());
    }

    // Favoriler kapatma butonu
    const favoritesClose = document.getElementById('favoritesClose');
    if (favoritesClose) {
        favoritesClose.addEventListener('click', () => Favorites.toggleSidebar());
    }
});
