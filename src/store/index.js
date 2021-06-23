import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isshow:false,   //移动端展示
    fontColor: false, //背景颜色切换
    Color:'#333',
    LoadingShow: false, //loading效果展示
    LoadingTitle:'正在加载请稍后...',
    baseURL:'https://www.foreile.link:3000'
  },
  mutations: {
    updateShow(state,data) {
      state.isshow = data
    },
    updatefont(state, data) {
      state.fontColor = data
      data ? state.Color = '#fff': state.Color = '#333'
    },
    LoadingTitleChange(state, data) {
      state.LoadingTitle = data.title;
      state.LoadingShow = data.isshow;
    }
  }
})
