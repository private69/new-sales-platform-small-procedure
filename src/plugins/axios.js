import axios from 'axios';
// 保证先设置相应的 url 
import '@/services/requestApi'
console.log("aa",process);
const host = process.VUE_APP_BASE_API; // test

let request = ({ url, headers, data, method = 'POST' }) => {
  if (!url) throw Error('url必须');
  return new Promise((resolve, reject) => {
    axios({
      // url: `${host}/${url}`,
      // url: `${host}${url}`,
      url: `${url}`,
      data,
      headers,
      params: method.toLowerCase() === 'get' ? data : null,
      method,
    })
      .then((res) => {
        const { code, data, msg } = res.data;
        if (+code === 0) resolve(data);
        else reject(msg);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default request;
