import { el } from 'element-plus/es/locale';

export default defineEventHandler((event) => {
  let { type } = getQuery(event);
  let bannerUrl = '';
  if (type === 'news') {
    bannerUrl = '/1603682728_classify_img.jpg';
  } else if (type === 'activity') {
    bannerUrl = '/1604468948_classify_img.jpg';
  } else if (type === 'recruitment') {
    bannerUrl = '/1603682728_classify_img.jpg';
  } else if (type === 'management') {
    bannerUrl = '/1603682728_classify_img.jpg';
  }

  return {
    banner: bannerUrl,
    newsList: [
      {
        _id: '1',
        title: 'Z＆O创新性的复合纳米涂层技术，解决车主六大核心问题',
        time: '2020-10-26',
      },
      {
        _id: '2',
        title: 'Z＆O创新性的复合纳米涂层技术，解决车主六大核心问题',
        time: '2020-10-26',
      },
      {
        _id: '3',
        title: 'Z＆O创新性的复合纳米涂层技术，解决车主六大核心问题',
        time: '2020-10-26',
      },
      {
        _id: '4',
        title: 'Z＆O创新性的复合纳米涂层技术，解决车主六大核心问题',
        time: '2020-10-26',
      },
    ],
  };
});
