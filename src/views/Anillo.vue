<template>
  <Shop :product="getAnillo" :image="heroWomen" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop},
  data() {
    return {
      heroWomen: "anilloP.jpg",
      category: "Anillos",
    };
  },
  computed: {
    ...mapGetters(["getAnillo"]),
  },
};
</script>

<style></style>
