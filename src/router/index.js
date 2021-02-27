import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Admin from '@/views/Admin/admin'
import users from '@/views/Admin/users' 
import news from '@/views/Admin/news' 
import notice from '@/views/Admin/Notice' 
import game from'@/views/Admin/game' 
import Ranking from'@/views/ranking' 
import feedback from '@/views/Admin/feedback'
import userinfo from '@/views/Admin/userinfo'
import Games from '@/views/Games'
import Center from '@/views/center'
import Notice from '@/views/Notice'
import Detail from '@/views/Detail'
import Detail_1 from '@/views/Detail_1'
import Detail_2 from '@/views/Detail_2'
import Detail_3 from '@/views/Detail_3'
import User from '@/views/center/User'
import Users from '@/views/center/user/users'
import maininfo from '@/views/center/user/maininfo'
import Login from '@/views/center/Login'
import Register from '@/views/center/Register'
import FindPassword from '@/views/center/FindPassword'

Vue.use(VueRouter)

const routes = [
	{
	  path: '/admin',
	  component: Admin,
	  children:[
	  	{
	  		path: 'news',
	  		component: news,
	  	},
	  	{
	  		path: 'users',
	  		component: users,
	  	},
	  	{
	  	   path: 'notice',
	  	   component: notice,
	  	 },
		 {
		    path: 'game',
		    component: game,
		  },
		  {
		     path: 'feedback',
		     component: feedback,
		   },
		   {
		      path: 'userinfo',
		      component: userinfo,
		    },
	  	 {
	  	    path: '/admin',
	  	    redirect:'/admin/users'
	  	  },
	  ]
	},
  {
    path: '/film',
    component: Film
  },
  {
    path: '/games',
    component: Games,
  },
  
  {
    path: '/ranking',
    component: Ranking,
 },
 {
    path: '/center',
    component: Center,
	children:[
		{
			path: 'login',
			component: Login,
		},
		{
			path: 'register',
			component: Register,
		},
		{
		   path: 'findPassword',
		   component: FindPassword,
		 },
		 {
			 path: 'user',
			 component: User,
			children:[
			 	{
			 		path: 'maininfo',
			 		component: maininfo,
			 	},
			 	{
			 		path: 'users',
			 		component: Users,
			 	},
			 	 {
			 	    path: '/center/user',
			 	    redirect:'/center/user/users'
			 	  },
			 ]
		 },
		 {
		    path: '',
		    redirect:'/center/user'
		  },
	]
  },
  {
      path: '/notice',
      component: Notice
    },
 {
    path: '/detail/:id',
 	  name:"detail",
    component: Detail
  },
  {
	  path: '/detail_1/:myid/:myid1',
	    name:"detail_1",
	  component: Detail_1
  },
  {
  	  path: '/detail_2/:id',
  	    name:"detail_2",
  	  component: Detail_2
  },
 {
 	  path: '/detail_3/:name/:id',
 	    name:"detail_3",
 	  component: Detail_3
 },

  {
     path: '*',
     redirect:'/film'
   },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  // base:'NGAME',
  routes
})

export default router
