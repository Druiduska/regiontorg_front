<template>
  <div class="post__edit__element__container">
    <main class="post__edit__main__container">
      <div class="post__edit__title">
        <label for="title_input" class="post__edit__title__label"
          >Заголовок:</label
        >
        <input
          id="title_input"
          class="post__edit__title__input"
          type="text"
          maxlength="100"
          ref="title_input"
        />
      </div>
      <article class="post__edit__article__space">
        <label for="post__article" class="post__edit__article__labael"
          >Статья:</label
        >
        <textarea
          id="post__article"
          class="post__edit__article"
          ref="post__article"
        ></textarea>
      </article>
    </main>
    <footer class="post__edit__footer">
      <button class="btn_save" @click="on_save">Сохранить</button>
      <button class="btn_exit" @click="on_exit">Выйти</button>
    </footer>
  </div>
</template>
<script>
import postsFetch from "@/mixins/posts_fetch.js";
export default {
  name: "PostAdd",
  mixins: [postsFetch],
  methods: {
    on_save() {
      try {
        this.post_add(
          this.$refs["title_input"].value.trim(),
          this.$refs["post__article"].value.trim(),
          this.on_exit
        );
      } catch (e) {
        if ( e.code && e.code!=424) this.on_exit();
      }
    },
    on_exit() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
@import "/styles/post-edit.css";
</style>