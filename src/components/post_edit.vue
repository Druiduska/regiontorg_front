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
          :value="post.title"
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
          :value="post.article"
          ref="post__article"
        ></textarea>
      </article>
    </main>
    <footer class="post__edit__footer">
      <button class="btn_cancel" @click="on_cancel">Отменить</button>
      <button class="btn_save" @click="on_save">Сохранить</button>
      <button class="btn_exit" @click="on_exit">Выйти</button>
    </footer>
  </div>
</template>
<script>
import postsFetch from "@/mixins/posts_fetch.js";
export default {
  name: "PostEdit",
  mixins: [postsFetch],
  data() {
    return {
      post: { id: 0, title: "", article: "" },
    };
  },
  props: {
    post_id: Number,
  },
  computed: {
    posts() {
      return this.$store.state.Posts;
    },
  },
  watch: {
    posts(newVal) {
      this.getPost(newVal);
    },
  },
  methods: {
    on_cancel() {
      this.$refs["title_input"].value = this.post.title;
      this.$refs["post__article"].value = this.post.article;
    },
    on_save() {
      try{
      this.post_update(
        this.$refs["title_input"].value.trim(),
        this.$refs["post__article"].value.trim(),
        this.post_id,
        this.on_exit
      );
      } catch (e) {
        if ( e.code && e.code!=204) this.on_exit();
      }
    },
    on_exit() {
      this.$router.go(-1);
    },
    getPost(a_posts) {
      let empty_post = { id: 0, title: "", article: "" };
      if (a_posts.length === 0) {
        this.post = empty_post;
      } else {
        let cur_post = a_posts.filter((item) => item.id == this.post_id);
        if (cur_post === 0) {
          this.post = empty_post;
        } else {
          this.post = cur_post[0];
        }
      }
    },
  },
  mounted() {
    this.getPost(this.$store.state.Posts);
  },
};
</script>
<style scoped>
@import "/styles/post-edit.css";
</style>