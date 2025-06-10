import React from 'react';

// Şəkilləri import edirik
import chocolateBanner from '../../images/chocolateBanner-min.png';
import chocolateBannerMob from '../../images/chocolateBannerMob-min.png';
import ING from '../../images/ING.png';
import IMG1 from '../../images/IMG (1).png';
import IMG2 from '../../images/IMG (2).png';
import IMG3 from '../../images/IMG (3).png';
import IMG4 from '../../images/IMG (4).png';
import IMG5 from '../../images/IMG (5).png';
import l1 from '../../images/l1.png';
import l2 from '../../images/l2.png';
import l3 from '../../images/l3.png';
import l4 from '../../images/l4.png';
import l5 from '../../images/l5.png';
import l6 from '../../images/l6.png';
import vectorB from '../../images/Vector-b.png';

function Chocolate() {
  return (
    <>
      <div className="careerBG chocolateBG" style={{ backgroundImage: `url(${chocolateBanner})` }}>
        <div className="containerBannerInfo">
          <div className="careerBannerInfo textCenter">
            <p className="uppercase fs-20 mainColor bold">продукты</p>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <h1 className="uppercase bold fs-40">Шоколад</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <img className="mobImg" src={chocolateBannerMob} alt="" />
      </div>
      <h2 className="fs-20 uppercase mainColor bold m-100 chocolateTitle">
        Откройте для себя весь ассортимент нашего вкуснейшего шоколада. Включая такие бренды, как - Villars, Duc d'ODuc, Quaranta, Seeberger, Kambly, Niederegger, Desobry, Vandenbulcke.
      </h2>
      <div>
        <div className="flex fermazzaBlock" data-aos="fade-up">
          <div className="descBlock IMAGES">
            <img src={ING} alt="" />
            <p className="alcoTitle chocoLogo bold uppercase mainColor">
              <img src={l1} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Шоколад</span>
            <h3 className="uppercase bold fs-20 mainColor">Villars</h3>
            <div className="mobContent IMAGES">
              <img src={ING} alt="" />
              <p className="alcoTitle chocoLogo bold uppercase mainColor">
                <img src={l1} alt="" />
              </p>
            </div>
            <p className="grey2">
              Vandenbulcke Chocolatee (Ваденбулк Шоколатье) является семейной компанией трех поколений, которая работает на настоящем бельгийском шоколаде и создает традицию с 1949 года. Наши морские ракушки и лесные орехи, пралинэ, трюфели и сезонные деликатесы известны своим уникальным вкусом. Оригинальная упаковка и последовательное внимание проявляемое к сырью и качеству не только причиняются к тому что шоколаданые изделия Vandenbulcke Chocolatee являются знаменитыми в Бельгии, но они тоже ценятся знатоками во всем мире. Любители настоящего шоколада обожают изделия Vandenbulcke Chocolatee, потому что постоянные инвестиции в качество позволяют Вам радовать Ваших клиентов при каждом удобном случае.
            </p>
            <div className="line flex">
              <p className="left"></p>
              <a className="uppercase mainColor w-600" href="#">Подробнее</a>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <div className="flex fermazzaBlock flex-reverse" data-aos="fade-up">
          <div className="descBlock IMAGES">
            <img src={IMG1} alt="" />
            <p className="alcoTitle chocoLogo bold uppercase mainColor">
              <img src={l2} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Шоколад</span>
            <h3 className="uppercase bold fs-20 mainColor">Duc d'O Duc</h3>
            <div className="mobContent IMAGES">
              <img src={IMG1} alt="" />
              <p className="alcoTitle chocoLogo bold uppercase mainColor">
                <img src={l2} alt="" />
              </p>
            </div>
            <p className="grey2">
              Все началось в 1947 году, когда Леон Десобри начал выпекать свои вкусные рецепты на своем заводе. Даже тогда люди говорили, что, когда он готовил свои сокровища в магазине, запах шоколада и печенья копья по всему району. Не зная об этом, он создал печенье, которое было бы повсеместно доступно более чем в 40 странах, на протяжении более полувека!
            </p>
            <div className="line flex">
              <p className="left"></p>
              <a className="uppercase mainColor w-600" href="#">Подробнее</a>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <div className="flex fermazzaBlock" data-aos="fade-up">
          <div className="descBlock IMAGES">
            <img src={IMG2} alt="" />
            <p className="alcoTitle chocoLogo bold uppercase mainColor">
              <img src={l3} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Шоколад</span>
            <h3 className="uppercase bold fs-20 mainColor">Quaranta</h3>
            <div className="mobContent IMAGES">
              <img src={IMG2} alt="" />
              <p className="alcoTitle chocoLogo bold uppercase mainColor">
                <img src={l3} alt="" />
              </p>
            </div>
            <p className="grey2">
              Все началось в 1947 году, когда Леон Десобри начал выпекать свои вкусные рецепты на своем заводе. Даже тогда люди говорили, что, когда он готовил свои сокровища в магазине, запах шоколада и печенья копья по всему району. Не зная об этом, он создал печенье, которое было бы повсеместно доступно более чем в 40 странах, на протяжении более полувека!
            </p>
            <div className="line flex">
              <p className="left"></p>
              <a className="uppercase mainColor w-600" href="#">Подробнее</a>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <div className="flex fermazzaBlock flex-reverse" data-aos="fade-up">
          <div className="descBlock IMAGES">
            <img src={IMG3} alt="" />
            <p className="alcoTitle chocoLogo bold uppercase mainColor">
              <img src={l4} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Шоколад</span>
            <h3 className="uppercase bold fs-20 mainColor">La Mere Poulard</h3>
            <div className="mobContent IMAGES">
              <img src={IMG3} alt="" />
              <p className="alcoTitle chocoLogo bold uppercase mainColor">
                <img src={l4} alt="" />
              </p>
            </div>
            <p className="grey2">
              Vandenbulcke Chocolatee (Ваденбулк Шоколатье) является семейной компанией трех поколений, которая работает на настоящем бельгийском шоколаде и создает традицию с 1949 года. Наши морские ракушки и лесные орехи, пралинэ, трюфели и сезонные деликатесы известны своим уникальным вкусом. Оригинальная упаковка и последовательное внимание проявляемое к сырью и качеству не только причиняются к тому что шоколаданые изделия Vandenbulcke Chocolatee являются знаменитыми в Бельгии, но они тоже ценятся знатоками во всем мире. Любители настоящего шоколада обожают изделия Vandenbulcke Chocolatee, потому что постоянные инвестиции в качество позволяют Вам радовать Ваших клиентов при каждом удобном случае.
            </p>
            <div className="line flex">
              <p className="left"></p>
              <a className="uppercase mainColor w-600" href="#">Подробнее</a>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <div className="flex fermazzaBlock" data-aos="fade-up">
          <div className="descBlock IMAGES">
            <img src={IMG4} alt="" />
            <p className="alcoTitle chocoLogo bold uppercase mainColor">
              <img src={l5} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Шоколад</span>
            <h3 className="uppercase bold fs-20 mainColor">Delacre</h3>
            <div className="mobContent IMAGES">
              <img src={IMG4} alt="" />
              <p className="alcoTitle chocoLogo bold uppercase mainColor">
                <img src={l5} alt="" />
              </p>
            </div>
            <p className="grey2">
              Все началось в 1947 году, когда Леон Десобри начал выпекать свои вкусные рецепты на своем заводе. Даже тогда люди говорили, что, когда он готовил свои сокровища в магазине, запах шоколада и печенья копья по всему району. Не зная об этом, он создал печенье, которое было бы повсеместно доступно более чем в 40 странах, на протяжении более полувека!
            </p>
            <div className="line flex">
              <p className="left"></p>
              <a className="uppercase mainColor w-600" href="#">Подробнее</a>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <div className="flex fermazzaBlock flex-reverse" data-aos="fade-up">
          <div className="descBlock IMAGES">
            <img src={IMG5} alt="" />
            <p className="alcoTitle chocoLogo bold uppercase mainColor">
              <img src={l6} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Шоколад</span>
            <h3 className="uppercase bold fs-20 mainColor">Vandenbulcke</h3>
            <div className="mobContent IMAGES">
              <img src={IMG5} alt="" />
              <p className="alcoTitle chocoLogo bold uppercase mainColor">
                <img src={l6} alt="" />
              </p>
            </div>
            <p className="grey2">
              Все началось в 1947 году, когда Леон Десобри начал выпекать свои вкусные рецепты на своем заводе. Даже тогда люди говорили, что, когда он готовил свои сокровища в магазине, запах шоколада и печенья копья по всему району. Не зная об этом, он создал печенье, которое было бы повсеместно доступно более чем в 40 странах, на протяжении более полувека!
            </p>
            <div className="line flex">
              <p className="left"></p>
              <a className="uppercase mainColor w-600" href="#">Подробнее</a>
              <p className="right"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="cuisineTab m-100 flex">
        <a href="#" className="uppercase bold fs-12 mainColor">торты</a>
        <a href="#" className="uppercase bold fs-12 mainColor">печенье / эклеры / национальная кухня</a>
        <a href="#" className="uppercase bold fs-12 mainColor">пироги/рулеты</a>
        <a href="#" className="uppercase bold fs-12 mainColor">выпечка</a>
        <a href="https://mavinxukr.github.io/azza.github.io/tea/" className="uppercase bold fs-12 mainColor">чай</a>
        <a href="https://mavinxukr.github.io/azza.github.io/chocolate/" className="uppercase bold fs-12 mainColor activeTab">шоколад</a>
        <a href="https://mavinxukr.github.io/azza.github.io/alcohol/" className="uppercase bold fs-12 mainColor">алкоголь</a>
        <a href="#" className="uppercase bold fs-12 mainColor">молочная продукция FERMAZZA</a>
      </div>
    </>
  );
}

export default Chocolate;