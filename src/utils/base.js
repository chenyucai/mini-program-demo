/**
 * 获取图片地址
 * @param url
 * @param imageAction - oss图片处理
 * @returns {*}
 */
export const getImageUrl = (url, imageAction) => {
  if (url && url.substr(0, 4) === 'http') {
    return url;
  } else {
    return `http://rcst.oss-cn-shanghai.aliyuncs.com/${url}?${imageAction}`;
  }
};
