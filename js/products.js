// ================================================
// PRODUCTS.JS - Ürün Yönetimi
// ================================================

let allProducts = [];
let filteredProducts = [];

const Products = {
    // Ürünleri JSON'dan yükle (fetch API ile async/await kullanarak)
    loadProducts: async () => {
        try {
            const response = await fetch('data/products.json');
            
            if (!response.ok) {
                throw new Error('Ürünler yüklenemedi');
            }
            
            const data = await response.json();
            allProducts = data.products;
            filteredProducts = [...allProducts];
            
            Products.renderProducts(filteredProducts);
            Products.updateProductCount(filteredProducts.length);
            
            return allProducts;
        } catch (error) {
            console.error('Ürün yükleme hatası:', error);
            Products.showError('Ürünler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
            return [];
        }
    },

    // Ürünleri grid'e render et
    renderProducts: (products) => {
        const grid = document.getElementById('productsGrid');
        
        if (!grid) return;
        
        if (products.length === 0) {
            grid.innerHTML = `
                <div class="empty-message">
                    <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = products.map(product => `
            <article class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <button class="favorite-btn ${Favorites.isFavorite(product.id) ? 'active' : ''}" 
                            data-id="${product.id}" 
                            aria-label="Favorilere ekle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <span class="product-category">${Products.getCategoryName(product.category)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">${product.price}₺</span>
                        <button class="add-to-cart-btn" data-id="${product.id}">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
        
        // Event listener'ları ekle
        Products.attachEventListeners();
    },

    // Event listener'ları ekle
    attachEventListeners: () => {
        // Ürün kartlarına tıklama
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Eğer favori veya sepet butonuna tıklanmışsa modal açılmasın
                if (e.target.closest('.favorite-btn') || e.target.closest('.add-to-cart-btn')) {
                    return;
                }
                const productId = parseInt(card.dataset.id);
                Products.openProductModal(productId);
            });
        });
        
        // Favori butonlarına tıklama
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.id);
                Favorites.toggle(productId);
            });
        });
        
        // Sepete ekle butonlarına tıklama
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.dataset.id);
                Cart.addItem(productId);
            });
        });
    },

    // Ürün detay modal'ını aç
    openProductModal: (productId) => {
        const product = allProducts.find(p => p.id === productId);
        if (!product) return;
        
        const modal = document.getElementById('productModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="modal-body">
                <div>
                    <img src="${product.image}" alt="${product.name}" class="modal-image">
                </div>
                <div class="modal-details">
                    <span class="modal-category">${Products.getCategoryName(product.category)}</span>
                    <h2 class="modal-title">${product.name}</h2>
                    <p class="modal-price">${product.price}₺</p>
                    <p class="modal-description">${product.description}</p>
                    
                    <div>
                        <h4>Bedenler:</h4>
                        <div class="modal-sizes">
                            ${product.sizes.map((size, index) => `
                                <button class="size-btn ${index === 0 ? 'active' : ''}" data-size="${size}">${size}</button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h4>Mevcut Renkler:</h4>
                        <p>${product.colors.join(', ')}</p>
                    </div>
                    
                    <div class="modal-actions">
                        <button class="add-to-cart-btn" data-id="${product.id}">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Sepete Ekle
                        </button>
                        <button class="favorite-btn ${Favorites.isFavorite(product.id) ? 'active' : ''}" data-id="${product.id}">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        
        // Beden seçimi
        modalBody.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                modalBody.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
        
        // Modal içindeki sepete ekle butonu
        const addToCartBtn = modalBody.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                Cart.addItem(productId);
            });
        }
        
        // Modal içindeki favori butonu
        const favoriteBtn = modalBody.querySelector('.favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', () => {
                Favorites.toggle(productId);
                favoriteBtn.classList.toggle('active');
            });
        }
    },

    // Ürün sayısını güncelle
    updateProductCount: (count) => {
        const countElement = document.getElementById('productsCount');
        if (countElement) {
            countElement.textContent = count;
        }
    },

    // Kategori adını Türkçe'ye çevir
    getCategoryName: (category) => {
        const categories = {
            'kadin': 'Kadın',
            'erkek': 'Erkek',
            'aksesuar': 'Aksesuar'
        };
        return categories[category] || category;
    },

    // Hata mesajı göster
    showError: (message) => {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="empty-message">
                    <p style="color: #d92200;">${message}</p>
                </div>
            `;
        }
    },

    // ID'ye göre ürün getir
    getProductById: (id) => {
        return allProducts.find(p => p.id === id);
    },

    // Tüm ürünleri getir
    getAllProducts: () => allProducts,

    // Filtrelenmiş ürünleri getir
    getFilteredProducts: () => filteredProducts,

    // Filtrelenmiş ürünleri ayarla
    setFilteredProducts: (products) => {
        filteredProducts = products;
        Products.renderProducts(filteredProducts);
        Products.updateProductCount(filteredProducts.length);
    }
};
