<template>
  <div>
    <Modal @close="closeModal">
      <template v-slot:sign>
        <img src="images/delete_black.svg" class="modal__delete__image" />
      </template>
      <template v-slot:header>
        <div>Удаление</div>
      </template>
      <template v-slot:body>
        <div class="modal__delete__body">
          <img src="images/warning_amber.svg" class="modal__body__image" />
          <span class="modal__body__label">
            Вы действительно хотите удалить эту запись?
          </span>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" @click="closeModal">Закрыть</button>
        <button type="button" @click="on_delete" style="margin-left: 0.3rem">
          Удалить
        </button>
      </template>
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/dialogs/modal.vue";
import postsFetch from "@/mixins/posts_fetch.js";

export default {
  name: "DeleteDialog",
  components: {
    Modal,
  },
  mixins: [postsFetch],
  props: {
    post_id: Number,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    on_delete() {
      try {
        this.post_delete(this.post_id, this.closeModal());
      } catch (e) {
        this.closeModal();
      }
    },
  },
};
</script>
<style scoped>
@import "/styles/delete-dialog.css";
</style>