const pricingSlider = document.querySelector(
  '.pricing-card .slider__container'
);

const pricingInput = {
  el: pricingSlider.querySelector('.slider'),
};
pricingInput.data = JSON.parse(
  pricingInput.el.getAttribute('data-price-input')
);
pricingInput.currentValEl = document.querySelector('.pricing__views');
// pricingInput.thumbSize = parseInt(
//   window
//     .getComputedStyle(pricingInput.currentValEl)
//     .getPropertyValue('--thumb-size'),
//   10
// );

// Output
const pricingOutputEl = document.querySelector('.pricing__price-container');
const pricingOutput = [];
const pricingOutputObj = {};

pricingOutputObj.currency = pricingOutputEl.querySelector(
  '.pricing__price-currency'
);
pricingOutputObj.amount = pricingOutputEl.querySelector(
  '.pricing__price-amount'
);
pricingOutputObj.month = pricingOutputEl.querySelector('.pricing__price-month');
pricingOutputObj.data = JSON.parse(pricingOutputEl.dataset.priceInput);
pricingOutput.push(pricingOutputObj);

handlePricingSlider(pricingInput, pricingOutput);
window.addEventListener('input', () => {
  handlePricingSlider(pricingInput, pricingOutput);
});

function handlePricingSlider(input, output) {
  // Output the current slider value
  if (input.currentValEl) {
    input.currentValEl.innerHTML = input.data[input.el.value];
  }
  // Update prices
  for (let i = 0; i < output.length; i++) {
    const outputObj = output[i];
    if (outputObj.currency) {
      outputObj.currency.innerHTML = outputObj.data[input.el.value][0];
    }
    if (outputObj.amount) {
      outputObj.amount.innerHTML = outputObj.data[input.el.value][1];
    }
    if (outputObj.month) {
      outputObj.month.innerHTML = outputObj.data[input.el.value][2];
    }
  }
}

console.log(pricingOutput);
