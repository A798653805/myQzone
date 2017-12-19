import axios from 'axios';

axios.interceptors.request.use(config => {
  // console.log(config);
  return config;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  let data = response.data.data;
  let code = response.data.code;
  if (code == 'OK' || code == '200') {
    return data;
  } else {
    console.log('axios 加载失败');
  }
  return response;
  return response;
},err =>{
  console.log('err');
  return Promise.reject(err)
})

export default axios