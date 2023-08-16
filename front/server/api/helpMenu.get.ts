export default defineEventHandler((event) => {
  return [
    {
      _id: '1',
      title: '电子质保查询',
      path: 'https://daokeshi.tthweixin.com/app/index.php?i=4&c=entry&eid=297&op=query&wxref=mp.weixin.qq.com',
    },
    {
      _id: '2',
      title: '保修信息',
      path: '/help?type=2',
    },
    {
      _id: '3',
      title: '常见问题',
      path: '/help?type=3',
    },
    {
      _id: '4',
      title: '膜面护理',
      path: '/help?type=4',
    },
  ];
});
