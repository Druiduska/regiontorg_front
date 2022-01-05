<template>
  <div ref="post_menu_container" class="post__menu__container">
      <div class="post__menu__drop__down">
          <button @click="on_edit">Изменить</button>
          <button @click="on_delete">Удалить</button>
      </div>
    <DeleteDialog
      v-if="is_delete"
      :post_id="post_id"
      @close="closeDeleteDialog"
    />
  </div>
</template>
<script>
import DeleteDialog from "/src/components/dialogs/delete.vue";
export default {
  name: "PostMenu",
  components: {
    DeleteDialog,
  },
  data() {
    return {
      is_delete: false,
    };
  },
  props: {
    post_id: Number,
    aticle_left: Number,
    aticle_top: Number,
    aticle_width: Number,
  },
  methods: {
    on_edit(){
      this.$router.push('/posts/edit/'+this.post_id)
    },
    on_delete(){
      this.is_delete=true;
      this.$emit('open_deleted_dialog');
    },
    closeDeleteDialog(){
      this.is_delete=false;
      this.$emit('close');
    },
  },
  mounted() {
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
