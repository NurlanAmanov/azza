import React from 'react';

// Şəkilləri import edirik
import alcoholBanner from '../../images/alcoholBanner-min.png';
import alcoholBannerMob from '../../images/alcoholBannerMob-min.png';
import alcohol1 from '../../images/alcohol1-min.png';
import alcohol2 from '../../images/alcohol2-min.png';
import alcohol3 from '../../images/alcohol3-min.png';
import alcohol4 from '../../images/alcohol4-min.png';
import alcohol5 from '../../images/alcohol5-min.png';
import alcohol6 from '../../images/alcohol6-min.png';
import alcoBG from '../../images/alco-min.png';

function Alcohol() {
  return (
    <>
      <div className="careerBG alcoholBG" style={{ backgroundImage: `url(${alcoholBanner})` }}>
        <div className="containerBannerInfo">
          <div className="careerBannerInfo textCenter">
            <p className="uppercase fs-20 mainColor bold">продукты</p>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <h1 className="uppercase bold fs-40">Алкогольные напитки</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <img className="mobImg" src={alcoholBannerMob} alt="" />
      </div>
      <h2 className="fs-20 uppercase mainColor bold m-100 chocolateTitle">
        Откройте для себя весь ассортимент алкогольных напитков, таких брендов, как - Mlesna, Jones, Rivon, Jaf Tea.
      </h2>
      <div>
        {/* Vodka */}
        <div className="flex fermazzaBlock alcoholBlock" data-aos="fade-up">
          <div className="alcoImg">
            <p className="alcoTitle fs-20 bold uppercase mainColor">Водка</p>
            <img src={alcohol1} alt="" />
            <img className="descBlock alcoBG" src={alcoBG} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor descBlock bold uppercase fs-12">Водка</span>
            <div className="tabs">
              <ul className="tabs__caption">
                <li className="fs-16 bold uppercase mainColor active">Россия</li>
                <li className="fs-16 bold uppercase mainColor">Украина</li>
                <li className="fs-16 bold uppercase mainColor">Беларусь</li>
              </ul>
              <div className="tabs__content active">
                <p className="fs-16 grey2">
                  В Мире водка стала наиболее традиционным напитком, который сопровождает нас в самых разных жизненных ситуациях.
                </p>
                <p className="uppercase bold mainColor">ALPHA LINE</p>
                <p className="uppercase bold mainColor">Дикая Утка VIP</p>
                <p className="uppercase bold mainColor">Петровская</p>
                <p className="uppercase bold mainColor">Absolut</p>
              </div>
              <div className="tabs__content"></div>
              <div className="tabs__content"></div>
            </div>
          </div>
        </div>
        {/* Wine */}
        <div className="flex fermazzaBlock alcoholBlock flex-reverse" data-aos="fade-up">
          <div className="alcoImg">
            <p className="alcoTitle fs-20 bold uppercase mainColor">Вино</p>
            <img src={alcohol2} alt="" />
            <img className="descBlock alcoBG" src={alcoBG} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor descBlock bold uppercase fs-12">Вино</span>
            <div className="tabs">
              <ul className="tabs__caption">
                <li className="fs-16 bold uppercase mainColor active">Россия</li>
                <li className="fs-16 bold uppercase mainColor">Украина</li>
              </ul>
              <div className="tabs__content active">
                <p className="fs-16 grey2">
                  В Мире водка стала наиболее традиционным напитком, который сопровождает нас в самых разных жизненных ситуациях.
                </p>
                <p className="uppercase bold mainColor">ALPHA LINE</p>
                <p className="uppercase bold mainColor">Дикая Утка VIP</p>
                <p className="uppercase bold mainColor">Петровская</p>
                <p className="uppercase bold mainColor">Absolut</p>
              </div>
              <div className="tabs__content"></div>
              <div className="tabs__content"></div>
            </div>
          </div>
        </div>
        {/* Cognac */}
        <div className="flex fermazzaBlock alcoholBlock" data-aos="fade-up">
          <div className="alcoImg">
            <p className="alcoTitle fs-20 bold uppercase mainColor">Коньяк</p>
            <img src={alcohol3} alt="" />
            <img className="descBlock alcoBG" src={alcoBG} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12 descBlock">Коньяк</span>
            <div className="tabs">
              <ul className="tabs__caption">
                <li className="fs-16 bold uppercase mainColor active">Россия</li>
                <li className="fs-16 bold uppercase mainColor">Украина</li>
                <li className="fs-16 bold uppercase mainColor">Беларусь</li>
              </ul>
              <div className="tabs__content active">
                <p className="fs-16 grey2">
                  В Мире водка стала наиболее традиционным напитком, который сопровождает нас в самых разных жизненных ситуациях.
                </p>
                <p className="uppercase bold mainColor">ALPHA LINE</p>
                <p className="uppercase bold mainColor">Дикая Утка VIP</p>
                <p className="uppercase bold mainColor">Петровская</p>
                <p className="uppercase bold mainColor">Absolut</p>
              </div>
              <div className="tabs__content"></div>
              <div className="tabs__content"></div>
            </div>
          </div>
        </div>
        {/* Whiskey */}
        <div className="flex fermazzaBlock alcoholBlock flex-reverse" data-aos="fade-up">
          <div className="alcoImg">
            <p className="alcoTitle fs-20 bold uppercase mainColor descBlock">Виски</p>
            <img src={alcohol4} alt="" />
            <img className="descBlock alcoBG" src={alcoBG} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12">Виски</span>
            <div className="tabs">
              <ul className="tabs__caption">
                <li className="fs-16 bold uppercase mainColor active">Россия</li>
                <li className="fs-16 bold uppercase mainColor">Украина</li>
              </ul>
              <div className="tabs__content active">
                <p className="fs-16 grey2">
                  В Мире водка стала наиболее традиционным напитком, который сопровождает нас в самых разных жизненных ситуациях.
                </p>
                <p className="uppercase bold mainColor">ALPHA LINE</p>
                <p className="uppercase bold mainColor">Дикая Утка VIP</p>
                <p className="uppercase bold mainColor">Петровская</p>
                <p className="uppercase bold mainColor">Absolut</p>
              </div>
              <div className="tabs__content"></div>
              <div className="tabs__content"></div>
            </div>
          </div>
        </div>
        {/* Tequila */}
        <div className="flex fermazzaBlock alcoholBlock" data-aos="fade-up">
          <div className="alcoImg">
            <p className="alcoTitle fs-20 bold uppercase mainColor">Текила</p>
            <img src={alcohol5} alt="" />
            <img className="descBlock alcoBG" src={alcoBG} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12 descBlock">Текила</span>
            <div className="tabs">
              <ul className="tabs__caption">
                <li className="fs-16 bold uppercase mainColor active">Россия</li>
                <li className="fs-16 bold uppercase mainColor">Украина</li>
                <li className="fs-16 bold uppercase mainColor">Беларусь</li>
              </ul>
              <div className="tabs__content active">
                <p className="fs-16 grey2">
                  В Мире водка стала наиболее традиционным напитком, который сопровождает нас в самых разных жизненных ситуациях.
                </p>
                <p className="uppercase bold mainColor">ALPHA LINE</p>
                <p className="uppercase bold mainColor">Дикая Утка VIP</p>
                <p className="uppercase bold mainColor">Петровская</p>
                <p className="uppercase bold mainColor">Absolut</p>
              </div>
              <div className="tabs__content"></div>
              <div className="tabs__content"></div>
            </div>
          </div>
        </div>
        {/* Other drinks */}
        <div className="flex fermazzaBlock alcoholBlock flex-reverse" data-aos="fade-up">
          <div className="alcoImg">
            <p className="alcoTitle fs-20 bold uppercase mainColor">Другие <br /> напитки</p>
            <img src={alcohol6} alt="" />
            <img className="descBlock alcoBG" src={alcoBG} alt="" />
          </div>
          <div className="fermazzaInfoBlock">
            <span className="mainColor bold uppercase fs-12 descBlock">Другие напитки</span>
            <div className="tabs">
              <ul className="tabs__caption">
                <li className="fs-16 bold uppercase mainColor active">Россия</li>
                <li className="fs-16 bold uppercase mainColor">Украина</li>
              </ul>
              <div className="tabs__content active">
                <p className="fs-16 grey2">
                  В Мире водка стала наиболее традиционным напитком, который сопровождает нас в самых разных жизненных ситуациях.
                </p>
                <p className="uppercase bold mainColor">ALPHA LINE</p>
                <p className="uppercase bold mainColor">Дикая Утка VIP</p>
                <p className="uppercase bold mainColor">Петровская</p>
                <p className="uppercase bold mainColor">Absolut</p>
              </div>
              <div className="tabs__content"></div>
              <div className="tabs__content"></div>
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

export default Alcohol;