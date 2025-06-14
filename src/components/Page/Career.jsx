import React from 'react';

// Şəkilləri import edirik
import img1 from '../../images/career1-min.png';
import img2 from '../../images/career2-min.png';
import img3 from '../../images/career3-min.png';
import carrerBG from '../../images/carrerBG-min.png';
import mobImg from '../../images/IMG.png';

function Career() {
  return (
    <>
      <div className="careerBG" style={{ backgroundImage: `url(${carrerBG})` }}>
        <div className="containerBannerInfo">
          <div className="careerBannerInfo textCenter">
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <h1 className="uppercase bold fs-40">КАРЬЕРА В AZZA</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="fs-20 careerBannerText mainColor textCenter">
              Мы готовы предложить интересную работу для целеустремленных людей. Начало работы у нас -это не только работа в конкретной должности, это работа в компании, которая создает условия для вашего развития и реализации ваших способностей.
            </p>
            <button
              onClick={() => window.location.href = 'https://mavinxukr.github.io/azza.github.io/questionnaire/'}
              className="uppercase bold fs-12 btnQuestionnaire w-600"
            >
              Заполнить анкету
            </button>
          </div>
        </div>
        <img className="mobImg" src={mobImg} alt=""/>
      </div>

      <h2 className="fs-20 uppercase textCenter bold m-100" data-aos="fade-up">
        Работая с нами у вас есть возможность:
      </h2>

      <div className="flex container center descBlock">
        <div className="flexCareerItem relative" data-aos="fade-up">
          <img src={img1} alt=""/>
          <div className="textCenter uppercase bold careerItemText mainColor">
            Подняться по карьерной лестнице при условии ответственного отношения к делу. Все дело в вашем старании!
          </div>
        </div>
        <div className="flexCareerItem relative" data-aos="fade-up">
          <img src={img2} alt=""/>
          <div className="textCenter uppercase bold careerItemText mainColor">
            Овладеть профессией на производстве при условии базового образования. Все в ваших руках!
          </div>
        </div>
        <div className="flexCareerItem relative" data-aos="fade-up">
          <img src={img3} alt=""/>
          <div className="textCenter uppercase bold careerItemText mainColor">
            Вырасти не только как профессионал, но и как личность. Все дело в вашем желании!
          </div>
        </div>
      </div>

      <div className="carousel flexItemCarousel">
        <div className="flexCareerItem relative">
          <img src={img1} alt=""/>
          <div className="textCenter uppercase bold careerItemText mainColor">
            Подняться по карьерной лестнице при условии ответственного отношения к делу. Все дело в вашем старании!
          </div>
        </div>
        <div className="flexCareerItem relative">
          <img src={img2} alt=""/>
          <div className="textCenter uppercase bold careerItemText mainColor">
            Овладеть профессией на производстве при условии базового образования. Все в ваших руках!
          </div>
        </div>
        <div className="flexCareerItem relative">
          <img src={img3} alt=""/>
          <div className="textCenter uppercase bold careerItemText mainColor">
            Вырасти не только как профессионал, но и как личность. Все дело в вашем желании!
          </div>
        </div>
      </div>

      <div className="textCenter mt-50" data-aos="fade-up">
        <button
          onClick={() => window.location.href = 'https://mavinxukr.github.io/azza.github.io/questionnaire/'}
          className="uppercase bold fs-12 btnQuestionnaire w-600"
        >
          Заполнить анкету
        </button>
      </div>

      <div className="advantage container">
        <h2 className="flex center m-0" data-aos="fade-up">
          <svg className="img5" width="89" height="113" viewBox="0 0 89 113" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.05 51.3L73.1166 53.5939L73.1246 53.6006L73.1326 53.6073L75.05 51.3ZM80.9 92.55L83.455 94.1223L83.4616 94.1115L83.4682 94.1006L80.9 92.55ZM66.2 105.15L67.4914 107.858L67.5001 107.854L67.5088 107.849L66.2 105.15ZM20.15 106.95L19.3366 109.838L19.3605 109.844L19.3845 109.851L20.15 106.95ZM2 98.55L-0.665862 97.1741L-1.85239 99.473L0.247086 100.985L2 98.55ZM11.6 79.95L13.4 77.55L10.5615 75.4211L8.93414 78.5741L11.6 79.95ZM25.4 87L24.4678 89.8515L24.4927 89.8596L24.5177 89.8673L25.4 87ZM55.85 85.8L57.5466 88.2742L55.85 85.8ZM55.55 65.55L53.9348 68.0781L53.9505 68.0881L53.9662 68.0979L55.55 65.55ZM9.8 62.1L6.81245 61.827L6.51339 65.1H9.8V62.1ZM15.2 2.99999V-7.62939e-06H12.4616L12.2124 2.72702L15.2 2.99999ZM79.25 2.99999H82.25V-7.62939e-06H79.25V2.99999ZM79.25 22.5V25.5H82.25V22.5H79.25ZM35.45 22.5V19.5H32.6879L32.4602 22.2527L35.45 22.5ZM33.8 42.45L30.8102 42.2027L30.5416 45.45H33.8V42.45ZM42.35 45.45C56.8505 45.45 66.904 48.3576 73.1166 53.5939L76.9834 49.0061C69.196 42.4424 57.4495 39.45 42.35 39.45V45.45ZM73.1326 53.6073C79.492 58.8919 82.7 65.9181 82.7 75H88.7C88.7 64.2819 84.808 55.5081 76.9674 48.9927L73.1326 53.6073ZM82.7 75C82.7 80.8728 81.2395 86.1836 78.3318 90.9994L83.4682 94.1006C86.9605 88.3164 88.7 81.9272 88.7 75H82.7ZM78.345 90.9777C75.5001 95.6006 71.0815 99.4492 64.8912 102.451L67.5088 107.849C74.5185 104.451 79.8999 99.8993 83.455 94.1223L78.345 90.9777ZM64.9086 102.442C58.9229 105.297 51.345 106.8 42.05 106.8V112.8C51.955 112.8 60.4771 111.203 67.4914 107.858L64.9086 102.442ZM42.05 106.8C34.91 106.8 27.8672 105.884 20.9155 104.049L19.3845 109.851C26.8328 111.816 34.39 112.8 42.05 112.8V106.8ZM20.9634 104.062C14.1359 102.139 8.41872 99.4748 3.75291 96.1154L0.247086 100.985C5.58128 104.825 11.9641 107.761 19.3366 109.838L20.9634 104.062ZM4.66586 99.9259L14.2659 81.3259L8.93414 78.5741L-0.665862 97.1741L4.66586 99.9259ZM9.8 82.35C14.0862 85.5646 18.985 88.0591 24.4678 89.8515L26.3322 84.1485C21.415 82.5409 17.1138 80.3354 13.4 77.55L9.8 82.35ZM24.5177 89.8673C30.0067 91.5563 35.6543 92.4 41.45 92.4V86.4C36.2457 86.4 31.1933 85.6437 26.2823 84.1327L24.5177 89.8673ZM41.45 92.4C47.9023 92.4 53.3725 91.1364 57.5466 88.2742L54.1534 83.3258C51.3275 85.2636 47.1978 86.4 41.45 86.4V92.4ZM57.5466 88.2742C61.8753 85.3059 64.1 81.0235 64.1 75.75H58.1C58.1 79.0765 56.8247 81.494 54.1534 83.3258L57.5466 88.2742ZM64.1 75.75C64.1 70.2545 61.7492 65.8712 57.1338 63.0021L53.9662 68.0979C56.7508 69.8288 58.1 72.2454 58.1 75.75H64.1ZM57.1652 63.0219C52.7839 60.2227 45.7143 59.1 36.65 59.1V65.1C45.5857 65.1 51.1161 66.2773 53.9348 68.0781L57.1652 63.0219ZM36.65 59.1H9.8V65.1H36.65V59.1ZM12.7876 62.373L18.1876 3.27297L12.2124 2.72702L6.81245 61.827L12.7876 62.373ZM15.2 5.99999H79.25V-7.62939e-06H15.2V5.99999ZM76.25 2.99999V22.5H82.25V2.99999H76.25ZM79.25 19.5H35.45V25.5H79.25V19.5ZM32.4602 22.2527L30.8102 42.2027L36.7898 42.6973L38.4398 22.7473L32.4602 22.2527ZM33.8 45.45H42.35V39.45H33.8V45.45Z" fill="#4B2613"/>
          </svg>
          <span className="uppercase bold advantageTitle">
            преимуществ, которые ценят сотрудники нашей компании:
          </span>
        </h2>
        <div className="flex advantageItems">
          <div className="advantageItem textCenter" data-aos="fade-up">
            <p className="fs-20 grey">№ 1</p>
            <h3 className="bold fs-20 uppercase">Стабильность</h3>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="grey2">
              Регулярность и гарантия выплат, долгосрочный найм и отсутствие страха увольнения из-за сокращений.
            </p>
          </div>
          <div className="advantageItem textCenter" data-aos="fade-up">
            <p className="fs-20 grey">№ 2</p>
            <h3 className="bold fs-20 uppercase">Условия труда</h3>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="grey2">
              Комфорт, удобные рабочие помещения, безопасность труда, современное оборудование, соблюдение европейских стандартов качества, порядок и дисциплина, прозрачность отношений между компанией и работником, стабильность рабочего графика.
            </p>
          </div>
          <div className="advantageItem textCenter" data-aos="fade-up">
            <p className="fs-20 grey">№ 3</p>
            <h3 className="bold fs-20 uppercase">Обучение и карьерный рост</h3>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="grey2">
              Гарантированный карьерный рост при условии ответственного отношения к делу; обучение с целью повышения квалификации и развития личности
            </p>
          </div>
          <div className="advantageItem textCenter" data-aos="fade-up">
            <p className="fs-20 grey">№ 4</p>
            <h3 className="bold fs-20 uppercase">Атмосфера</h3>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="grey2">
              Доброжелательный коллектив, команда, корпоративные праздники.
            </p>
          </div>
          <div className="advantageItem textCenter" data-aos="fade-up">
            <p className="fs-20 grey">№ 5</p>
            <h3 className="bold fs-20 uppercase">Руководители</h3>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="grey2">
              Отзывчивые, понимающие, справедливые, требовательные, простые в общении.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
