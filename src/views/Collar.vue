<template>
  <Shop :product="getCollar" :image="collarP" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      collarP: "collarP.jpg",
      category: "Collares",
    };
  },
  computed: {
    ...mapGetters(["getCollar"]),
  },
};
</script>

<style></style>
