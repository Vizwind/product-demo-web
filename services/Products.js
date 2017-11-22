import RestUtilities from "./RestUtilities";

export default class Products {
  fetchAll() {
    return RestUtilities.get("/api/products")
  }
}
