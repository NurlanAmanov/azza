import React from 'react';

// Şəkilləri import edirik
import distributionBG from '../../images/distribution-min.png';
import distributionMob from '../../images/distributionMob-min.png';
import darkImg from '../../images/dark-min.png';
import distributionImg from '../../images/DISTRIBUTION-min.png';
import mobBg from '../../images/mob-bg-min.png';
import mobBg1 from '../../images/mob-bg-1-min.png';
import gImage from '../../images/G-Image-min.png';
import gImage1 from '../../images/G-Image (1)-min.png';
import gImage3 from '../../images/G-Image (3)-min.png';
import imageCarousel from '../../images/ImageCarousel-min.png';

function Distribution() {
  return (
    <>
      <div
        className="careerBG distributionBG"
        style={{ backgroundImage: `url(${distributionBG})` }}
      >
        <div className="containerBannerInfo">
          <div className="careerBannerInfo textCenter">
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <h1 className="uppercase bold fs-40">AZZA DISTRIBUTION</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="fs-20 careerBannerText mainColor textCenter">
              Специально для тех, кто любит эксклюзивные и необычные продукты, которые трудно встретить в обычном магазине, мы организовали целый проект под названием «AZZA DISTRIBUTION».
            </p>
          </div>
        </div>
        <img className="mobImg" src={distributionMob} alt="" />
      </div>
      <h2 className="fs-20 uppercase textCenter bold m-100 discriptionText" data-aos="fade-up">
        Мы специально находим и отбираем все самое лучшее в Европе и Азии, чтобы радовать наших клиентов.
      </h2>
      <p className="fs-18 grey2 textCenter discriptionText" data-aos="fade-up">
        В магазинах AZZA Вы можете встретить настоящий бельгийский, швейцарский и немецкий шоколад, ароматные и вкусные чаи из Шри-Ланки и Индии, и конечно же, огромный ассортимент алкогольных напитков, привезенных из Франции, Италии, России, Украины, Польши и других стран.
      </p>
      <div className="imageMargin">
        <img className="descBlock" src={darkImg} alt="" />
        <img className="descBlock" src={distributionImg} alt="" />
        <img className="mobContent" src={mobBg} alt="" />
        <img className="mobContent" src={mobBg1} alt="" />
      </div>
      <div className="bg-color">
        <div className="bg-image">
          <p className="bold fs-26 mainColor textCenter marginText">
            На данный момент мы осуществляем дистрибуцию более 200 торговых брендов, каждый из которых отличается высоким качеством и именно поэтому мы с гордостью можем предложить их своим клиентам.
          </p>
        </div>
      </div>
      <div className="mt-50">
        <h2 className="uppercase bold fs-20 mobMargin" data-aos="fade-up">Продукция AZZA DISTRIBUTION</h2>
        <p className="textCenter mobMargin" data-aos="fade-up">На сегодняшней день это самая крупнейшая сеть кондитерских магазинов на территории Азербайджана.</p>
        <div className="line flex center mb-50" data-aos="fade-up">
          <p className="left"></p>
          <a className="uppercase w-600 mainColor" href="#">Найти магазин</a>
          <p className="right"></p>
        </div>
        <div className="flex no-wrap mb-50 descBlock" data-aos="fade-up">
          <div className="w-33">
            <img className="gallaryIMG" src={gImage} alt="" />
          </div>
          <div className="w-17 ml-5">
            <img className="gallaryIMG" src={gImage1} alt="" />
          </div>
          <div className="w-33 ml-5">
            <img className="gallaryIMG" src={imageCarousel} alt="" />
          </div>
          <div className="w-17 ml-5">
            <img className="gallaryIMG" src={gImage3} alt="" />
          </div>
        </div>
        <div className="carouselBottom flex no-wrap mb-50">
          <div className="w-33">
            <img className="gallaryIMG" src={gImage} alt="" />
          </div>
          <div className="w-17 ml-5">
            <img className="gallaryIMG" src={gImage1} alt="" />
          </div>
          <div className="w-33 ml-5">
            <img className="gallaryIMG" src={imageCarousel} alt="" />
          </div>
          <div className="w-17 ml-5">
            <img className="gallaryIMG" src={gImage3} alt="" />
          </div>
        </div>
        <div className="line flex center">
          <p className="left"></p>
          <a className="uppercase mainColor w-600" href="#">показать всю галерею</a>
          <p className="right"></p>
        </div>
      </div>
    </>
  );
}

export default Distribution;