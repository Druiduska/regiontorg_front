<template>
  <div>
    <section class="news__space">
      <div class="news__controls">
        <button class="news__add__btn">
          <img src="images/add_news.svg" class="news__btn__image" />
          <span class="news__btn__title">Добавить новую запись</span>
        </button>
      </div>
      <Post
        v-for="(item, index) in $store.state.Posts"
        :key="index"
        :id="index"
        :title="item.title"
        :article="item.article"
      />
    </section>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
export default {
  name: "News",
  components: {
    Post,
  },
  data() {
    return {
    };
  },
  props: {
    // msg: String
  },
  methods: {},
};
</script>

<style scoped>
@import "/styles/news.css";
</style>