<template>
  <div class="about">
    <PostEdit :post_id="Number(post_id)" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostEdit from "@/components/post_edit.vue";

export default {
  name: "PostView",
  components: {
    PostEdit,
  },
  props: {
    post_id: String,
  },
};
</script>