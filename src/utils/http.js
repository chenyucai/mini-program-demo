import wepy from 'wepy';
import {baseUrl} from '../config/env';
import {makeRequestHeader, coverData} from './sign';

export const wxRequest = (url, params) => {
  wepy.showLoading({
    mask: true,
    title: '加载中'
  });
  let header = makeRequestHeader();
  let data = coverData(Object.assign({}, params), header, header['X-Client-Time']);
  return wepy.request({
    method: 'POST',
    url: baseUrl + url,
    header,
    data
  }).then((response) => {
    wepy.hideLoading();
    let res = response.data;
    return new Promise((resolve, reject) => {
      if (res.result) {
        resolve(res.data);
      } else {
        reject(res);
      }
    }).catch(() => {});
  })
};
