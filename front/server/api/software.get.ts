import { ResSoftwareType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResSoftwareType>(`http://127.0.0.1:3100/software`);
  return data;
  // return {
  //   banner:
  //     'https://www.zo-film.com/Uploads/images/2020/10/27/1603762567_classify_img.jpg',
  //   title: '全球汽车版型数据预处理系统',
  //   list: [
  //     {
  //       _id: '1',
  //       title: '来自全球汽车版型数据预处理系统',
  //       subtitle: '',
  //       address: '',
  //       imageUrl: '',
  //       content:
  //         '<h4 style="box-sizing:border-box;font-family:" line-height:30px;color:#333333;margin:5px="" 5px="" 10px;font-size:18px;white-space:normal;font-style:italic;"=""> 我们喜欢<span style="color:#333333;white-space:normal;">Z&amp;O</span>提供的，精确的预切套件可实现更好的装配，并将安装时间缩短至少25％。所有这一切都使我们的安装人员和客户满意。无需拆卸，预切割套件可以更好地覆盖。 </h4> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;"=""> STICKER CITY的DEAN SOLEIMANI </p>',
  //       desc: '<p font-size:16px;white-space:normal;background-color:#ffffff;"="" style="margin-right: 5px; margin-left: 5px; white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><span style="color:#333333;white-space:normal;">Z&amp;O</span>国际的团队产品工程师日常工作就是为新发布的车辆创建设计模版，这些版型都是立即可以上传到软件中的，非常便捷的裁切软件，可以做到实时可用。<br style="box-sizing:border-box;" /> <br style="box-sizing:border-box;" /> 选择你所需要的版型，当你需要他其中的一个部分，任意可调节的几何尺寸。我们拥有变量几何功能，您可以快速安全的现实任何可覆盖的细节，以确保你的客户他们期望的质量和价格，包括包厚边，裁切一半的引擎盖等DIY功能，这让切割漆面膜的时候有了很好的灵活性。<br style="box-sizing:border-box;" /> <br style="box-sizing:border-box;" /> 摩托，游艇，超跑，卡车，喷绘，拉花等，从1930-2019年的车型数据已经超过了10万款。 </p>',
  //       list: [],
  //       images: [],
  //       file: 'https://www.zo-film.com/Uploads/images/2020/10/30/1604036527_down_video.mp4',
  //     },
  //     {
  //       _id: '7',
  //       title: '视频',
  //       subtitle: '',
  //       address: '',
  //       imageUrl: '',
  //       content: '',
  //       desc: '',
  //       list: [],
  //       images: [],
  //       file: 'https://www.zo-film.com/Uploads/images/2020/10/30/1604036527_down_video.mp4',
  //     },
  //     {
  //       _id: '2',
  //       title: '精准数据版型',
  //       subtitle: '漆面保护膜',
  //       address: '专为MPD、ZEUS、LUX PLUS、MATTE、PROTEX、ARES、ASP等设计',
  //       imageUrl:
  //         'https://www.zo-film.com/Uploads/images/2020/10/26/1603709367_classify_img.jpg',
  //       content:
  //         '<h4 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:0px="" 0px="" 40px;font-size:18px;white-space:normal;background-color:#ffffff;"=""> 精准的数据被业界誉为“神器” </h4> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> 自<span style="color:#333333;white-space:normal;">Z&amp;O</span>创立至今，专车专用的数据保护漆面的理念，一直是我们公司发展所坚守的。DAP还提供安全，零风险的安装解决方案，因为它消除了手工切割的隐患和危险，缩短了安装时间并提高了效率。<br style="box-sizing:border-box;" /> <br style="box-sizing:border-box;" /> 目前，DAP包含近100,000+漆面保护套件，几乎可用于所有可以想象的品牌和型号。所有套件均以更佳配件和功能为基础。<br style="box-sizing:border-box;" /> <br style="box-sizing:border-box;" /> 除了乘用车，高端跑车和其他特种车辆外，DAP还包含用于各种触摸屏设备（如手机，平板电脑和其他监控系统）的表面保护模式。 </p>',
  //       desc: '',
  //       list: [],
  //       images: [],
  //       file: '',
  //     },
  //     {
  //       _id: '3',
  //       title: 'Z&O专业店面使用的心得体会',
  //       subtitle: '',
  //       address: '',
  //       imageUrl: '',
  //       content:
  //         '<h4 style="box-sizing:border-box;font-family:" line-height:30px;color:#333333;margin:5px="" 5px="" 10px;font-size:18px;white-space:normal;font-style:italic;"=""> 我们喜欢<span style="color:#333333;white-space:normal;">Z&amp;O</span>提供的，精确的预切套件可实现更好的装配，并将安装时间缩短至少25％。所有这一切都使我们的安装人员和客户满意。无需拆卸，预切割套件可以更好地覆盖。 </h4> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;"=""> STICKER CITY的DEAN SOLEIMANI </p>',
  //       desc: '<p font-size:16px;white-space:normal;background-color:#ffffff;"="" style="margin-right: 5px; margin-left: 5px; white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><span style="color:#333333;white-space:normal;">Z&amp;O</span>国际的团队产品工程师日常工作就是为新发布的车辆创建设计模版，这些版型都是立即可以上传到软件中的，非常便捷的裁切软件，可以做到实时可用。<br style="box-sizing:border-box;" /> <br style="box-sizing:border-box;" /> 选择你所需要的版型，当你需要他其中的一个部分，任意可调节的几何尺寸。我们拥有变量几何功能，您可以快速安全的现实任何可覆盖的细节，以确保你的客户他们期望的质量和价格，包括包厚边，裁切一半的引擎盖等DIY功能，这让切割漆面膜的时候有了很好的灵活性。<br style="box-sizing:border-box;" /> <br style="box-sizing:border-box;" /> 摩托，游艇，超跑，卡车，喷绘，拉花等，从1930-2019年的车型数据已经超过了10万款。 </p>',
  //       list: [
  //         {
  //           title: 'Felipe Gomez',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/10/26/1603709567_img.jpg',
  //           _id: '1',
  //           subtitle: '',
  //           content:
  //             '<h5 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:5px;font-size:14px;text-align:-webkit-center;white-space:normal;background-color:#f1f1f1;"=""> The Sign Savers Miami, FL </h5> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#f1f1f1;"=""> 我喜欢DAP的模式，作为一家专门从事高端的汽车贴膜专业店，我们接待过许多全新的各种车辆汽车，DAP随时都能准备好，版型的切割精准度始终如一。 </p>',
  //         },
  //         {
  //           title: 'Felipe Gomez',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/10/26/1603709567_img.jpg',
  //           _id: '2',
  //           subtitle: '',
  //           content:
  //             '<h5 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:5px;font-size:14px;text-align:-webkit-center;white-space:normal;background-color:#f1f1f1;"=""> The Sign Savers Miami, FL </h5> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#f1f1f1;"=""> 我喜欢DAP的模式，作为一家专门从事高端的汽车贴膜专业店，我们接待过许多全新的各种车辆汽车，DAP随时都能准备好，版型的切割精准度始终如一。 </p>',
  //         },
  //         {
  //           title: 'Felipe Gomez',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/10/26/1603709567_img.jpg',
  //           _id: '3',
  //           subtitle: '',
  //           content:
  //             '<h5 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:5px;font-size:14px;text-align:-webkit-center;white-space:normal;background-color:#f1f1f1;"=""> The Sign Savers Miami, FL </h5> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#f1f1f1;"=""> 我喜欢DAP的模式，作为一家专门从事高端的汽车贴膜专业店，我们接待过许多全新的各种车辆汽车，DAP随时都能准备好，版型的切割精准度始终如一。 </p>',
  //         },
  //       ],
  //       images: [],
  //       file: '',
  //     },
  //     {
  //       _id: '4',
  //       title: '窗膜数据版型',
  //       subtitle: '车窗安全隔热膜',
  //       address: '专为PRIME X5，PRIME X2，PRIME AP和PRIME GL设计。',
  //       imageUrl:
  //         'https://www.zo-film.com/Uploads/images/2020/10/26/1603709609_classify_img.jpg',
  //       content:
  //         '<h4 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:0px="" 0px="" 40px;font-size:18px;white-space:normal;background-color:#ffffff;"=""> <span style="color:#333333;white-space:normal;">Z&amp;O</span>系列车窗隔热膜将使您在竞争中脱颖而出 </h4> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> 到目前为止，从未有过更快的方法来实现手裁窗膜的边缘不出现不平整外观的问题，<span style="color:#333333;white-space:normal;">Z&amp;O</span>的DAP旨在通过专车专用的数据系统，专为市场上主流销售的汽车创建的更先进模式，彻底改变窗膜行业。<br style="box-sizing:border-box;" /> 在不断发展的市场中，节省时间和保持品质是您业务的重要组成部分。使用我们的模式您可以控制工作流程，加快安装时间，并为客户提供执行一致，高品质的安装。 </p>',
  //       desc: '',
  //       list: [],
  //       images: [],
  //       file: '',
  //     },
  //     {
  //       _id: '5',
  //       title: '什么是窗膜数据版型系统？',
  //       subtitle: '',
  //       address: '',
  //       imageUrl: '',
  //       content: '',
  //       desc: '',
  //       list: [
  //         {
  //           title: 'Ignacio Salinas Jr',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/10/26/1603709567_img.jpg',
  //           _id: '1',
  //           subtitle: '',
  //           content:
  //             '<h5 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:5px;font-size:14px;text-align:-webkit-center;white-space:normal;background-color:#f1f1f1;"=""> The Sign Savers Miami, FL </h5> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#f1f1f1;"=""> 我喜欢DAP的模式，作为一家专门从事高端的汽车贴膜专业店，我们接待过许多全新的各种车辆汽车，DAP随时都能准备好，版型的切割精准度始终如一。 </p>',
  //         },
  //         {
  //           title: 'Ignacio Salinas Jr',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/10/26/1603709567_img.jpg',
  //           _id: '2',
  //           subtitle: '',
  //           content:
  //             '<h5 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:5px;font-size:14px;text-align:-webkit-center;white-space:normal;background-color:#f1f1f1;"=""> The Sign Savers Miami, FL </h5> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#f1f1f1;"=""> 我喜欢DAP的模式，作为一家专门从事高端的汽车贴膜专业店，我们接待过许多全新的各种车辆汽车，DAP随时都能准备好，版型的切割精准度始终如一。 </p>',
  //         },
  //         {
  //           title: 'Ignacio Salinas Jr',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/10/26/1603709567_img.jpg',
  //           _id: '3',
  //           subtitle: '',
  //           content:
  //             '<h5 style="box-sizing:border-box;font-family:" line-height:1.1;color:#333333;margin:5px;font-size:14px;text-align:-webkit-center;white-space:normal;background-color:#f1f1f1;"=""> The Sign Savers Miami, FL </h5> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#f1f1f1;"=""> 我喜欢DAP的模式，作为一家专门从事高端的汽车贴膜专业店，我们接待过许多全新的各种车辆汽车，DAP随时都能准备好，版型的切割精准度始终如一。 </p>',
  //         },
  //       ],
  //       images: [],
  //       file: '',
  //     },
  //     {
  //       _id: '6',
  //       title: 'other',
  //       subtitle: '',
  //       address: '',
  //       imageUrl: '',
  //       content: '',
  //       desc: '',
  //       list: [
  //         {
  //           _id: '1',
  //           title: '版型图可视化',
  //           content:
  //             '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">有时候一个好的解释并不足以传达对客户的期望，值得高兴的是DAP提供这么多的汽车版型数据库，借助DAP数据版型库您可为客户生成可打印的微缩版型图，以便他们真正了解他们的选择。</span>',
  //           imageUrl: '',
  //           subtitle: '',
  //           file: '',
  //         },
  //         {
  //           _id: '2',
  //           title: '版型图可视化',
  //           content:
  //             '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">有时候一个好的解释并不足以传达对客户的期望，值得高兴的是DAP提供这么多的汽车版型数据库，借助DAP数据版型库您可为客户生成可打印的微缩版型图，以便他们真正了解他们的选择。</span>',
  //           imageUrl: '',
  //           subtitle: '',
  //           file: '',
  //         },
  //         {
  //           _id: '3',
  //           title: '版型图可视化',
  //           content:
  //             '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">有时候一个好的解释并不足以传达对客户的期望，值得高兴的是DAP提供这么多的汽车版型数据库，借助DAP数据版型库您可为客户生成可打印的微缩版型图，以便他们真正了解他们的选择。</span>',
  //           imageUrl: '',
  //           subtitle: '',
  //           file: '',
  //         },
  //         {
  //           _id: '4',
  //           title: '版型图可视化',
  //           content:
  //             '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">有时候一个好的解释并不足以传达对客户的期望，值得高兴的是DAP提供这么多的汽车版型数据库，借助DAP数据版型库您可为客户生成可打印的微缩版型图，以便他们真正了解他们的选择。</span>',
  //           imageUrl: '',
  //           subtitle: '',
  //           file: '',
  //         },
  //         {
  //           _id: '5',
  //           title: '版型图可视化',
  //           content:
  //             '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">有时候一个好的解释并不足以传达对客户的期望，值得高兴的是DAP提供这么多的汽车版型数据库，借助DAP数据版型库您可为客户生成可打印的微缩版型图，以便他们真正了解他们的选择。</span>',
  //           imageUrl: '',
  //           subtitle: '',
  //           file: '',
  //         },
  //       ],
  //       images: [],
  //       file: '',
  //     },
  //   ],
  // };
});
