import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
Vue.component('l-button',Button)
Vue.component('l-icon',Icon)
Vue.component('l-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false

    }
})