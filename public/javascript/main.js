Vue.component('payment-card-component', {
  props: {
    title: String,
    text: String
  },
  data: () => {
    return {
      titlePlan: 'Annual Plan',
      pricePlan: '59.99'
    }
  },
  template: `
    <div class="card bg-white shadow-xl rounded-xl">
      <div class="card-header">
        <img class="card-image rounded-t-xl" src="public/images/illustration-hero.svg" alt="card image"/>
      </div>
      <div class="card-body px-12 py-8">
        <h3 class="card-title text-center my-3">{{ title }}</h3>
        <p class="card-text text-center my-3">{{ text }}</p>
        <plan-container-component :title="titlePlan" :price="pricePlan"></plan-container-component>
        <button class="card-action rounded-xl py-2.5 mb-2 w-full text-white">Procced to Payment</button>
        <button class="card-action-secondary py-2.5 mt-2 w-full">Cancel Order</button>
      </div>
    </div>
  `
})

Vue.component('plan-container-component', {
  props: {
    title: String,
    price: String
  },
  template: `
    <div class="plan-container flex justify-between my-5 p-3 rounded-xl">
      <img class="plan-image" src="public/images/icon-music.svg" alt="icon music"/>
      <div class="plan-body">
        <h5 class="plan-title">{{ title }}</h5>
        <p class="plan-price">$ {{ price }} / year</p>
      </div>
      <button class="plan-change underline font-bold hover:no-underline">Change</button>
    </div>
  `
})

Vue.component('app-footer-component', {
  props: ['author', 'link'],
  template: `
    <footer class="font-semibold text-sm text-center">
      Challenge by <a class="text-gray-700 hover:text-blue-500" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a  class="text-gray-700 hover:text-blue-500" :href="link">{{ author }}</a>.
    </footer>
  `
})
const app = new Vue({
  el: '#app',
  data: {
    cardTitle: 'Order Summary',
    cardText: 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'
  }
})