<template>
  <div>
    <div v-if="!product">Loading...</div>
    <fieldset v-else class="form-group">
      <legend v-if="product.id">Edit product</legend>
      <legend v-else>New product</legend>
      <div v-if="errors.length" class="errors">{{ errors }}</div>
      <form v-on:submit.prevent="onSubmit">
        <div class="form-group">
          <label htmlFor="inputFirstName" class="form-control-label">Name</label>
          <input type="text" name="name" id="inputName" v-model="product.name" class="form-control form-control-danger" />
        </div>
        <div class="form-group">
          <label htmlFor="inputEmail" class="form-control-label">Description</label>
          <input type="text"c name="description" id="inputDescription" v-model="product.description" class="form-control form-control-danger" />
        </div>
        <div class="form-group">
          <label htmlFor="inputPhone" class="form-control-label">Price</label>
          <input type="tel" name="price" id="inputPrice" v-model="product.price" class="form-control form-control-danger" />
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Save</button>
        <button class="btn btn-lg btn-secondary btn-block" type="button" v-on:click="$router.go(-1)">Cancel</button>
      </form>
    </fieldset>
  </div>
</template>

<script>
import ProductForm from './ProductForm'
export default ProductForm
</script>
