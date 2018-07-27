import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 101,
        name: 'iPhone 7',
        price: '789',
        photo: [
          require('@/assets/img/iphone-7.jpg'),
          require('@/assets/img/iphone-72.jpg'),
          require('@/assets/img/iphone-7-3.jpg')
        ]
      },
      {
        id: 102,
        name: 'Samsung S7 Edge',
        price: '467',
        photo: [
          require('@/assets/img/samsung-galaxy-s7-edge.jpg')
        ]
      },
      {
        id: 103,
        name: 'iPhone X',
        price: '364',
        photo: [
          require('@/assets/img/iphone-x.jpg'),
          require('@/assets/img/iphone-x1.jpg')
        ]
      },
      {
        id: 104,
        name: 'Xiaomi Redmi Note 5',
        price: '364',
        photo: [
          require('@/assets/img/xiaomi-redmi-note-5.jpg')
        ]
      },
      {
        id: 105,
        name: 'Asus Zenfone Max Pro',
        price: '364',
        photo: [
          require('@/assets/img/asus-zenfone-max-pro.jpg')
        ]
      }
    ],
    selectedProduct: {
      active: false,
      id: null,
      name: null,
      price: null,
      photo: []
    }
  },
  mutations: {
    bindProduct (state, payload) {
      state.selectedProduct.active = true
      state.selectedProduct.id = payload.id
      state.selectedProduct.name = payload.name
      state.selectedProduct.price = payload.price
      state.selectedProduct.photo = payload.photo
    }
  },
  actions: {}
})
