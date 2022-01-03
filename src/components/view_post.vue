<template>
  <div>
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
  </div>
</template>
<script>
import Post from "@/components/Post.vue";
export default {
  name: "ViewPost",
  components: {
    Post,
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
@import "/styles/view_post.css";
</style>