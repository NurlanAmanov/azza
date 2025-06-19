import React from 'react';
import { Link } from 'react-router-dom';

// Şəkilləri import edirik


function Nationalcuisine() {
  const cuisineBannerMob = "https://mavinxukr.github.io/azza.github.io/images/cuisineBannerMob-min.png";
  const newImg = "https://mavinxukr.github.io/azza.github.io/images/new-min.png";
  const noneImg = "https://mavinxukr.github.io/azza.github.io/images/noneImg-min.png";
  const nImage1 = "https://mavinxukr.github.io/azza.github.io/images/N-Image1-min.png";
  const nImage2 = "https://mavinxukr.github.io/azza.github.io/images/N-Image2-min.png";
  const cuisine1 = "https://mavinxukr.github.io/azza.github.io/images/cuisine1-min.png";
  const cuisine2 = "https://mavinxukr.github.io/azza.github.io/images/cuisine2-min.png";
  const cuisine3 = "https://mavinxukr.github.io/azza.github.io/images/cuisine3-min.png";
  const nImage = "https://mavinxukr.github.io/azza.github.io/images/N-Image-min.png";

  return (
    <>
      <div
        className="careerBG cuisineBG"
        style={{
          backgroundImage:
            "url('https://mavinxukr.github.io/azza.github.io/images/cuisineBanner%20Mob-min.png')",
        }}
      >
        <div className="containerBannerInfo">
          <div className="careerBannerInfo textCenter">
            <p className="uppercase fs-20 mainColor bold">продукты</p>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <h1 className="uppercase bold fs-40">печенье / эклеры / национальная кухня</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
          </div>
        </div>
        <img className="mobImg" src={cuisineBannerMob} alt="" />
      </div>
      <h2 className="fs-20 uppercase mainColor bold m-100 cuisineTitle">
        В наших цехах мы изготавливаем самую разнообразную продукцию кондитерских изделий:
      </h2>
      <div className="lastBlock cuisineItems">
        <div className="container flex center newItemBlock">
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={newImg} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Торт</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Абшерон</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={noneImg} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Торт</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Профитроль</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={nImage1} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Торт</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Тирамису</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={nImage2} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10">Торт</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Микс берри</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={cuisine1} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Печенье </p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Макаронс</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={cuisine2} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Печенье </p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Миндальное с какао</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={cuisine3} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Печенье </p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Ореховое</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={nImage} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Печенье </p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Корица</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={nImage2} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Пирог</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Клубничный</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={nImage1} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Пирог</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Apple Crumble</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={nImage} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10 w-600">Пирог</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Ананасовый</a>
            </p>
          </div>
          <div className="newItem" data-aos="fade-up">
            <div className="scaleImage">
              <a href="#" className="cuisineLink mainColor fs-10 w-600 uppercase">
                Подробнее
              </a>
              <img src={newImg} alt="" />
            </div>
            <p className="type uppercase textCenter fs-10">Пирог</p>
            <p className="newItem-name textCenter fs-15 bold">
              <a href="#">Яблочный с творогом</a>
            </p>
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

export default Nationalcuisine;