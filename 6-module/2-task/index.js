export default class ProductCard {
  constructor(product) {
    this.product = product;
    this._container = document.createElement('div');
    this._container.innerHTML = `
    <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`;

    let button = this._container.querySelector('.card__button');
    button.addEventListener('click', function(){
        let event = new CustomEvent('product-add', {
          bubbles: true,
          detail: product.id,
        });

        document.body.dispatchEvent(event);
    });
  }

  get elem() {
    return this._container;
  }
}