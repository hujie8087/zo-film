import { ResTrainType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResTrainType>(
    `http://localhost:3100/solution/train`
  );
  return data;
  // return {
  //   banner:
  //     'https://www.zo-film.com/Uploads/images/2020/10/29/1603964071_classify_img.png',
  //   title: '漆面保护膜培训',
  //   list: [
  //     {
  //       _id: '1',
  //       title: '致力于安装品质',
  //       imageUrl:
  //         'https://www.zo-film.com/Uploads/images/2022/06/17/1655449592_classify_img.jpg',
  //       subtitle: '',
  //       address: '',
  //       content:
  //         '能够为客户提供优质的Z&amp;O产品安装服务，对您在漆面保护行业的是否取得成功至关重要。出于这个原因，Z&amp;O提供了一套非常全面的安装培训课程，这些课程一直被评为业内宝典。<br /><br />我们引导学员完成理论和实践的教育过程。我们全面的PPF安装培训课程涵盖的主题包括我们的DAP软件的实际操作，以及具有创新性的车漆和前大灯保护膜安装技术。',
  //       desc: '<i>进入了培训班，在没有任何漆面保护膜安装知识前提下，就可以在课堂上学习了正确的安装技术，这要归功于Z&amp;O培训师们。他们的课程内容丰富，面向细节，向您展示成功的技巧。如果有人决定进入行业，我强烈建议您在开始之前先来这里。</i>',
  //       images: [],
  //       list: [],
  //     },
  //     {
  //       _id: '2',
  //       title: '培训课程',
  //       imageUrl: '',
  //       subtitle: '',
  //       address: '',
  //       content:
  //         '<table class="table table-striped table-bordered" font-size:16px;"="" style="border-spacing: 0px; background-color: rgb(255, 255, 255); width: 1306px; max-width: 100%; margin-bottom: 20px; border: 1px solid rgb(221, 221, 221); color: rgb(51, 51, 51);"><tbody style="box-sizing:border-box;"><tr style="box-sizing:border-box;background-color:#F9F9F9;"><th class="table-classes" style="box-sizing:border-box;padding:8px;text-align:center;background-color:black;color:#FFFFFF;line-height:1.42857;vertical-align:top;border:1px solid #DDDDDD;"> 培训班 </th> <th class="table-classes" style="box-sizing:border-box;padding:8px;text-align:center;background-color:black;color:#FFFFFF;line-height:1.42857;vertical-align:top;border:1px solid #DDDDDD;"> 持续时间 </th> <th class="table-classes" style="box-sizing:border-box;padding:8px;text-align:center;background-color:black;color:#FFFFFF;line-height:1.42857;vertical-align:top;border:1px solid #DDDDDD;"> 适用对象 </th> <th class="table-classes" style="box-sizing:border-box;padding:8px;text-align:center;background-color:black;color:#FFFFFF;line-height:1.42857;vertical-align:top;border:1px solid #DDDDDD;"> 培训费用 </th> </tr> <tr style="box-sizing:border-box;"> <td colspan="4" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 一.安全保护膜进阶班 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 安全保护膜及窗膜发展基础知识 </td> <td rowspan="6" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:middle;border:1px solid #DDDDDD;"> 4天 </td> <td rowspan="6" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:middle;border:1px solid #DDDDDD;"> 有初级基础或者行业热爱者 </td> <td rowspan="6" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:middle;border:1px solid #DDDDDD;"> ￥4800 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 贴膜前预处理标准 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> Z&amp;O全系热定型工艺技巧 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> Z&amp;O全系混合烤、拉伸烤技巧 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 基础部件练习 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 实车共享教学 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td colspan="4" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 二.安全保护膜精英班 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 安全保护膜及窗膜发展基础知识 </td> <td rowspan="12" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:middle;border:1px solid #DDDDDD;"> 15天 </td> <td rowspan="12" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:middle;border:1px solid #DDDDDD;"> 零基础或者需要系统化学习者 </td> <td rowspan="12" style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:middle;border:1px solid #DDDDDD;"> ￥19800 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 车窗贴膜前预处理标准 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 裁膜技巧练习 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> Z&amp;O全系混合烤、拉伸烤技巧 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 基础部件练习 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 实车练习 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 自助餐式无限用膜模式 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 商务礼仪 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 6S车间管理 </td> </tr> <tr style="box-sizing:border-box;background-color:#F9F9F9;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;"> 基础部件练习 </td> </tr> <tr style="box-sizing:border-box;"> <td style="line-height:1.42857;box-sizing:border-box;padding:8px;text-align:center;vertical-align:top;border:1px solid #DDDDDD;">实车共享教学</td></tr></tbody></table>',
  //       desc: '',
  //       images: [],
  //       list: [],
  //     },
  //     {
  //       _id: '3',
  //       title: '安装培训',
  //       imageUrl:
  //         'https://www.zo-film.com/Uploads/images/2022/06/17/1655449592_classify_img.jpg',
  //       subtitle: '',
  //       address: '',
  //       content:
  //         '<span font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; color: rgb(51, 51, 51);">所有课程都在Z&amp;O培训中心举行。我们的各种培训课程使使新手和高级安装人员受益于每个技能水平的提高,有针对意义的教学大纲。学员将获得个人所不擅长的技能。Z&amp;O为您提供所有必要的工具和材料。在课程中，涵盖的主题包括产品和工具知识，薄膜收缩和处理等等。</span><br font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><br font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><span font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; color: rgb(51, 51, 51);">最后，不用担心，培训期间午餐就包在我们身上了。</span><br font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><br font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><span font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; color: rgb(51, 51, 51);">如果您想了解更多信息，请拨打免费电话4006999590与公司代表联系。</span><br font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><br font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; box-sizing: border-box; color: rgb(51, 51, 51);"><span font-size:16px;white-space:normal;background-color:#ffffff;"="" style="white-space: normal; color: rgb(51, 51, 51);">我们建议学员住在附近，并且提供附近的餐馆和其他场所介绍。</span>',
  //       desc: '',
  //       images: [],
  //       list: [],
  //     },
  //     {
  //       _id: '4',
  //       title: '安装培训图片',
  //       imageUrl: '',
  //       subtitle: '',
  //       address: '',
  //       content: '',
  //       desc: '',
  //       images: [
  //         'https://www.zo-film.com/Uploads/images/2020/10/29/1603966104_upload_img.png',
  //         'https://www.zo-film.com/Uploads/images/2020/10/29/1603966123_upload_img.png',
  //         'https://www.zo-film.com/Uploads/images/2020/10/29/1603966136_upload_img.png',
  //       ],
  //       list: [],
  //     },
  //   ],
  // };
});
