// ================================================
// FILTERS.JS - Arama ve Filtreleme
// ================================================

const Filters = {
    // Mevcut filtreler
    currentFilters: {
        search: '',
        category: 'all',
        priceRange: 'all'
    },

    // Filtreleri başlat
    init: () => {
        Filters.attachEventListeners();
    },

    // Event listener'ları ekle
    attachEventListeners: () => {
        // Arama inputu
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                Filters.currentFilters.search = e.target.value.toLowerCase();
                Filters.applyFilters();
            });
        }

        // Kategori filtresi
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                Filters.currentFilters.category = e.target.value;
                Filters.applyFilters();
            });
        }

        // Fiyat filtresi
        const priceFilter = document.getElementById('priceFilter');
        if (priceFilter) {
            priceFilter.addEventListener('change', (e) => {
                Filters.currentFilters.priceRange = e.target.value;
                Filters.applyFilters();
            });
        }

        // Filtreleri temizle butonu
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                Filters.resetFilters();
            });
        }

        // Navigasyon linkleri (kategoriler)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Aktif sınıfını güncelle
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Kategori filtresini uygula
                const category = link.dataset.filter;
                Filters.currentFilters.category = category;
                
                // Select'i de güncelle
                const categorySelect = document.getElementById('categoryFilter');
                if (categorySelect) {
                    categorySelect.value = category;
                }
                
                Filters.applyFilters();
            });
        });
    },

    // Filtreleri uygula
    applyFilters: () => {
        const allProducts = Products.getAllProducts();
        
        let filtered = [...allProducts];

        // Arama filtresi
        if (Filters.currentFilters.search) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(Filters.currentFilters.search) ||
                product.description.toLowerCase().includes(Filters.currentFilters.search) ||
                product.category.toLowerCase().includes(Filters.currentFilters.search)
            );
        }

        // Kategori filtresi
        if (Filters.currentFilters.category !== 'all') {
            filtered = filtered.filter(product => 
                product.category === Filters.currentFilters.category
            );
        }

        // Fiyat filtresi
        if (Filters.currentFilters.priceRange !== 'all') {
            filtered = Filters.filterByPrice(filtered, Filters.currentFilters.priceRange);
        }

        // Filtrelenmiş ürünleri render et
        Products.setFilteredProducts(filtered);
    },

    // Fiyata göre filtrele
    filterByPrice: (products, priceRange) => {
        switch (priceRange) {
            case '0-500':
                return products.filter(p => p.price < 500);
            case '500-1000':
                return products.filter(p => p.price >= 500 && p.price < 1000);
            case '1000-2000':
                return products.filter(p => p.price >= 1000 && p.price < 2000);
            case '2000+':
                return products.filter(p => p.price >= 2000);
            default:
                return products;
        }
    },

    // Filtreleri sıfırla
    resetFilters: () => {
        // Filtreleri temizle
        Filters.currentFilters = {
            search: '',
            category: 'all',
            priceRange: 'all'
        };

        // Input ve select'leri sıfırla
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';

        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) categoryFilter.value = 'all';

        const priceFilter = document.getElementById('priceFilter');
        if (priceFilter) priceFilter.value = 'all';

        // Navigasyon linklerini güncelle
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.filter === 'all') {
                link.classList.add('active');
            }
        });

        // Filtreleri uygula
        Filters.applyFilters();
    }
};

// Sayfa yüklendiğinde filtreleri başlat
document.addEventListener('DOMContentLoaded', () => {
    Filters.init();
});
