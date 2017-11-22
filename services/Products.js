import RestUtilities from "./RestUtilities";

export default class Products {
  fetchAll() {
    return RestUtilities.get("/api/products")
  }

  update(product) {
    return RestUtilities.put(`/api/products/${product.id}`, product)
  }

  create(product) {
    return RestUtilities.post("/api/products", product)
  }

  save(product) {
    if (product.id) {
      return this.update(product)
    } else {
      return this.create(product)
    }
  }
}
