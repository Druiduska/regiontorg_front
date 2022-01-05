export default {
  methods: {
    async laravel_post(url_path, data_object, id='') {
      let formData = new FormData();
      for (let key in data_object) {
        formData.append(key, data_object[key]);
      }
      return await fetch(process.env.VUE_APP_URL + url_path + id, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization:
            this.$store.state.LoginInfo.body.token_type +
            " " +
            this.$store.state.LoginInfo.body.access_token,
        },
      });
    },
    async laravel_put(url_path, data_object, id='') {
      let json_data = JSON.stringify(data_object);
      return await fetch(
        process.env.VUE_APP_URL + url_path + id,
        {
          method: "PUT",
          body: json_data,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              this.$store.state.LoginInfo.body.token_type +
              " " +
              this.$store.state.LoginInfo.body.access_token,
          },
        }
      );
    },
    async laravel_delete(url_path, id='') {
      return await fetch(
        process.env.VUE_APP_URL + url_path + id,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization:
              this.$store.state.LoginInfo.body.token_type +
              " " +
              this.$store.state.LoginInfo.body.access_token,
          },
        }
      );
    },
    async laravel_get_free(url_path){
      return await fetch(process.env.VUE_APP_URL + url_path, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
    },
  },
};
