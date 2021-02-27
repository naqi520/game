import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  name:'' || window.localStorage.getItem('name'),
	  isAdmin:false || window.localStorage.getItem('isAdmin'),
	  userHead:'', 
	  imgHead:'',
	  address:'',
	  age:'',
	  date:'',
	  profile:'',
	  sex:'',
	  username:'',
	  zodiac:''
  },
  mutations: {
	  USER_NAME(state,payload){
	  	state.name = payload.name;
		state.isAdmin = payload.isAdmin;
		state.userHead = payload.userHead;
		
	  },
	  USER_INFO(state,payload){
	  state.imgHead = payload.imgHead;
	  	state.address = payload.address;
			state.age = payload.age;
			state.date = payload.date;
			state.profile = payload.profile;
			state.sex = payload.sex;
			state.username = payload.username;
			state.zodiac = payload.zodiac;
	  },
	  
  },
  actions: {
  },
  modules: {
  }
})
