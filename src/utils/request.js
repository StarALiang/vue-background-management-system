import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

/* // 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log('在发送请求之前做些什么');
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject();
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log('对响应数据做点什么，你就是大傻逼');
    console.log(response);
    if (response.status === 200) {
      console.log('啦啦啦祭祀大家覅');
      return response.data;
    } else {
      Promise.reject();
    }
  },
  error => {
    // 对响应错误做点什么
    console.log(error);
    return Promise.reject();
  }
); */

export default {
  fetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchQuickSearch(url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}