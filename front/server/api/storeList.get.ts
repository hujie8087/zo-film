export default defineEventHandler((event) => {
  let query = getQuery(event);
  console.log(query);
  return [
    {
      _id: '1',
      title: '车派汽车服务店',
      content:
        '门店名称：车派汽车服务店<br />门店地址：兰州市城关区雁滩家园B区<br />门店电话：13893424323',
    },
    {
      _id: '2',
      title: '车派汽车服务店',
      content:
        '门店名称：车派汽车服务店<br />门店地址：兰州市城关区雁滩家园B区<br />门店电话：13893424323',
    },
    {
      _id: '3',
      title: '车派汽车服务店',
      content:
        '门店名称：车派汽车服务店<br />门店地址：兰州市城关区雁滩家园B区<br />门店电话：13893424323',
    },
  ];
});
