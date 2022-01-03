<template>
  <div class="about">
    <PostViewComponent :post_id="Number(post_id)" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostViewComponent from "@/components/post_view.vue";

export default {
  name: "PostView",
  components: {
    PostViewComponent,
  },
  props: {
    post_id: String,
  },
};
</script>