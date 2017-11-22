import Vue from 'vue'
import VueRouter from "vue-router"
import App from "./App.vue"
import DefaultLayout from "./layouts/Default.vue"
import Products from "./pages/Products.vue"
import ContactForm from "./components/ContactForm.vue"

Vue.use(VueRouter)

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: DefaultLayout,
      children: [
        { path: "/products", component: Products, name: 'products' },
        { path: "/products/new", component: ContactForm },
        // {
        //   path: "/products/edit/:id",
        //   name: "editContact",
        //   component: ContactForm
        // }
      ]
    }
  ]
})

new Vue({
  el: "#app",
  router: router,
  render: h => h(App, {})
})
