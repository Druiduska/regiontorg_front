<template>
  <div class="post__edit__element__container">
    <main class="post__edit__main__container">
      <div class="post__edit__title">
        <label for="title_input" class="post__edit__title__label">Заголовок:</label>
        <input
          id="title_input"
          class="post__edit__title__input"
          type="text"
          maxlength="100"
          :value="post.title"
          ref="title_input"
        />
      </div>
      <div class="post__edit__article__space">
        <textarea 
        class="post__edit__article" 
        :value="post.article"
        ref="post__article"></textarea>
      </div>
    </main>
    <footer class="post__edit__footer">
        <button class="btn_cancel" @click="on_cancel">Отменить</button>
        <button class="btn_save">Сохранить</button>
        <button class="btn_exit" @click="on_exit">Выйти</button>
    </footer>
  </div>
</template>
<script>
export default {
  name: "PostEdit",
  components: {
    //  Post,
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
@import "/styles/post-edit.css";
</style>