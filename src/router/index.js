import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ForexDepositRateView from '../views/rates/ForexDepositRateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      metaTags: [
        {
          name: 'description',
          content: 'The home page description'
        },
        {
          property: 'og:description',
          content: 'The home page og:description'
        }
      ]
    }
  },
  {
    path: '/ForexDepositRate',
    component: ForexDepositRateView,
    meta: {
      title: 'ForexDepositRate',
      metaTages: [
        {
          name: 'description',
          content: 'The description of ForexDepositRate'
        },
        {
          property: 'og:description',
          content: "The og:description of ForexDepositRate"
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle){
    document.title = nearestWithTitle.meta.title;
  }else if(previousNearestWithMeta){
    document.title = previousNearestWithMeta.meta.title;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  if(!nearestWithMeta){
    return next();
  }

  nearestWithMeta.meta.metaTags.map(tagDef =>{
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
})

export default router
