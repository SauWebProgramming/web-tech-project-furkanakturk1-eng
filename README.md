# 🛍️ PUKY BUTIK - Modern E-Ticaret Web Uygulaması

![Puky Butik](https://img.shields.io/badge/Puky-Butik-f3500a?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 📖 Proje Hakkında

Puky Butik, modern web teknolojileri kullanılarak geliştirilmiş, tamamen istemci taraflı (client-side) çalışan bir e-ticaret web uygulamasıdır. Bu proje, ISE-201 Web Teknolojileri dersi kapsamında hazırlanmıştır.

### 🎯 Proje Amacı

Bu proje, modern istemci tarafı web teknolojilerini kullanarak sıfırdan interaktif bir web uygulaması geliştirmeyi amaçlar. Uygulama, HTML5, CSS3 ve modern JavaScript (ES6+) kullanarak dinamik arayüzler oluşturur, fetch API'si ile yerel JSON dosyasından veri çeker ve localStorage kullanarak kullanıcı verilerini yönetir.

## ✨ Özellikler

### 🛒 E-Ticaret Özellikleri
- **Ürün Kataloğu**: 12 adet butik ürün grid görünümünde
- **Ürün Detayı**: Modal ile dinamik ürün detay sayfası (SPA mantığı)
- **Sepet Sistemi**: Ürün ekleme, çıkarma, miktar güncelleme
- **Favoriler**: localStorage ile kalıcı favori ürün yönetimi

### 🔍 Filtreleme ve Arama
- **Canlı Arama**: Gerçek zamanlı ürün arama
- **Kategori Filtresi**: Kadın, Erkek, Aksesuar
- **Fiyat Filtresi**: Fiyat aralıklarına göre filtreleme

### 📱 Responsive Tasarım
- Mobil, tablet ve desktop uyumlu
- Hamburger menü (mobil cihazlarda)
- Esnek grid yapısı

### 🎨 Modern UI/UX
- Özel renk paleti (#f3500a, #d92200, #f37100, #ffffff)
- Smooth animasyonlar ve geçişler
- Hover efektleri
- Gradient arka planlar

## 🛠️ Kullanılan Teknolojiler

### Frontend
- **HTML5**: Semantic etiketler (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`)
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables (Custom Properties)
  - Media Queries (Responsive Design)
  - Animasyonlar ve Transitions
  - Gradient efektleri
- **JavaScript ES6+**:
  - `const` ve `let` (var kullanılmadı)
  - Arrow Functions (`=>`)
  - `async/await` ve Promises
  - Template Literals
  - Spread Operator
  - Array Methods (map, filter, reduce)
  - Destructuring

### Web API'leri
- **Fetch API**: JSON verilerini asenkron olarak yükleme
- **localStorage**: Sepet ve favori verilerini tarayıcıda saklama
- **DOM Manipulation**: Dinamik içerik oluşturma

### Proje Yapısı
```
web-tekno/
├── index.html              # Ana HTML dosyası
├── css/
│   └── style.css          # Tüm stiller (responsive dahil)
├── js/
│   ├── app.js             # Ana uygulama mantığı
│   ├── products.js        # Ürün yönetimi ve render
│   ├── cart.js            # Sepet işlemleri
│   ├── favorites.js       # Favori işlemleri
│   ├── filters.js         # Arama ve filtreleme
│   └── storage.js         # localStorage yönetimi
├── data/
│   └── products.json      # Ürün verileri
└── README.md              # Proje dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)
- Yerel sunucu (Live Server, Python HTTP Server vb.) veya GitHub Pages

### Yerel Olarak Çalıştırma

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/[kullanici-adi]/web-tekno.git
cd web-tekno
```

2. **Yerel sunucu başlatın:**

**VS Code Live Server ile:**
- VS Code'da projeyi açın
- `index.html` dosyasına sağ tıklayın
- "Open with Live Server" seçeneğini seçin

**Python ile:**
```bash
python -m http.server 8000
```
Tarayıcıda `http://localhost:8000` adresini açın.

**Node.js http-server ile:**
```bash
npx http-server
```

3. **Tarayıcıda açın:**
```
http://localhost:8000
```

### GitHub Pages ile Yayınlama

1. Repository'yi GitHub'a push edin
2. Repository Settings > Pages
3. Source: `main` branch seçin
4. Save butonuna tıklayın
5. Siteniz `https://[kullanici-adi].github.io/web-tekno/` adresinde yayında!

## 📝 Ödev Gereksinimleri

### ✅ Karşılanan Teknik Gereksinimler

- [x] **Platform**: Tamamen statik HTML, CSS ve JavaScript
- [x] **Semantic HTML5**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- [x] **Mimari**: HTML/CSS/JS dosyaları net bir şekilde ayrılmış (inline style/script yok)
- [x] **Veri Yönetimi**: Yerel JSON dosyası + localStorage
- [x] **Responsive Design**: Mobil, tablet ve masaüstü uyumlu
- [x] **CSS Layout**: Flexbox ve Grid kullanımı
- [x] **Modern JavaScript**: ES6+ özellikleri (const, let, arrow functions, async/await)
- [x] **fetch API**: Asenkron veri yükleme
- [x] **localStorage**: Sepet ve favori verilerinin kalıcı saklanması

### 🎯 Uygulanan Özellikler

#### SPA (Single Page Application) Özellikleri
- ✅ Liste/Grid görünümü
- ✅ Arama ve filtreleme
- ✅ Dinamik detay sayfası (modal - sayfa yenilenmeden)
- ✅ Favoriler sistemi (localStorage)
- ✅ Sepet sistemi (localStorage)

#### Ek Özellikler
- ✅ Responsive hamburger menü
- ✅ Smooth animasyonlar
- ✅ Bildirim sistemi
- ✅ Badge sistemleri (sepet ve favori sayacı)
- ✅ Miktar kontrolü (+ / - butonları)

## 💻 Kod Yapısı

### JavaScript Modülleri

#### 1. **app.js** - Ana Uygulama
```javascript
// Uygulamayı başlatır
// Modal ve mobil menü event listener'larını ayarlar
```

#### 2. **products.js** - Ürün Yönetimi
```javascript
// fetch API ile ürünleri yükler
// Ürün kartlarını render eder
// Ürün detay modalını yönetir
```

#### 3. **cart.js** - Sepet Yönetimi
```javascript
// Sepete ürün ekleme/çıkarma
// Miktar güncelleme
// localStorage ile kalıcılık
```

#### 4. **favorites.js** - Favori Yönetimi
```javascript
// Favorilere ekleme/çıkarma
// localStorage ile kalıcılık
// UI güncelleme
```

#### 5. **filters.js** - Filtreleme
```javascript
// Canlı arama
// Kategori filtresi
// Fiyat aralığı filtresi
```

#### 6. **storage.js** - localStorage Yönetimi
```javascript
// Sepet ve favori verilerini yönetir
// Get/Set/Clear işlemleri
```

## 🎨 Renk Paleti

```css
--primary-color: #f3500a;    /* Ana turuncu */
--primary-dark: #d92200;     /* Koyu turuncu */
--primary-light: #f37100;    /* Açık turuncu */
--white: #ffffff;            /* Beyaz */
```

## 📱 Responsive Breakpoints

```css
/* Desktop: 1200px+ */
/* Tablet: 768px - 1199px */
/* Mobile: < 768px */
```

## 🔧 JavaScript Özellikleri

### ES6+ Kullanımı
```javascript
// Arrow Functions
const addToCart = (productId) => { ... }

// async/await
const loadProducts = async () => {
    const response = await fetch('data/products.json');
    const data = await response.json();
}

// Template Literals
`<div class="product">${product.name}</div>`

// Destructuring
const { id, name, price } = product;

// Spread Operator
const newArray = [...oldArray];

// Array Methods
products.filter(p => p.price > 500)
       .map(p => p.name)
       .reduce((sum, price) => sum + price, 0)
```

## 🌟 Bonus Özellikler

- ✅ Gelişmiş CSS animasyonları (fadeIn, slideUp, hover efektleri)
- ✅ Custom notification sistemi
- ✅ Smooth scroll
- ✅ Gradient arka planlar
- ✅ Shadow efektleri
- ✅ Backdrop blur efektleri
- ✅ Responsive images (lazy loading)

## 📊 Performans Optimizasyonları

- Lazy loading için `loading="lazy"` attribute kullanımı
- CSS animasyonlarda `transform` ve `opacity` kullanımı (GPU hızlandırma)
- Event delegation kullanımı
- LocalStorage ile veri kalıcılığı

## 🐛 Hata Yönetimi

- try-catch blokları ile error handling
- Console'da detaylı hata mesajları
- Kullanıcı dostu bildirimler

## 📚 Öğrenilen Konular

1. **HTML5 Semantic Tags**: Anlamsal etiketlerle yapılandırılmış içerik
2. **CSS Grid & Flexbox**: Modern layout teknikleri
3. **Responsive Design**: Media queries ve mobile-first yaklaşım
4. **JavaScript ES6+**: Modern JavaScript özellikleri
5. **Async Programming**: Promises ve async/await
6. **Web APIs**: fetch, localStorage, DOM API
7. **SPA Mantığı**: Sayfa yenilenmeden dinamik içerik güncelleme
8. **State Management**: Uygulama durumu yönetimi
9. **Event Handling**: Kullanıcı etkileşimleri
10. **Git & GitHub**: Versiyon kontrolü

## 👨‍💻 Geliştirici

**[Adınız Soyadınız]**
- Öğrenci No: [Öğrenci Numaranız]
- Email: [Email Adresiniz]

## 📄 Lisans

Bu proje eğitim amaçlı hazırlanmıştır.

## 🙏 Teşekkürler

ISE-201 Web Teknolojileri dersi kapsamında bu projeyi geliştirme fırsatı verdiği için hocama teşekkür ederim.

---

⭐ **Puky Butik** - Modern moda ve stil deneyimi!
