<!--  HTML dizesine bir göz atın. Buradaki görevinizin bir kısmı Html'i JSX'e "çevirmektir". Yüzeyde HTML ve JSX oldukça benzerdir, bu nedenle yapmanız gereken yalnızca bazı küçük değişiklikler vardır.

DOM metotları aracılığıyla DOM'da oluşturulan ve eklenen öğeler için de benzer bir "çeviri" yapmanız gerekir. Bu elementleri önce HTML olarak hayal etmek ve sonra "çevirmek" yardımcı olabilir.

React ile sayfaya herhangi bir şey işlemek için ReactDOM.createRoot() ve .render() fonksiyonlarını kullanmanız gerekir. Bunlar da bir " root " DOM node'u gerektirir.

Daha fazla bilgi için React dokümanlarına bakın:
https://react.dev/reference/react-dom/client/createRoot


SPOILER UYARISI!🚨

⬇️ Bu ipucunu ortaya çıkarmak için 60. satıra kaydırın ⬇️














































Bu siteyi normal bir tarayıcıda açıp geliştirme araçlarında incelerseniz, sayfanın gövdesi için aşağıdaki yapıyı görürsünüz:

<body>
  <header>
    <div class="button-container">
      <button>Menu</button>
      <button>Hakkında</button>
      <button>Saatler &amp; Lokasyon</button>
    </div>
  </header>
  <main>
    <h1 class="logo-container">Basit Yemekler Restoranı</h1>
    <p class="info-container">Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz? Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.</p>
    <div class="image-container">
      <div class="image-wrapper">
        <img class="hot-dog" src="images/hotdogs.jpg">
      </div>
      <div class="image-wrapper">
        <img src="images/sandwich.jpg">
      </div>
      <div class="image-wrapper">
        <img src="images/hamburger.jpg">
      </div>
    </div>
  </main>
  <footer>
    <p>
      Made by <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Coding Company</a>â„¢.
    </p>
  </footer>

</body>


İşte bir örnek:

    function Example(){
        return (
            <div>
                <p>İpucuna hoş geldiniz</p>
                <AnotherExample />
            </div>
        )
    }

    Yukarıdaki kodda, Example fonksiyonel bir React bileşenidir (React fonksiyon bileşeni olarak da bilinir). Eğer bunu bir yerde kullanmak isteseydik, JSX kullanarak <Example /> şeklinde yazardık.

    <div> ve <p> elementlerdir. Elementler bileşenlerin yapı taşlarıdır.

Bileşenler başka bileşenlerden de oluşturulabilir. <AnotherExample /> bunun bir örneğidir. Başka bir bileşenin (yani <Example />) içinde yaşayan bir bileşendir.

React kodunun, bileşenlerin içine elementler yerleştirilerek modüler veya birleştirilebilir hale getirilebileceğini unutmayın. Bu bileşenler daha sonra ayrı dosyalar halinde düzenlenebilir ve bunlar istenildiği gibi içe ve dışa aktarılabilir.


Bonus Challenge

Footer'daki linki ve ismi özelleştirin.

Butonları fonksiyonel hale getirin.

Resim galerisini daha gelişmiş hale getirin.

Sayfayı daha responsive hale getirin.

Sayfayı erişilebilir hale getirin.

Sayfanın yapısını ve içeriğini korurken tasarımı değiştirin.

Sayfanın yapısını koruyun ancak temayı, içeriği ve stili değiştirin.
    - Sayfayı farklı bir ürün, hizmet, şirket, organizasyon, amaç veya kişisel profil hakkında yapın.
    - Ciddi veya komik olabilir.

Kendi bonus görevinizi oluşturabilirsiniz


 -->
