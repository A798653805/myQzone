import axios from 'axios';
import {
  // Loading,
  Message
} from 'element-ui'

axios.defaults.timeout = 5000;

// let loadinginstace = '';

axios.interceptors.request.use(config => {
  // console.log(config);
  // loadinginstace = Loading.service({
  //   fullscreen: true
  // })
  return config;
}, err => {
  // loadinginstace.close()
  Message.error({
    message: '加载超时'
  });
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  // loadinginstace.close()
  let data = response.data.data;
  let code = response.data.code;
  if (code == 'OK' || code == '200') {
    return data;
  } else {
    Message.error({
      message: '加载失败'
    });
    console.log('axios 加载失败');
  }
  return response;
  return response;
}, err => {
  // loadinginstace.close()
  Message.error({
    message: '加载失败'
  });
  console.log('err');
  return Promise.reject(err)
})

export default axios
