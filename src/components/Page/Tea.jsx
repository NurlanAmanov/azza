import React from 'react';

// Şəkilləri import edirik
import teaBanner from '../../images/teaBanner-min.png';
import teaBannerMob from '../../images/teaBannerMob-min.png';
import t from '../../images/t.png';
import t1 from '../../images/t1.png';
import t2 from '../../images/t2.png';
import t3 from '../../images/t3.png';
import tl from '../../images/tl.png';
import tl1 from '../../images/tl1.png';
import tl2 from '../../images/tl2.png';
import tl3 from '../../images/tl3.png';
import vectorB from '../../images/Vector-b.png';

function Tea() {
  return (
    <>
      <div className="careerBG teaBG" style={{ backgroundImage: `url(${teaBanner})` }}>
        <div className="containerBannerInfo">
          <div className="careerBannerInfo textCenter">
            <p className="uppercase fs-20 mainColor bold">продукты</p>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <h1 className="uppercase bold fs-40">Чай</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <img className="mobImg" src={teaBannerMob} alt="" />
      </div>
      <h2 className="fs-20 uppercase mainColor bold m-100 chocolateTitle">
        Откройте для себя весь ассортимент чая, таких брендов, как - Mlesna, Jones, Rivon, Jaf Tea.
      </h2>
      <div>
        <div className="flex fermazzaBlock" data-aos="fade-up">
          <div className="descBlock IMAGES">
            <img src={t} alt="" />
            <p className="alcoTitle teaLogo bold uppercase mainColor">
              <img src={tl} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Чай</span>
            <h3 className="uppercase bold fs-20 mainColor">Mlesna</h3>
            <div className="mobContent IMAGES">
              <img src={t} alt="" />
              <p className="alcoTitle teaLogo bold uppercase mainColor">
                <img src={tl} alt="" />
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
            <img src={t1} alt="" />
            <p className="alcoTitle teaLogo bold uppercase mainColor">
              <img src={tl1} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Чай</span>
            <h3 className="uppercase bold fs-20 mainColor">Halpe Tea</h3>
            <div className="mobContent IMAGES">
              <img src={t1} alt="" />
              <p className="alcoTitle teaLogo bold uppercase mainColor">
                <img src={tl1} alt="" />
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
            <img src={t2} alt="" />
            <p className="alcoTitle teaLogo bold uppercase mainColor">
              <img src={tl2} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Чай</span>
            <h3 className="uppercase bold fs-20 mainColor">Premiers Tea</h3>
            <div className="mobContent IMAGES">
              <img src={t2} alt="" />
              <p className="alcoTitle teaLogo bold uppercase mainColor">
                <img src={tl2} alt="" />
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
            <img src={t3} alt="" />
            <p className="alcoTitle teaLogo bold uppercase mainColor">
              <img className="last-logo" src={tl3} alt="" />
            </p>
            <img className="descBlock alcoBG" src={vectorB} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Чай</span>
            <h3 className="uppercase bold fs-20 mainColor">Jaf Tea</h3>
            <div className="mobContent IMAGES">
              <img src={t3} alt="" />
              <p className="alcoTitle teaLogo bold uppercase mainColor">
                <img className="last-logo" src={tl3} alt="" />
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
      </div>
    <div className="cuisineTab m-100 flex">
  <Link to="/cakes" className="uppercase bold fs-12 mainColor">торты</Link>
  <Link to="/nationalcuisine" className="uppercase bold fs-12 mainColor">печенье / эклеры / национальная кухня</Link>
  <Link to="/pies" className="uppercase bold fs-12 mainColor">пироги/рулеты</Link>
  <Link to="/bakery" className="uppercase bold fs-12 mainColor">выпечка</Link>
  <Link to="/tea" className="uppercase bold fs-12 mainColor">чай</Link>
  <Link to="/chocolate" className="uppercase bold fs-12 mainColor">шоколад</Link>
  <Link to="/alcohol" className="uppercase bold fs-12 mainColor activeTab">алкоголь</Link>
  <Link to="/fermazza" className="uppercase bold fs-12 mainColor">молочная продукция FERMAZZA</Link>
</div>
    </>
  );
}

export default Tea;