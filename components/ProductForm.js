import ProductService from "../services/Products"

export default {
  data: function() {
    return {
      product: null,
      serverErrors: []
    }
  },
  created() {
    let productService = new ProductService()
    if (this.$route.params.id) {
      productService.fetch(parseInt(this.$route.params.id)).then(response => {
        this.product = response.content
      })
    } else {
      let newProduct = {
        name: "",
        description: "",
        price: ''
      }
      this.product = newProduct
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.saveProduct(this.product)
        }
      })
    },
    saveProduct(product) {
      let productService = new ProductService()
      productService.save(product).then(response => {
        if (!response.is_error) {
          this.$router.go(-1)
        } else {
          this.serverErrors = response.error_content.errors || [response.error_content.code]
        }
      })
    }
  }
}
