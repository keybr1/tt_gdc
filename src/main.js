class Products {
    constructor() {

    }

    render() {
        let htmlCatalog = "";
        CATALOG.forEach(({ productId, code, title, primaryImageUrl, assocProducts, priceRetail, priceRetailAlt, priceGold, priceGoldAlt }) => {
            htmlCatalog += `
            <div class="product product_horizontal">                                
                <span class="product_code">Код: ${code.replace(/^0+/, '')}</span>
                <div class="product_status_tooltip_container">
                    <span class="product_status">Наличие</span>
                </div>                                
                <div class="product_photo">
                    <a href="#" class="url--link product__link">
                        <img src="${primaryImageUrl}">
                    </a>                                    
                </div>
                <div class="product_description">
                    <a href="#" class="product__link">${title}</a>
                </div>
                <div class="product_tags hidden-sm">
                    <p>Могут понадобиться:</p>
                    <a href="#" class="url--link">подложка,</a>
                    <a href="#" class="url--link">плинтус натуральный,</a>
                    <a href="#" class="url--link">рулетка,</a>
                    <a href="#" class="url--link">набор для укладки ламината,</a>
                    <a href="#" class="url--link">ножовка по ламинату,</a>
                    <a href="#" class="url--link">гель для стыков ламината Clic Protect.</a>
                </div>
                <div class="product_units">
                    <div class="unit--wrapper">
                        <div class="unit--select unit--active">
                            <p class="ng-binding">За м. кв.</p>
                        </div>
                        <div class="unit--select">
                            <p class="ng-binding">За упаковку</p>
                        </div>
                    </div>
                </div>
                <p class="product_price_club_card">
                    <span class="product_price_club_card_text">По карте<br>клуба</span>
                    <span class="goldPrice">${priceGoldAlt.toFixed(2)}</span>
                    <span class="rouble__i black__i">
                        <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                        </svg>
                    </span>
                </p>
                <p class="product_price_default">
                    <span class="retailPrice">${priceRetailAlt.toFixed(2)}</span>
                    <span class="rouble__i black__i">
                        <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                        </svg>
                    </span>
                </p>
                <div class="product_price_points">
                    <p class="ng-binding">Можно купить за 231,75 балла</p>
                </div>
                <div class="list--unit-padd"></div>
                <div class="list--unit-desc">
                    <div class="unit--info">
                        <div class="unit--desc-i"></div>
                        <div class="unit--desc-t">
                            <p>
                                <span class="ng-binding">Продается упаковками:</span>
                                <span class="unit--infoInn">1 упак. = 2.47 м. кв. </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="product__wrapper">
                    <div class="product_count_wrapper">
                        <div class="stepper">
                            <input class="product__count stepper-input" type="text" value="1">
                            <span class="stepper-arrow up" data-action="up"></span>
                            <span class="stepper-arrow down" data-action="down"></span>                                            
                        </div>
                    </div>
                    <span class="btn btn_cart" data-url="/cart/" data-product-id="${productId}">
                        <svg class="ic ic_cart">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                        </svg>
                        <span class="ng-binding">В корзину</span>
                    </span>
                </div>
            </div>
            `
        });

        const html = `
        <div class="products_page pg_0">
            ${htmlCatalog}
        </div>
    `;

    document.getElementById("products_section").innerHTML = html;
    }
};

const productsPage = new Products();

function render() {
    productsPage.render();
};

let CATALOG = [];

fetch("./src/products.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    render();
  })
  .catch((error) => {
    console.log(error);
  });

  // counter

  window.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-action")) {
      const counterStepper = event.target.closest(".stepper");
      const counter = counterStepper.querySelector(".stepper-input");
      
      if (event.target.dataset.action === "up") {
        counter.value = ++counter.value;
      } else {
        if (parseInt(counter.value) > 1) {
            counter.value = --counter.value;
            }
        }
    };
  });
