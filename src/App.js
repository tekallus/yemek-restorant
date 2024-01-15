import React, { useState } from "react";
import "./styles.css";
//react yapisi function App() { return ();} seklindedir
//  return (
//<div>
//<header>...</header>
// <main>
// <h1>...</h1>
// {/* Diğer JSX elemanları */}
//  </main>
//{/* Footer JSX elemanları */}
//</div> ); yapisiyla 1. maddeyi tamamlarken asagidaki duzenlemeleride yapalim
//JavaScript ve HTML tabanlı kodunuzu React ile uyumlu hale getirmek için
//stil eklerken class yerine className kullanıldi
//<img> elemanlarına alt özelliği eklendi
//tarayıcı penceresinin açılmasını güvenli bir şekilde kontrol etmek icin target="_blank" kullanırken rel="noopener  eklendi
//document.body.innerHTML = header;
//document.body.appendChild(mainElement); yapisi yerine :ReactDOM.render(<App />, document.getElementById("root"));
// Bu değişikliklerle, sayfamiz React'a uygun bir şekile dönüştürmüş olacak
function App() {
  // kullanilacak stateleri tanimlayalim
  const [menuListVisible, setMenuListVisible] = useState(false);
  const [aboutMessageVisible, setAboutMessageVisible] = useState(false);
  const [
    hoursLocationMessageVisible,
    setHoursLocationMessageVisible
  ] = useState(false);
  // Menü butonuna tıklandığında çalışacak fonksiyon
  const handleMenuClick = () => {
    console.log("Menü butonuna tıklandı!");
    setMenuListVisible(!menuListVisible);
    // Menü butonuna tıklandığında aboutMessage'i gizle
    setAboutMessageVisible(false);
    setHoursLocationMessageVisible(false);
  };

  // Hakkında butonuna tıklandığında çalışacak fonksiyon
  const handleAboutClick = () => {
    console.log("Hakkında butonuna tıklandı!");
    setAboutMessageVisible(!aboutMessageVisible);
    // Hakkında butonuna tıklandığında menuList'i gizle
    setMenuListVisible(false);
    setHoursLocationMessageVisible(false);
  };

  // Saatler & Lokasyon butonuna tıklandığında çalışacak fonksiyon
  const handleHoursLocationClick = () => {
    console.log("Saatler & Lokasyon butonuna tıklandı!");
    setHoursLocationMessageVisible(!hoursLocationMessageVisible);
    // Saatler & Lokasyon butonuna tıklandığında aboutMessage'i gizle
    setAboutMessageVisible(false);
    // Saatler & Lokasyon butonuna tıklandığında menuList'i gizle
    setMenuListVisible(false);
  };
  //Klavye olaylarını dinleyerek butonları belirli klavye tuşlarına bağlayalim
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Enter tuşuyla butonları tıklama işlemi
      handleMenuClick();
    }
    // Diğer tuşları dinlemek için gerekli kontrolleri ekleyebilirsiniz.
  };

  return (
    <div className="container">
      <header>
        <div className="button-container">
          <button
            tabindex="0"
            onClick={handleMenuClick}
            onKeyPress={handleKeyPress}
          >
            Menu
          </button>
          <button
            tabindex="0"
            onClick={handleAboutClick}
            onKeyPress={handleKeyPress}
          >
            Hakkında
          </button>
          <button
            tabindex="0"
            onClick={handleHoursLocationClick}
            onKeyPress={handleKeyPress}
          >
            Saatler & Lokasyon
          </button>
        </div>
      </header>

      <main>
        <h1 className="logo-container">Lezzetli Yemekler Restoranı</h1>
        <p className="info-container">
          Deneyimli aşçılarımız tarafından hazırlanan lezzetli yemekleri
          keşfedin.
        </p>
        {/* Menü listesini görüntülemek icin bir sart ifadesi yazalim{setuseState && ()} */}
        {menuListVisible && (
          <div className="image-container">
            <div className="image-wrapper">
              <img
                className="hot-dog"
                src="images/hotdogs.jpg"
                alt="Lezzetli sosisli sandviç"
              />
            </div>
            <div className="image-wrapper">
              <img src="images/sandwich.jpg" alt="Enfes Sandwich " />
            </div>
            <div className="image-wrapper">
              <img src="images/hamburger.jpg" alt="Harkulade Hamburger " />
            </div>
          </div>
        )}
        {/* Hakkında butonuna tıklandığında gösterilecek mesaj */}
        {aboutMessageVisible && (
          <div className="about-message">
            Yılların tecrübesi ve lezzet dolu bir hikaye.
          </div>
        )}
        {hoursLocationMessageVisible && (
          <div className="hours-location-message">
            <p>Her gün 11:00 - 22:00 arasında açığız.</p>
            <p>Lokasyonumuz: Şehir Merkezi, Lezzetli Sokak No: 1</p>
            <p>Rezervasyon için: 123 456 7890</p>
          </div>
        )}
      </main>
      <footer>
        <p>
          Made by{" "}
          <a href="https://www.youtube.com/watch?v=CEMj7qPuhuc" target="_blank">
            Lezzetli Yemekler
          </a>
          ™.
        </p>
      </footer>
    </div>
  );
}

export default App;
