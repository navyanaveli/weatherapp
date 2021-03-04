import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favoritelist: new Set()
  },
  mutations: {
    addfavorite(state,name){
      state.favoritelist.add(name);
    },
    removefavorite(state,name){
      state.favoritelist.delete(name);
    }
  },
  actions: {
    addfavoritelist({commit},name){
      commit('addfavorite',name);
    },
    removefavoritelist({commit},name){
      commit('removefavorite',name);
    },
    iscityfavorite({state}, name){
      return state.favoritelist.has(name);
    }
  },
  getters: {
    getfavoritelist(state){
      return state.favoritelist || [];
    }

  }

})
