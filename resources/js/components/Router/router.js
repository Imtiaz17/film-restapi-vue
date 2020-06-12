import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const login  = () => import ("../App/AppLogin.vue")
const signup  = () => import ("../App/AppSignup.vue")
const films  = () => import ("../App/AppFilms.vue")
const filmpost  = () => import ("../App/FilmPost.vue")
const createfilm  = () => import ("../App/CreateFilm.vue")

const routes = [
  	{ path: '/', redirect: '/films'},
    { path: '/films', component: films, name:'films' },
    { path: '/login', component: login, name:'login' },
    { path: '/signup', component: signup, name:'signup' },
    { path: '/films/:slug', component: filmpost, name:'filmpost' },
    { path: '/film/create', component: createfilm, name:'createfilm' },
  ]



  const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode :'history'
  })
  export default router