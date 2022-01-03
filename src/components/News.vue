<template>
  <div class="element__container">
    <div class="news__controls">
      <button class="news__add__btn">
        <img src="images/add_news.svg" class="news__btn__image" />
        <span class="news__btn__title">Добавить новую запись</span>
      </button>
    </div>
    <section class="news__space">
      <div class="posts_container">
        <Post
          v-for="(item, index) in $store.state.Posts"
          :key="index"
          :id="item.id"
        >
          <template v-slot:title>
            {{ item.title }}
          </template>
          <template v-slot:article>
            {{ item.article }}
          </template>
        </Post>
      </div>
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
    return {};
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