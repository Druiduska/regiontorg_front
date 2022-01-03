<template>
  <div class="about">
    <PostEditComponent :post_id="Number(post_id)" />
  </div>
</template>

<script>
// @ is an alias to /src
import PostEditComponent from "@/components/post_edit.vue";

export default {
  name: "PostEdit",
  components: {
    PostEditComponent,
  },
  props: {
    post_id: String,
  },
};
</script>