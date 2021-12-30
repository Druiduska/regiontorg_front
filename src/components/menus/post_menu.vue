<template>
  <div ref="post_menu_container" class="post__menu__container">
      <div class="post__menu__drop__down">
          <button>Изменить</button>
          <button>Удалить</button>
      </div>
  </div>
</template>
<script>
export default {
  name: "PostMenu",
  data() {
    return {};
  },
  props: {
    aticle_id: Number,
    aticle_left: Number,
    aticle_top: Number,
    aticle_width: Number,
  },
  methods: {},
  mounted() {
    // debugger;
    let cont = this.$refs["post_menu_container"];
    cont.style.top = this.aticle_top + "px";
    cont.style.left = this.aticle_left + "px";
    cont.style.width = this.aticle_width + "px";
  },
};
</script>
<style scoped>
@import "/styles/post-menu.css";
</style>
