<template>
              <div class="sidebar-widget mb-5">
              <v-text-field
                v-model="search"
                clearable
                autocomplete="on"
                placeholder="Search Products"
                solo-inverted
                flat
                color="primary"
                      ><v-icon
                      slot="append"
                      color="primary">
                      mdi-magnify
                      </v-icon>
              </v-text-field>

            </div>
</template>

<script>
export default {
name: "ProductsSearch",
  data() {
    return {
      search: null,
    };
  },
 computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products;
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        );
      });
    },
  },

}
</script>

<style>

</style>