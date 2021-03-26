const pricingSlider = document.querySelector(
  '.pricing-card .slider__container'
);

// Input
const pricingInput = {
  el: pricingSlider.querySelector('.slider'),
};
pricingInput.data = JSON.parse(pricingInput.el.dataset.priceInput);
pricingInput.currentValEl = document.querySelector('.pricing__views');

// Output
const pricingOutputEl = document.querySelector('.pricing__price-container');
const pricingOutput = {};

pricingOutput.currency = pricingOutputEl.querySelector(
  '.pricing__price-currency'
);
pricingOutput.amount = pricingOutputEl.querySelector('.pricing__price-amount');
pricingOutput.month = pricingOutputEl.querySelector('.pricing__price-month');
pricingOutput.data = JSON.parse(pricingOutputEl.dataset.priceInput);

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
  if (output.currency) {
    output.currency.innerHTML = output.data[input.el.value][0];
  }
  if (output.amount) {
    output.amount.innerHTML = output.data[input.el.value][1];
  }
  if (output.month) {
    output.month.innerHTML = output.data[input.el.value][2];
  }
}
