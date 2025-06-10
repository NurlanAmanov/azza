import React from 'react';

// Şəkilləri import edirik
import storesBanner from '../../images/storesBanner-min.png';
import storesBannerMob from '../../images/storesBannerMob-min.png';
import frameImg from '../../images/Frame-min.png';

function Store() {
  return (
    <>
      <div
        className="careerBG storesBG"
        style={{ backgroundImage: `url(${storesBanner})` }}
      >
        <div className="containerBannerInfo">
          <div className="careerBannerInfo textCenter">
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <h1 className="uppercase bold fs-40">НАШИ МАГАЗИНЫ</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="fs-20 careerBannerText mainColor textCenter">
              AZZA представляет самую большую сеть кондитерских магазинов на территории Азербайджана. На данный 73 магазина работают для Вас. На этой странице Вы можете ознакомится с контактами магазинов.
            </p>
          </div>
        </div>
        <img className="mobImg" src={storesBannerMob} alt="" />
      </div>
      <div className="map">
        <div className="searchMap">
          <h2 className="uppercase">Выберите ближайший магазин AZZA</h2>
          <div className="relative">
            <input type="text" placeholder="Введите адрес" />
            <button className="uppercase btnSearch bold">Ok</button>
          </div>
        </div>
        <img src={frameImg} alt="" />
      </div>
    </>
  );
}

export default Store;