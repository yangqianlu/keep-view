import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ServerList from '@/components/ServerList'
import Main from '@/components/Main'

Vue.use(Router)

var router=new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/login/server',
      component: ServerList,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/login/server/main',
      component: Main,
      meta: {
        keepAlive: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const toDepth = to.path.split('/').length
  console.log(toDepth)
  const fromDepth = from.path.split('/').length
  if (toDepth < fromDepth) {
    console.log('后退。。。')
    from.meta.keepAlive = false
    to.meta.keepAlive = true
  }
  next()
})

export default  router