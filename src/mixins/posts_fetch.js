import jwtFetch from "@/mixins/jwt_fetch.js";
export default {
  mixins: [jwtFetch],
  data() {
    return {
      cnt: 0,
    }
  },
  methods: {
    post_add(title_data, article_data, on_status_200) {
      if ( ! this.$store.state.LoginInfo) throw {code: 401, message: "Не авторизован"};
      if (!title_data) throw {code: 424, message: "Неполные данные"};
      if (!article_data) throw {code: 424, message: "Неполные данные"};
      this.laravel_post("/api/posts", { title: title_data, article: article_data }).then(
        (response) => {
          if (response.status === 200) {
            this.posts_all();
            if (typeof on_status_200 === "function") {
              on_status_200();
            }
          } else if (response.status === 401) {
            if (this.cnt===0){
              this.refreshTokenJwt(this.post_add(title_data, article_data, on_status_200));              
            } else{
              this.cnt=0;
              throw {code: 401, message: "Не авторизован"};
            }
          }
        });
    },
    post_update(title_data, article_data, post_id, on_status_200) {
      if ( ! this.$store.state.LoginInfo) throw {code: 401, message: "Не авторизован"};
      if (
        title_data === this.post.title &&
        article_data === this.post.article
      ) {
        throw {code: 204, message: "Нет изменений"};
      }
      this.laravel_put(
        "/api/posts/",
        { title: title_data, article: article_data },
        post_id
      ).then((response) => {
        if (response.status === 200) {
          this.posts_all();
          if (typeof on_status_200 === "function") {
            on_status_200();
          }
        } else if (response.status === 401) {
          if (this.cnt===0){
            this.refreshTokenJwt(this.post_update(title_data, article_data, post_id, on_status_200));            
          } else{
            this.cnt=0;
            throw {code: 401, message: "Не авторизован"};
          }
        }
      });
    },
    post_delete(post_id, on_status_200) {
      if ( ! this.$store.state.LoginInfo) throw {code: 401, message: "Не авторизован"};
      this.laravel_delete(
        "/api/posts/",
        post_id
      ).then((response) => {
        if (response.status === 200) {
          this.posts_all();
          if (typeof on_status_200 === "function") {
            on_status_200();
          }
        } else if (response.status === 401) {
          if (this.cnt===0){
            this.refreshTokenJwt(this.post_update(title_data, article_data, post_id, on_status_200));            
          } else{
            this.cnt=0;
            throw {code: 401, message: "Не авторизован"};
          }
        }
      });
    },
   async posts_all() {
      this.laravel_get_free("/api/posts").then((response) => {
        response.json().then((rslt) => {
          this.$store.commit("setPosts", rslt);
        });
      });
    },
  },
};
