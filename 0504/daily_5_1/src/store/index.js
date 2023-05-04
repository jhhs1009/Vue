import Vue from 'vue'
import Vuex from 'vuex'

// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte'
      },
      {
        title: '아이스티',
        price: 3500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?icetea'
      }
    ],
    sizeList: [
      {
        name : 'small',
        price : 500,
        selected : false,
      },
      {
        name : 'medium',
        price : 1000,
        selected : false,
      },
      {
        name : 'large',
        price : 1500,
        selected : false,
      }
    ],
    updateMenuList: [

    ],
    updateSizeList: [

    ],
    addOrder: []
  },
  getters: {
  },
  mutations: {
    updateMenuList: function (state, selectedMenu) {
      state.menuList = state.menuList.map((menu) => {
        if (menu.title === selectedMenu.title) {
          menu.selected = true
        }
        else {
          menu.selected = false
        }
        return menu
      })
    },
    updateSizeList: function (state, selectedSize) {
      state.sizeList = state.sizeList.map((size) => {
        if (size.name === selectedSize.name) {
          size.selected = true
        }
        else {
          size.selected = false
        }
        return size
      })
    },
  },
  actions: {

  },
  modules: {
  }
})