// ================================================
// STORAGE.JS - LocalStorage Yönetimi
// ================================================

const Storage = {
    // Sepet verilerini localStorage'a kaydet
    saveCart: (cart) => {
        try {
            localStorage.setItem('pukyCart', JSON.stringify(cart));
        } catch (error) {
            console.error('Sepet kaydedilemedi:', error);
        }
    },

    // Sepet verilerini localStorage'dan getir
    getCart: () => {
        try {
            const cart = localStorage.getItem('pukyCart');
            return cart ? JSON.parse(cart) : [];
        } catch (error) {
            console.error('Sepet yüklenemedi:', error);
            return [];
        }
    },

    // Favori verilerini localStorage'a kaydet
    saveFavorites: (favorites) => {
        try {
            localStorage.setItem('pukyFavorites', JSON.stringify(favorites));
        } catch (error) {
            console.error('Favoriler kaydedilemedi:', error);
        }
    },

    // Favori verilerini localStorage'dan getir
    getFavorites: () => {
        try {
            const favorites = localStorage.getItem('pukyFavorites');
            return favorites ? JSON.parse(favorites) : [];
        } catch (error) {
            console.error('Favoriler yüklenemedi:', error);
            return [];
        }
    },

    // Tüm verileri temizle
    clearAll: () => {
        try {
            localStorage.removeItem('pukyCart');
            localStorage.removeItem('pukyFavorites');
        } catch (error) {
            console.error('Veriler temizlenemedi:', error);
        }
    }
};
