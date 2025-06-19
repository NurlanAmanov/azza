import React from 'react'

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
            <h1 className="uppercase bold fs-40">Цех тортов и сладостей</h1>
            <div className="line flex center">
              <p className="left"></p>
              <span className="darkCircle"></span>
              <p className="right"></p>
            </div>
            <p className="fs-20 careerBannerText mainColor textCenter">
              Наш цех тортов и цех сладостей расположены в городе Баку. Даже не зная точного местонахождения цехов, не ошибешься – вкусные запахи корицы, ванили и какао от кондитерских изделий разносятся на всю окрестность.
            </p>
          </div>
        </div>
        <img className="mobImg" src={cakebanner} alt=""/>
      </div>

      <h2 className="fs-20 uppercase textCenter bold m-100 discriptionText" data-aos="fade-up">
        В наших цехах мы изготавливаем самую разнообразную продукцию кондитерских изделий:
      </h2>

      <div className="cakesBlock">
        <div className="flex">
          <div className="cakesItem small">
            <div className="cakesItem-text">
              <a href="">
                <p className="uppercase mainColor fs-20 bold">Пироги</p>
              </a>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
              <img src={cake1} alt=""/>
            </div>
          </div>
          <div className="cakesItem big">
            <div className="cakesItem-text">
              <a href="">
                <p className="uppercase mainColor fs-20 bold">Торты</p>
              </a>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
              <img src={cake2} alt=""/>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="cakesItem big">
            <div className="cakesItem-text">
              <a href="">
                <p className="uppercase mainColor fs-20 bold">Национальные сладости</p>
              </a>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
              <img src={cake3} alt=""/>
            </div>
          </div>
          <div className="cakesItem small">
            <div className="cakesItem-text">
              <a href="">
                <p className="uppercase mainColor fs-20 bold">Выпечка</p>
              </a>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
              <img src={cake4} alt=""/>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="cakesItem small">
            <div className="cakesItem-text">
              <a href="">
                <p className="uppercase mainColor fs-20 bold">Рулеты</p>
              </a>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
              <img src={cake5} alt=""/>
            </div>
          </div>
          <div className="cakesItem small">
            <div className="cakesItem-text">
              <a href="">
                <p className="uppercase mainColor fs-20 bold">Эклеры</p>
              </a>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
              <img src={cake6} alt=""/>
            </div>
          </div>
          <div className="cakesItem small">
            <div className="cakesItem-text">
              <a href="">
                <p className="uppercase mainColor fs-20 bold">Печенье</p>
              </a>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '-8px' }}>
              <img src={cake7} alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex advantageItems cakesInfoItems">
        <div className="advantageItem textCenter" data-aos="fade-up">
          <h3 className="bold fs-20 uppercase">Контроль качества</h3>
          <div className="line flex center">
            <p className="left"></p>
            <span className="darkCircle"></span>
            <p className="right"></p>
          </div>
          <p className="grey2">
            Контроль качества – вот в чем заключается один из главных секретов успеха нашей продукции. Помимо отдела контроля качества все кондитерские изделия находятся под личным контролем руководства. Все используемые в производстве ингредиенты проходят несколько этапов проверки, тщательно очищаются и только после этого используются в приготовлении.
          </p>
        </div>
        <div className="advantageItem textCenter" data-aos="fade-up">
          <h3 className="bold fs-20 uppercase">Отбор рецептов</h3>
          <div className="line flex center">
            <p className="left"></p>
            <span className="darkCircle"></span>
            <p className="right"></p>
          </div>
          <p className="grey2">
            Рецептура нашей продукции проходит жесткий отбор, для которого проводятся дегустации, где учитывается мнение каждого сотрудника. И все это для того, чтобы соответствовать требованием наших клиентов.
          </p>
        </div>
        <div className="advantageItem textCenter" data-aos="fade-up">
          <h3 className="bold fs-20 uppercase">Передовые технологии</h3>
          <div className="line flex center">
            <p className="left"></p>
            <span className="darkCircle"></span>
            <p className="right"></p>
          </div>
          <p className="grey2">
            В производственных цехах внедрены передовые технологии и установлено современное оборудование от мировых лидеров пищевой промышленности, например: печи и камера замедленного брожения Miwe, миксеры Diosna, тесто раскатывающая машина Rondo, отсаживающие машины Bakon и другие.
          </p>
        </div>
      </div>

      <div className="bg-color cake-bg-color relative">
        <div className="marginCakes">
          <p className="bold fs-26 mainColor textCenter textCenter">
            Вкусы наших кондитерских изделий уже давно стали классикой, которую ни с чем не спутать.
          </p>
          <p className="m-0 grey2 fs-18 textCenter">
            На данный момент мы расширяем наше производство, чтобы радовать вкусными тортами и сладостями еще большее количество людей.
          </p>
        </div>
        <div className="bg-image"></div>
      </div>

      <div className="excursion">
        <h3 className="uppercase bold mainColor fs-20">
          Экскурсия по Производству AZZA
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
          <a className="uppercase mainColor w-600" href="#">показать всю галерею</a>
          <p className="right"></p>
        </div>
      </div>
    </>
  )
}

export default Tortlar