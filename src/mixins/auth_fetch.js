export default {
  methods: {
    async login_jwt(s_url, s_login, s_password) {
      let formData = new FormData();
      formData.append('name', s_login);
      formData.append('password', s_password);
      let rspns
      try {
        rspns = await fetch(s_url + '/api/auth/login', {
          method: 'POST',
          body: formData
        })

      } catch (error) {
        return { error: rslt, status: 9999 }
      }

      let rslt = await rspns.json();
      return { body: rslt, status: rspns.status }
    },

    async register_jwt(s_url, s_username, s_email, s_login, s_password) {
      let formData = new FormData();
      formData.append('username', s_username);
      formData.append('name', s_login);
      formData.append('email', s_email);
      formData.append('password', s_password);
      let rspns = await fetch(s_url + '/api/auth/registration', {
        method: 'POST',
        body: formData
      });
      let rslt = await rspns.json();
      return rslt;
    },

    async logout_jwt(s_url, token_type, access_token) {
      let formData = new FormData();
      let rspns = await fetch(s_url + '/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'Authorization': token_type + ' ' + access_token
        },
        body: formData
      });
      let rslt = await rspns.json();
      return rslt;
    },

    async refresh_jwt(s_url, token_type, access_token) {
      let formData = new FormData();
      let rspns = await fetch(s_url + '/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'Authorization': token_type + ' ' + access_token
        },
        body: formData
      });
      let rslt = await rspns.json();
      return { body: rslt, status: rspns.status }
    },

    async get_me_jwt(s_url, token_type, access_token) {
      let formData = new FormData();
      let rspns = await fetch(s_url + '/api/auth/me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
          'Authorization': token_type + ' ' + access_token
        },
        body: formData
      });
      let rslt = await rspns.json();
      return { body: rslt, status: rspns.status }
    },

  },
}