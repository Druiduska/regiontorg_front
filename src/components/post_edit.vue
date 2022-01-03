<template>
  <div class="element__container">
    <div class="post__title">
            <label for="title_input" class="title__label">Заголовок:</label>
            <input id="title_input" class="title__input" type="text" maxlength="100" :value="post.title"/>
    </div>
    <section class="article__space">
      <div class="article_container">
        {{ post.article }}
      </div>
    </section>
  </div>

  <!-- <div>
    <Post :id="post.id">
      <template v-slot:title>
        {{ post.title }}
      </template>
      <template v-slot:article>
        <div class="view__post__article">
        {{ post.article }}
        </div>
      </template>
    </Post>
  </div> -->
</template>
<script>
// import Post from "@/components/Post.vue"; 
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