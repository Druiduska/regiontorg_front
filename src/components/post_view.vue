<template>
  <div class="post__view__element__container">
    <main class="post__view__main__container">
      <div class="post__view__title">
        <label for="title_text" class="post__view__title__label">Заголовок:</label>
        <div
          id="title_text"
          class="post__view__title__text"
        >
        {{ post.title }}
        </div>
      </div>
      <article class="post__view__article__space">
          <label for="post__article" class="post__view__article__labael">Статья:</label>
        <pre 
        id="post__article"
        class="post__view__article">{{ post.article }}</pre>
      </article>
    </main>
    <footer class="post__view__footer">
      <button class="btn_exit" @click="on_exit">Выйти</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "PostEdit",
  components: {
  },
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
    on_cancel(){
        this.$refs["post__article"].value=this.post.article;
        this.$refs["title_input"].value=this.post.title;
    },
    on_exit(){
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
@import "/styles/post-view.css";
</style>