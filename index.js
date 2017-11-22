import Vue from 'vue'
import VueRouter from "vue-router"
import VeeValidate from 'vee-validate'
import App from "./App.vue"
import DefaultLayout from "./layouts/Default.vue"
import Products from "./pages/Products.vue"
import ProductForm from "./components/ProductForm.vue"

Vue.use(VueRouter)
Vue.use(VeeValidate)

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: DefaultLayout,
      children: [
        { path: "/products", component: Products },
        { path: "/products/new", component: ProductForm },
        {
          path: "/products/edit/:id",
          name: "editProduct",
          component: ProductForm
        }
      ]
    }
  ]
})

new Vue({
  el: "#app",
  router: router,
  render: h => h(App, {})
})
