<template>
  <div>
    <h2>Products</h2>
    <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="onSearch">
      <input class="form-control form-control form-control-sm" type="text" v-model="searchQuery" placeholder="Search" />
      <button class="btn btn-outline-success btn-sm" type="submit">Search</button>&nbsp
    </form>
    <p v-if="hasNoSearchResults">No results!</p>
    <table v-else class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>{{product.price}}</td>
          <td>
            <router-link class="btn btn-success" :to="{name: 'editProduct', params: { id: product.id }}">edit</router-link>
            <button type="button" class="btn btn-link" v-on:click="deleteProduct(product)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-primary" v-if="isSearchMode" v-on:click="showAll">clear search</button>
    <router-link class="btn btn-success" to="/products/new">add</router-link>
  </div>
</template>

<script>
import ProductService from "../services/Products";

export default  {
  data: function() {
    return {
      isSearchMode: false,
      searchQuery: '',
      editProduct: null,
      products: []
    }
  },
  created: function() {
    this.showAll()
  },
  methods: {
    showAll: function() {
      this.searchQuery = ''
      this.isSearchMode = false
      let productService = new ProductService()
      productService.fetchAll().then(response => {
        this.products = response.content
      })
    },
    deleteProduct(product) {
      if(confirm(`Do you really want to delete product with id ${product.id} ?`) === true) {
        let productService = new ProductService();
        productService.delete(product.id).then((response) => {
          let updatedProducts = this.products;
          updatedProducts.splice(updatedProducts.indexOf(product), 1);
          this.products = updatedProducts;
        })
      }
    },
    onSearch: function() {
      if(!this.searchQuery.trim()) return
      console.log(`searching ${this.searchQuery} ...`)
      let productService = new ProductService();
      productService.search(this.searchQuery).then(response => {
        this.products = response.content
      })
    }
  },
  computed: {
    hasNoSearchResults: function() {
      return this.searchQuery && this.products && this.products.length == 0
    }
  }
}
</script>
