import Vue from 'vue'

import elCard from '@/components/base/elCard.vue'
import elMenu from '@/components/base/elMenu.vue'
import elTags from '@/components/base/elTags.vue'
import baseCharts from '@/components/base/baseCharts.vue'
// 注册全局组件
Vue.component('menus' , elMenu)
Vue.component('Elcard' , elCard)
Vue.component('Eltags' , elTags)
Vue.component('Basecharts' , baseCharts)
