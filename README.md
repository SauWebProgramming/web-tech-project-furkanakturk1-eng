# PUKY BUTIK - E-Ticaret Web Uygulaması

## Proje Hakkında

Bu proje, ISE-201 Web Teknolojileri dersi kapsamında geliştirilmiş bir e-ticaret web uygulamasıdır. Uygulama tamamen istemci taraflı çalışmakta olup, herhangi bir sunucu tarafı teknolojisi kullanılmamıştır.

### Proje Amacı

Proje kapsamında HTML5, CSS3 ve modern JavaScript (ES6+) kullanarak dinamik bir web uygulaması geliştirilmiştir. Uygulama, fetch API ile veri yönetimi ve localStorage ile kalıcı veri saklama özelliklerini içermektedir.

## Ana Özellikler

### E-Ticaret İşlevleri
- 12 adet ürün içeren katalog sistemi
- Modal yapısı ile ürün detay görüntüleme
- Sepet yönetimi (ekleme, çıkarma, miktar güncelleme)
- Favori ürünler sistemi (localStorage ile kalıcı)

### Filtreleme ve Arama
- Gerçek zamanlı ürün arama
- Kategori bazlı filtreleme (Kadın, Erkek, Aksesuar)
- Fiyat aralığına göre filtreleme

### Tasarım Özellikleri
- Responsive tasarım (mobil, tablet, desktop)
- Flexbox ve CSS Grid layout kullanımı
- Animasyon ve geçiş efektleri
- Özel renk paleti (#f3500a, #d92200, #f37100)

## Kullanılan Teknolojiler

### HTML5
Projede semantic HTML5 etiketleri kullanılmıştır:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- Form elementleri ve doğrulama özellikleri

### CSS3
- Flexbox ve Grid Layout sistemleri
- CSS Variables (özel özellikler)
- Media Queries ile responsive tasarım
- Animasyonlar ve transition efektleri
- Gradient ve shadow kullanımı

### JavaScript (ES6+)
Projede modern JavaScript özellikleri kullanılmıştır:
- const ve let değişken tanımlamaları
- Arrow function yapısı
- async/await ile asenkron programlama
- Template literals
- Spread operator
- Array metodları (map, filter, reduce)
- Destructuring

### Web API'leri
- Fetch API: JSON dosyasından veri çekme
- localStorage: Tarayıcıda veri saklama
- DOM API: Dinamik içerik yönetimi

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

## Kurulum ve Çalıştırma

### Gereksinimler
- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)
- Yerel sunucu (Live Server, Python HTTP Server vb.)

### Yerel Çalıştırma

Projeyi klonlayın:
```bash
git clone https://github.com/SauWebProgramming/web-tech-project-furkanakturk1-eng.git
cd web-tech-project-furkanakturk1-eng
```

Yerel sunucu başlatın:

VS Code Live Server ile:
- Projeyi VS Code'da açın
- index.html dosyasına sağ tıklayın
- "Open with Live Server" seçeneğini seçin

veya Python ile:
```bash
python -m http.server 8000
```

Tarayıcıda açın:
```
http://localhost:8000
```

## Teknik Gereksinimler

Proje aşağıdaki gereksinimleri karşılamaktadır:

- Tamamen statik HTML, CSS ve JavaScript kullanımı
- Semantic HTML5 etiketleri
- HTML, CSS ve JS dosyalarının ayrı tutulması
- Yerel JSON dosyası ve localStorage ile veri yönetimi
- Responsive tasarım (mobil, tablet, desktop)
- Flexbox ve Grid layout kullanımı
- Modern JavaScript özellikleri (ES6+)
- fetch API ile asenkron veri yükleme
- localStorage ile kalıcı veri saklama

## Uygulanan Özellikler

### Temel İşlevler
- Grid görünümde ürün listeleme
- Ürün arama ve filtreleme sistemi
- Modal yapısı ile ürün detay görüntüleme
- localStorage ile favori ürün yönetimi
- Sepet sistemi ve miktar kontrolü

### Ek Özellikler
- Mobil cihazlar için hamburger menü
- Animasyon ve geçiş efektleri
- Bildirim sistemi
- Dinamik badge gösterimi
- Sayfa yenilenmeden içerik güncelleme

## Kod Yapısı

Proje modüler bir yapıda organize edilmiştir:

### JavaScript Modülleri

**app.js**: Uygulamanın başlangıç noktası. Modal ve menü işlemlerini yönetir.

**products.js**: Ürün verilerinin yüklenmesi ve görüntülenmesi. fetch API kullanarak JSON dosyasından veri çeker.

**cart.js**: Sepet işlemlerini yönetir. Ürün ekleme, çıkarma ve miktar güncelleme işlemlerini gerçekleştirir.

**favorites.js**: Favori ürünlerin yönetimi. localStorage kullanarak verileri kalıcı hale getirir.

**filters.js**: Arama ve filtreleme işlevlerini içerir. Kategori ve fiyat bazlı filtreleme yapar.

**storage.js**: localStorage işlemlerini merkezi bir yapıda yönetir.

### Renk Paleti

Projede tutarlı bir renk şeması kullanılmıştır:
```css
--primary-color: #f3500a;
--primary-dark: #d92200;
--primary-light: #f37100;
--white: #ffffff;
```

### Responsive Tasarım

Proje üç farklı ekran boyutu için optimize edilmiştir:
- Desktop: 1200px ve üzeri
- Tablet: 768px - 1199px
- Mobil: 768px altı

## JavaScript Özellikleri

Projede modern JavaScript özellikleri kullanılmıştır:

### Arrow Functions
```javascript
const addToCart = (productId) => {
    // Sepete ekleme işlemi
}
```

### Asenkron Programlama
```javascript
const loadProducts = async () => {
    const response = await fetch('data/products.json');
    const data = await response.json();
    return data.products;
}
```

### Template Literals
```javascript
const productCard = `<div class="product">${product.name}</div>`;
```

### Array Metodları
```javascript
const filteredProducts = products
    .filter(p => p.price > 500)
    .map(p => p.name);
```

## Performans

Projede performans için bazı optimizasyonlar yapılmıştır:
- Görseller için lazy loading kullanımı
- CSS animasyonlarında transform ve opacity tercih edilmesi
- Event delegation ile etkin event yönetimi
- localStorage ile veri kalıcılığı

## Geliştirme Süreci

Proje geliştirilirken şu konular üzerinde çalışılmıştır:
- Semantic HTML ile yapılandırılmış içerik oluşturma
- CSS Grid ve Flexbox ile modern layout tasarımı
- Responsive design ve media queries kullanımı
- Modern JavaScript (ES6+) özellikleri
- Asenkron programlama ve Promise yapısı
- Web API'leri (fetch, localStorage, DOM)
- Sayfa yenilenmeden içerik güncelleme
- Git ile versiyon kontrolü

## Lisans

Bu proje ISE-201 Web Teknolojileri dersi kapsamında eğitim amaçlı hazırlanmıştır.
