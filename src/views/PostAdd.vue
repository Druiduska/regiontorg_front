<template>
  <div class="about">
    <PostAddComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostAddComponent from "@/components/post_add.vue";

export default {
  name: "PostAdd",
  components: {
    PostAddComponent,
  },
  props: {
    post_id: String,
  },
};
</script>