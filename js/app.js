// ================================================
// APP.JS - Ana Uygulama
// ================================================

// Uygulama durumu
const App = {
    // Uygulamayı başlat
    init: async () => {
        console.log('🚀 Puky Butik başlatılıyor...');
        
        // Ürünleri yükle
        await Products.loadProducts();
        
        // Sepeti başlat
        Cart.init();
        
        // Favorileri başlat
        Favorites.init();
        
        // Filtreleri başlat
        Filters.init();
        
        // Modal event listener'larını ekle
        App.setupModalListeners();
        
        // Mobil menüyü ayarla
        App.setupMobileMenu();
        
        console.log('✅ Puky Butik başarıyla yüklendi!');
    },

    // Modal event listener'larını ayarla
    setupModalListeners: () => {
        const modal = document.getElementById('productModal');
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('modalOverlay');

        // Modal kapatma butonu
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // Overlay'e tıklama
        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // ESC tuşu ile kapatma
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    },

    // Mobil menüyü ayarla
    setupMobileMenu: () => {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.querySelector('.nav');

        if (mobileMenuBtn && nav) {
            mobileMenuBtn.addEventListener('click', () => {
                nav.classList.toggle('active');
                
                // Hamburger animasyonu
                const spans = mobileMenuBtn.querySelectorAll('span');
                if (nav.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });

            // Menü dışına tıklanınca kapat
            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    nav.classList.remove('active');
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });

            // Menü linklerine tıklanınca kapat (mobilde)
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        nav.classList.remove('active');
                        const spans = mobileMenuBtn.querySelectorAll('span');
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                });
            });
        }
    }
};

// Sayfa yüklendiğinde uygulamayı başlat
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Sayfa yüklenme durumunu göster
window.addEventListener('load', () => {
    console.log('🎉 Sayfa tamamen yüklendi!');
});

// Hata yakalama
window.addEventListener('error', (e) => {
    console.error('❌ Hata:', e.error);
});

// Promise hataları için
window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Promise hatası:', e.reason);
});
