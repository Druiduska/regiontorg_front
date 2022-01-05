<template>
  <div>
    <fieldset class="post__fieldset">
      <header class="post__header">
        <div class="post__header__title">
          <slot name="title"> </slot>
        </div>
        <img
          v-show="Boolean($store.state.LoginInfo)"
          @mouseover="show_menu($event)"
          src="/images/more_horiz_black.svg"
        />
      </header>
      <article @click="on_article_click" ref="post_article">
        <slot name="article"> </slot>
      </article>
    </fieldset>
    <PostMenu      
      v-if="is_menu"
      :post_id="id"
      :aticle_left="aticle_left"
      :aticle_top="aticle_top"
      :aticle_width="aticle_width"
      @mouseenter="mouse_on_list"
      @mouseleave="mouse_out_list"
      @close="closePostMenu"
      @open_deleted_dialog="on_open_deleted_dialog"
    />
  </div>
</template>
<script>
import PostMenu from "@/components/menus/post_menu.vue";
export default {
  name: "Post",
  components: {
    PostMenu,
  },
  data() {
    return {
      is_open_deleted_dialog: false,
      is_menu: false,
      is_menu_bth: false,
      is_menu_list: false,
      aticle_left: Number,
      aticle_top: Number,
      aticle_width: Number,
      mouse_menuX: 0,
      mouse_menuY: 0,
      mouse_squar_radius: 2000,
    };
  },
  props: {
    id: Number,
  },
  methods: {
    on_open_deleted_dialog() {
      this.is_open_deleted_dialog = true;
    },
    show_menu(event) {
      let atic = this.$refs["post_article"];
      this.aticle_left = atic.offsetLeft;
      this.aticle_top = atic.offsetTop;
      this.aticle_width = atic.clientWidth;
      this.is_menu = true;
      this.mouse_menuX = event.clientX;
      this.mouse_menuY = event.clientY;
      window.addEventListener("mousemove", this.chk_hide_menu);
    },
    closePostMenu() {
      this.is_menu_list = false;
      this.hide_menu();
    },
    hide_menu() {
      this.is_open_deleted_dialog = false;
      this.is_menu = this.is_menu_bth | this.is_menu_list;
      window.removeEventListener("mousemove", this.chk_hide_menu);
    },
    chk_hide_menu(event) {
      if (this.is_open_deleted_dialog) return;
      let sqrd =
        (this.mouse_menuX - event.clientX) ** 2 +
        (this.mouse_menuY - event.clientY) ** 2;
      if (sqrd > this.mouse_squar_radius) {
        this.is_menu_bth = false;
        this.hide_menu();
      }
    },
    mouse_on_list() {
      this.is_menu_list = true;
    },
    mouse_out_list() {
      if (this.is_open_deleted_dialog) return;
      this.is_menu_list = false;
      this.hide_menu();
    },
    on_article_click() {
      this.$router.push("/posts/" + this.id);
    },
  },
};
</script>
<style scoped>
@import "/styles/post.css";
</style>