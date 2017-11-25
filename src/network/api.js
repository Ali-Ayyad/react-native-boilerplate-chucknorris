let baseUrl = 'https://api.chucknorris.io/';

class APIs {
  getUserToken() {
    if (window.RNB_user) {
      return window.RNB_user.token;
    }
  }

  appendParamsString(url, params) {
    if (!params) {
      return url;
    }
    if (typeof params === 'object') {
      var keys = Object.keys(params);
      if (!keys || keys.length === 0) {
        return url;
      }
      url = url + '?';
      for (var key of keys) {
        if (params[key]) {
          url = `${url}${key}=${params[key]}&`;
        }
      }
    }
    return url;
  }

  headers(token) {
    let header = {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*'
    };
    if (token) {
      header.Authorization = token;
    }
    return header;
  }

  put(url, body = null) {
    return fetch(url, {
      method: 'put',
      headers: this.headers(this.getUserToken()),
      body: JSON.stringify(body || '')
    })
      .then(response => {
        return response.json();
      })
      .catch(e => {
        console.log('catch: ', e);
      });
  }

  get(url) {
    return fetch(url, {
      headers: this.headers(this.getUserToken())
    })
      .then(response => {
        return response.json();
      })
      .catch(e => {
        console.log('catch: ', e);
      });
  }

  post(url, body = null) {
    return fetch(url, {
      method: 'post',
      headers: this.headers(this.getUserToken()),
      body: JSON.stringify(body || '')
    })
      .then(response => {
        return response.json();
      })
      .catch(e => {
        console.log('catch: ', e);
      });
  }

  delete(url, body = null) {
    return fetch(url, {
      method: 'delete',
      headers: this.headers(this.getUserToken()),
      body: JSON.stringify(body || '')
    })
      .then(response => {
        return response.json();
      })
      .catch(e => {
        console.log('catch: ', e);
      });
  }

  /* ---------------------- get ChuckNorris ----------------------*/
  getRandomJoke() {
    let url = `${baseUrl}jokes/random`;
    return this.get(url);
  }
}

export default new APIs();
