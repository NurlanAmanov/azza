import React from 'react'
import { Link } from 'react-router-dom';

function Tortlar() {
const cakebanner = "https://mavinxukr.github.io/azza.github.io/images/cake-banner-mob-min.png";
const cake1 = "https://mavinxukr.github.io/azza.github.io/images/cake-1-min.png";
const cake2 = "https://mavinxukr.github.io/azza.github.io/images/cake-2-min.png";
const cake3 = "https://mavinxukr.github.io/azza.github.io/images/cake-3-min.png";
const cake4 = "https://mavinxukr.github.io/azza.github.io/images/cake-4-min.png";
const cake5 = "https://mavinxukr.github.io/azza.github.io/images/cake-5-min.png";
const cake6 = "https://mavinxukr.github.io/azza.github.io/images/cake-6-min.png";
const cake7 = "https://mavinxukr.github.io/azza.github.io/images/cake-7-min.png";
const cakeSlider1 = "https://mavinxukr.github.io/azza.github.io/images/cake-slider1-min.png";
const cakeSlider2 = "https://mavinxukr.github.io/azza.github.io/images/cake-slider2-min.png";
const cakeSlider3 = "https://mavinxukr.github.io/azza.github.io/images/cake-slider3-min.png";
const cakeSlider4 = "https://mavinxukr.github.io/azza.github.io/images/cake-slider4-min.png";
const cakeSlider = "https://mavinxukr.github.io/azza.github.io/images/cake-slider-min.png";

  return (
 <>
  <div className="careerBG cakesBG" style={{
    backgroundImage: `url('https://mavinxukr.github.io/azza.github.io/images/cake-banner-mob-min.png')`
  }}>
    <div className="containerBannerInfo">
      <div className="careerBannerInfo textCenter">
        <div className="line flex center">
          <p className="left"></p>
          <span className="darkCircle"></span>
          <p className="right"></p>
        </div>
        <h1 className="uppercase bold fs-40">Şirniyyat və Tort Sexi</h1>
        <div className="line flex center">
          <p className="left"></p>
          <span className="darkCircle"></span>
          <p className="right"></p>
        </div>
        <p className="fs-20 careerBannerText mainColor textCenter">
          Bizim şirniyyat və tort sexlərimiz Bakı şəhərində yerləşir. Sexlərin dəqiq yerini bilməsəniz belə, darıxmazsınız – darçın, vanil və kakao qoxuları ətrafı bürüyür.
        </p>
      </div>
    </div>
    <img className="mobImg" src={cakebanner} alt=""/>
  </div>

  <h2 className="fs-20 uppercase textCenter bold m-100 discriptionText" data-aos="fade-up">
    Bizim sexlərdə müxtəlif şirniyyat məhsulları istehsal edirik:
  </h2>

  <div className="cakesBlock">
    <div className="flex">
      <div className="cakesItem small">
        <div className="cakesItem-text">
          <Link to={'/Piroq'}>
            <p className="uppercase mainColor fs-20 bold">Piroqlar</p>
          </Link>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
          <img src={cake1} alt=""/>
        </div>
      </div>
      <div className="cakesItem big">
        <div className="cakesItem-text">
          <Link to={'/tortlar'}>
            <p className="uppercase mainColor fs-20 bold">Tortlar</p>
          </Link>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
          <img src={cake2} alt=""/>
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="cakesItem big">
        <div className="cakesItem-text">
          <Link to={'/milli'}>
            <p className="uppercase mainColor fs-20 bold">Milli Şirniyyatlar</p>
          </Link>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
          <img src={cake3} alt=""/>
        </div>
      </div>
      <div className="cakesItem small">
        <div className="cakesItem-text">
          <Link to={'/corek'}>
            <p className="uppercase mainColor fs-20 bold">Çörəklər</p>
          </Link>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
          <img src={cake4} alt=""/>
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="cakesItem small">
        <div className="cakesItem-text">
          <Link to={'/rulet'}>
            <p className="uppercase mainColor fs-20 bold">Ruletlər</p>
          </Link>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
          <img src={cake5} alt=""/>
        </div>
      </div>
      <div className="cakesItem small">
        <div className="cakesItem-text">
          <Link to={'/ekler'}>
            <p className="uppercase mainColor fs-20 bold">Eklərlər</p>
          </Link>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
          <img src={cake6} alt=""/>
        </div>
      </div>
      <div className="cakesItem small">
        <div className="cakesItem-text">
          <Link to={'/cook'}>
            <p className="uppercase mainColor fs-20 bold">Peçenye</p>
          </Link>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
          <img src={cake7} alt=""/>
        </div>
      </div>
    </div>
  </div>

  <div className="flex advantageItems cakesInfoItems">
    <div className="advantageItem textCenter" data-aos="fade-up">
      <h3 className="bold fs-20 uppercase">Keyfiyyətə Nəzarət</h3>
      <div className="line flex center">
        <p className="left"></p>
        <span className="darkCircle"></span>
        <p className="right"></p>
      </div>
      <p className="grey2">
        Keyfiyyətə nəzarət – məhsulumuzun uğurunun əsas sirlərindən biridir. Keyfiyyətə nəzarət şöbəsindən əlavə, bütün şirniyyat məhsulları rəhbərlik tərəfindən şəxsi nəzarətdə saxlanılır. İstehsalda istifadə olunan bütün inqrediyentlər bir neçə mərhələdə yoxlanılır, diqqətlə təmizlənir və yalnız bundan sonra hazırlanmağa istifadə olunur.
      </p>
    </div>
    <div className="advantageItem textCenter" data-aos="fade-up">
      <h3 className="bold fs-20 uppercase">Reseptlərin Seçilməsi</h3>
      <div className="line flex center">
        <p className="left"></p>
        <span className="darkCircle"></span>
        <p className="right"></p>
      </div>
      <p className="grey2">
        Məhsullarımızın reseptləri ciddi şəkildə seçilir, burada hər bir əməkdaşın fikri nəzərə alınaraq dad testi keçirilir. Və bütün bunlar müştərilərimizin tələblərinə cavab vermək üçündür.
      </p>
    </div>
    <div className="advantageItem textCenter" data-aos="fade-up">
      <h3 className="bold fs-20 uppercase">Ən Son Texnologiyalar</h3>
      <div className="line flex center">
        <p className="left"></p>
        <span className="darkCircle"></span>
        <p className="right"></p>
      </div>
      <p className="grey2">
        İstehsal sexlərimizdə ən son texnologiyalar tətbiq olunub və qida sənayesinin dünya liderlərindən müasir avadanlıqlar quraşdırılıb, məsələn: Miwe sobası və yavaş mayalanma kamerası, Diosna mikserləri, Rondo xəmir açma maşını, Bakon maşınları və digərləri.
      </p>
    </div>
  </div>

  <div className="bg-color cake-bg-color relative">
    <div className="marginCakes">
      <p className="bold fs-26 mainColor textCenter textCenter">
        Bizim şirniyyat məhsullarımızın dadı artıq klassikaya çevrilib, hansınısa başqa ilə qarışdırmaq mümkün deyil.
      </p>
      <p className="m-0 grey2 fs-18 textCenter">
        Hazırda istehsalımızı genişləndiririk ki, daha çox insana ləzzətli tortlar və şirniyyatlar təqdim edək.
      </p>
    </div>
    <div className="bg-image"></div>
  </div>

  <div className="excursion">
    <h3 className="uppercase bold mainColor fs-20">
      AZZA İstehsalı üzrə Ekskursiya
    </h3>
    <div className="flex no-wrap mb-50 descBlock" data-aos="fade-up">
      <div className="w-33">
        <img className="gallaryIMG" src={cakeSlider} alt=""/>
      </div>
      <div className="w-17 ml-5">
        <img className="gallaryIMG" src={cakeSlider1} alt=""/>
      </div>
      <div className="w-17 ml-5">
        <img className="gallaryIMG" src={cakeSlider2} alt=""/>
      </div>
      <div className="w-17 ml-5">
        <img className="gallaryIMG" src={cakeSlider3} alt=""/>
      </div>
      <div className="w-17 ml-5">
        <img className="gallaryIMG" src={cakeSlider4} alt=""/>
      </div>
    </div>
    <div className="centerSlider flex no-wrap mb-50">
      <div className="ml-5">
        <img className="gallaryIMG" src={cakeSlider} alt=""/>
      </div>
      <div className="ml-5">
        <img className="gallaryIMG" src={cakeSlider1} alt=""/>
      </div>
      <div className="ml-5">
        <img className="gallaryIMG" src={cakeSlider2} alt=""/>
      </div>
      <div className="ml-5">
        <img className="gallaryIMG" src={cakeSlider3} alt=""/>
      </div>
      <div className="ml-5">
        <img className="gallaryIMG" src={cakeSlider4} alt=""/>
      </div>
    </div>
    <div className="line flex center">
      <p className="left"></p>
      <a className="uppercase mainColor w-600" href="#">Bütün qalereyanı göstər</a>
      <p className="right"></p>
    </div>
  </div>
</>

  )
}

export default Tortlar