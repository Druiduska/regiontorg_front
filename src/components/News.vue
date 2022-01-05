<template>
  <div class="element__container">
    <div class="news__controls">
      <button 
      v-show="Boolean($store.state.LoginInfo)"
      class="news__add__btn" 
      @click="on_post_add">
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
            {{ item.article.substring(0, 255) }}
            <b>{{ item.article.length > 255 ? '...': '' }}</b>
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
  methods: {
    on_post_add(){
      this.$router.push('/posts/add')
    },
  },
};
</script>

<style scoped>
@import "/styles/news.css";
</style>