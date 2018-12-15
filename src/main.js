import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router'
// Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import firebase from "firebase"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyADqJDh-8ud-6NgDCs9374QZ-xSayLmees",
  authDomain: "bath-republic-6d296.firebaseapp.com",
  databaseURL: "https://bath-republic-6d296.firebaseio.com",
  projectId: "bath-republic-6d296",
  storageBucket: "bath-republic-6d296.appspot.com",
  messagingSenderId: "535450455106"
};
firebase.initializeApp(config);


const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true, // fix timestamp warning
};
firestore.settings(settings);


Vue.use(Vuetify),{
  iconfont: 'mdi'
};

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
