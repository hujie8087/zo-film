import { MenuListType } from '../../types';

export default defineEventHandler((event): MenuListType[] => {
  return [
    {
      title: '为何选择Z&O',
      path: '/choose',
      children: [],
      keyWord: ['Z&O', '为何选择Z&O', '为何选择', '选择Z&O', '选择', 'Z&O'],
      isFoot: false,
    },
    {
      title: '公司新闻',
      path: '/news/management',
      children: [
        {
          title: '管理信息',
          path: '/news/management',
          children: [],
          keyWord: ['Z&O', '公司新闻', '管理信息', '管理', '信息'],
          isFoot: true,
        },
        {
          title: '招聘信息',
          path: '/news/recruitment',
          children: [],
          keyWord: ['Z&O', '公司新闻', '招聘信息', '招聘', '信息'],
          isFoot: true,
        },
        {
          title: '新闻中心',
          path: '/news/news',
          children: [],
          keyWord: ['Z&O', '公司新闻', '新闻中心', '新闻', '中心'],
          isFoot: true,
        },
        {
          title: '公司活动',
          path: '/news/activity',
          children: [],
          keyWord: ['Z&O', '公司新闻', '公司活动', '公司', '活动'],
          isFoot: true,
        },
      ],
      keyWord: ['Z&O', '公司新闻', '新闻', '公司'],
      isFoot: true,
    },
    {
      title: '产品介绍',
      path: '/products',
      children: [
        {
          title: 'Z&O隐形车衣',
          path: '/products/cover',
          children: [
            {
              title: 'Z-Pro',
              path: '/products/cover/1',
              children: [],
              keyWord: ['Z&O', '产品介绍', 'Z&O隐形车衣', 'Z-Pro'],
              isFoot: false,
            },
            {
              title: 'Z-Nano',
              path: '/products/cover/2',
              children: [],
              keyWord: ['Z&O', '产品介绍', 'Z&O隐形车衣', 'Z-Nano'],
              isFoot: false,
            },
            {
              title: 'ASP',
              path: '/products/cover/3',
              children: [],
              keyWord: ['Z&O', '产品介绍', 'Z&O隐形车衣', 'Z-ASP'],
              isFoot: false,
            },
          ],
          keyWord: ['Z&O', '产品介绍', 'Z&O隐形车衣', '隐形车衣'],
          isFoot: false,
        },
        {
          title: '汽车改色膜',
          path: '/products/car',
          children: [
            {
              title: '幻彩系列',
              path: '/products/car',
              children: [],
              keyWord: ['Z&O', '产品介绍', '汽车改色膜', '幻彩系列'],
              isFoot: false,
            },
            {
              title: '金属系列',
              path: '/products/car',
              children: [],
              keyWord: ['Z&O', '产品介绍', '汽车改色膜', '金属系列'],
              isFoot: false,
            },
            {
              title: '磨砂系列',
              path: '/products/car',
              children: [],
              keyWord: ['Z&O', '产品介绍', '汽车改色膜', '磨砂系列'],
              isFoot: false,
            },
            {
              title: '碳纤维系列',
              path: '/products/car',
              children: [],
              keyWord: ['Z&O', '产品介绍', '汽车改色膜', '碳纤维系列'],
              isFoot: false,
            },
          ],
          keyWord: ['Z&O', '产品介绍', '汽车改色膜', '改色膜'],
          isFoot: false,
        },
        {
          title: '专业施工套件',
          path: '/products/construction',
          children: [
            {
              title: '安装液',
              path: '/products/construction/1',
              children: [],
              keyWord: ['Z&O', '产品介绍', '专业施工套件', '安装液'],
              isFoot: false,
            },
            {
              title: '洗车液',
              path: '/products/construction/2',
              children: [],
              keyWord: ['Z&O', '产品介绍', '专业施工套件', '洗车液'],
              isFoot: false,
            },
            {
              title: '封装液',
              path: '/products/construction/3',
              children: [],
              keyWord: ['Z&O', '产品介绍', '专业施工套件', '洗膜液'],
              isFoot: false,
            },
            {
              title: '封装液',
              path: '/products/construction/4',
              children: [],
              keyWord: ['Z&O', '产品介绍', '专业施工套件', '封装液'],
              isFoot: false,
            },
          ],
          keyWord: ['Z&O', '产品介绍', '专业施工套件', '施工套件'],
          isFoot: false,
        },
      ],
      keyWord: ['Z&O', '产品介绍', '产品'],
      isFoot: false,
    },
    {
      title: '软件应用',
      path: '/software',
      children: [
        {
          title: '全球汽车版型数据预处理系统',
          path: '/software',
          children: [],
          keyWord: [
            'Z&O',
            '软件应用',
            '全球汽车版型数据预处理系统',
            '全球汽车版型数据预处理系统',
          ],
          isFoot: false,
        },
        {
          title: '裁膜机技术支持',
          path: '/help?typeId=5',
          children: [],
          keyWord: ['Z&O', '软件应用', '裁膜机技术支持', '裁膜机技术支持'],
          isFoot: false,
        },
      ],
      keyWord: ['Z&O', '软件应用', '软件'],
      isFoot: false,
    },
    {
      title: '解决方案',
      path: '/solution',
      children: [
        {
          title: '培训',
          path: '/solution/train',
          children: [
            {
              title: '漆面保护膜培训',
              path: '/solution/train',
              children: [],
              keyWord: ['Z&O', '解决方案', '培训', '漆面保护膜培训'],
              isFoot: true,
            },
          ],
          keyWord: ['Z&O', '解决方案', '培训', '培训'],
          isFoot: false,
        },
        {
          title: '成为经销商',
          path: '/solution/installer',
          children: [
            {
              title: '专业安装人员',
              path: '/solution/installer',
              children: [],
              keyWord: ['Z&O', '解决方案', '成为经销商', '专业安装人员'],
              isFoot: true,
            },
          ],
          keyWord: ['Z&O', '解决方案', '成为经销商', '成为经销商'],
          isFoot: false,
        },
        {
          title: '定制应用',
          path: '/solution/custom',
          children: [],
          keyWord: ['Z&O', '解决方案', '定制应用', '定制应用'],
          isFoot: false,
        },
      ],
      keyWord: ['Z&O', '解决方案', '解决方案'],
      isFoot: true,
    },
    {
      title: '联系我们',
      path: '/contact',
      children: [],
      keyWord: ['Z&O', '联系我们', '联系我们'],
      isFoot: false,
    },
    {
      title: '帮助',
      path: '/help',
      children: [
        {
          title: '电子质保查询',
          path: 'https://daokeshi.tthweixin.com/app/index.php?i=4&c=entry&eid=297&op=query&wxref=mp.weixin.qq.com',
          children: [],
          keyWord: ['Z&O', '帮助', '电子质保查询', '电子质保查询'],
          isFoot: true,
        },
        {
          title: '保修信息',
          path: '/help?type=2',
          children: [],
          keyWord: ['Z&O', '帮助', '保修信息', '保修信息'],
          isFoot: true,
        },
        {
          title: '常见问题',
          path: '/help?type=3',
          children: [],
          keyWord: ['Z&O', '帮助', '常见问题', '常见问题'],
          isFoot: true,
        },
        {
          title: '膜面护理',
          path: '/help?type=4',
          children: [],
          keyWord: ['Z&O', '帮助', '膜面护理', '膜面护理'],
          isFoot: true,
        },
      ],
      keyWord: ['Z&O', '帮助', '帮助'],
      isFoot: true,
    },
  ];
});
