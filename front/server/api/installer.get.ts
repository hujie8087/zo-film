import { ResInstallerType } from '../../types';

export default defineEventHandler(async (event) => {
  const data = await $fetch<ResInstallerType>(
    `http://localhost:3100/solution/installer`
  );
  return data;
  // return {
  //   banner:
  //     'https://www.zo-film.com/Uploads/images/2020/11/14/1605325476_classify_img.jpg',
  //   title: '专业安装人员',
  //   list: [
  //     {
  //       _id: '1',
  //       title: '给了他们想要的专业保护，这是汽车爱好发烧友选择Z&O的真实原',
  //       subtitle: '给了他们想要的专业保护，这是汽车爱好发烧友选择Z&O的真实原因',
  //       address: '天津市河西区紫金山路67号',
  //       imageUrl:
  //         'https://www.zo-film.com/Uploads/images/2022/06/17/1655449592_classify_img.jpg',
  //       content:
  //         '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">Z&amp;O产品专注于引领漆面保护膜行业的发展，重新定义了车主对高性能保护的保护膜的装贴的理念。凭借在模式设计和软件开发方面的根基，我们致力于提高我们的专业安装人员的操作能力并最大化降低失误率。作为世界上第一款自修复涂层保护膜的发明者，我们彻底改变了人们对漆面保护膜表面涂层技术的看法。我们已准备好通过先进的汽车保护膜、住宅保护膜、商业建筑窗膜、大灯保护膜和抑菌保护膜等等，以及专业的装贴工具、后续的产品护理和业内权威的培训计划将您的施工水平提升到新的高度！</span>',
  //       desc: '<h4 style="box-sizing:border-box;font-family:" line-height:30px;color:#333333;margin:5px="" 5px="" 10px;font-size:18px;white-space:normal;font-style:italic;"="">给汽车表面贴膜也是一项精细工作，需要确保每个环节的完美配合，每天才能保证顺畅、不间断的工作流程。Z&amp;O的DAP软件是时时保持平台的汽车版型数据是最新的。如果你想要成功，它是你不二的选择。</h4><p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#333333;font-family:" font-size:16px;white-space:normal;"="">ALEX JONES，AUTOMOBILIA AUTO SALON</p>',
  //       list: [],
  //       images: [],
  //     },
  //     {
  //       _id: '2',
  //       title: '经销商聚焦',
  //       subtitle: '保护膜解决方案',
  //       address: '天津市河西区紫金山路67号',
  //       imageUrl:
  //         'https://www.zo-film.com/Uploads/images/2020/11/14/1605323946_classify_img.jpg',
  //       content:
  //         '<div style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <h2 style="box-sizing:border-box;font-family:inherit;line-height:1.1;color:inherit;margin:0px 5px 40px;font-size:30px;"> 我们让你技艺精湛，获得车主尊敬 </h2> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;"> 不管你是初入贴膜行业的小白，还是拥有多年贴膜经历的从业人员，每年我们组织上百场培训，具有针对性的课程让你贴膜技艺获得提升！ </p> </div> <div class="Benefits" style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <h4 style="box-sizing:border-box;font-family:inherit;line-height:1.1;color:inherit;margin:5px 5px 10px;font-size:18px;"> 成为专业安装人员的好处： </h4> <div style="box-sizing:border-box;"> <ul class=" list-paddingleft-2" style="box-sizing:border-box;margin:0px;list-style-position:initial;list-style-image:initial;padding:0px;"> <li style="box-sizing:border-box;list-style:none;margin:0px 0px 0px 40px;padding:0px;background:url(" color:#f5af05;"=""> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#000000;padding-left:10px;"> ●从小班教学，到针对性的提升班的多种开班形式，总有适合你的技能提升方式。 </p> </li> <li style="box-sizing:border-box;list-style:none;margin:0px 0px 0px 40px;padding:0px;background:url(" color:#f5af05;"=""> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#000000;padding-left:10px;"> <span style="white-space:normal;">●</span>丰富经验的教练团队，让你减少学习周期，提升学习效率。 </p> </li> <li style="box-sizing:border-box;list-style:none;margin:0px 0px 0px 40px;padding:0px;background:url(" color:#f5af05;"=""> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#000000;padding-left:10px;"> <span style="white-space:normal;">●</span>在线交流平台，24小时在线解决你碰到的任何技术施工问题。&nbsp; </p> </li> <li style="box-sizing:border-box;list-style:none;margin:0px 0px 0px 40px;padding:0px;background:url(" color:#f5af05;"=""> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#000000;padding-left:10px;"> <span style="white-space:normal;">●</span>超过100.000+的世界各种车型的预切割的汽车版型数据库，让你在施工过程减少损伤车漆的风险。 </p> </li> <li style="box-sizing:border-box;list-style:none;margin:0px 0px 0px 40px;padding:0px;background:url(" color:#f5af05;"=""> <p style="box-sizing:border-box;margin-right:5px;margin-left:5px;color:#000000;padding-left:10px;"> <span style="white-space:normal;">●</span>品牌的行业优势，客户的高度认可，让你从事的行业具有自豪感。 </p> </li> </ul> </div> </div>',
  //       desc: '',
  //       list: [],
  //       images: [],
  //     },
  //     {
  //       _id: '3',
  //       title: '成功的关键',
  //       subtitle: '',
  //       address: '',
  //       imageUrl: '',
  //       content: '',
  //       desc: '',
  //       list: [
  //         {
  //           _id: '1',
  //           title: '专车专用汽车版型预切割解决方案（DAP）',
  //           content:
  //             '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">作为汽车版型预切割软件系统的创造者和创新者，我们享誉全球的汽车版型数据预处理系统（DAP）将帮助您以更高的效率在竞争中脱颖而出。DAP由超过100,000+版型组成、并且版型数据还在不断更新、使您能够为您的客户提供他们所需的精确度和满意度。</span>',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/11/14/1605324359_img.jpg',
  //           subtitle: '',
  //           videoUrl: '',
  //         },
  //         {
  //           _id: '2',
  //           title: '无与伦比的培训和支持',
  //           content:
  //             '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">高品质的安装是由强大的各项专业施工精细流程组合而成的，在Z&amp;O，我们提供业内权威且全面的培训师团队。凭借20多年的漆面保护膜装贴培训经验，我们的认证计划将为您提供从基础到各种疑难杂症装贴所需的知识库。</span>',
  //           imageUrl:
  //             'https://www.zo-film.com/Uploads/images/2020/11/14/1605339162_img.png',
  //           subtitle: '',
  //           videoUrl: '',
  //         },
  //       ],
  //       images: [],
  //     },
  //     {
  //       _id: '4',
  //       title: '专题报道',
  //       subtitle: '',
  //       address: '',
  //       imageUrl: '',
  //       content: '',
  //       desc: '',
  //       list: [
  //         {
  //           title: 'Z&O奥迪',
  //           imageUrl: '/1604308177_img.jpg',
  //           _id: '1',
  //           subtitle: '奥迪整车裁剪',
  //           videoUrl: '/1604308177_upload_video.mp4',
  //           content: '',
  //         },
  //         {
  //           title: 'Z&O奥迪',
  //           imageUrl: '/1604308177_img.jpg',
  //           _id: '1',
  //           subtitle: '奥迪整车裁剪',
  //           videoUrl: '/1604308177_upload_video.mp4',
  //           content: '',
  //         },
  //         {
  //           title: 'Z&O奥迪',
  //           imageUrl: '/1604308177_img.jpg',
  //           _id: '1',
  //           subtitle: '奥迪整车裁剪',
  //           videoUrl: '/1604308177_upload_video.mp4',
  //           content: '',
  //         },
  //       ],
  //       images: [],
  //     },
  //   ],
  // };
});
