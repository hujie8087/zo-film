export default defineEventHandler((event) => {
  return [
    {
      _id: '1',
      title: '管理信息',
      path: '/news/management',
    },
    {
      _id: '2',
      title: '招聘信息',
      path: '/news/recruitment',
    },
    {
      _id: '3',
      title: '新闻中心',
      path: '/news/news',
    },
    {
      _id: '4',
      title: '公司活动',
      path: '/news/activity',
    },
  ];
});
