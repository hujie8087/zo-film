import { MenuListType } from '../../types';

export default defineEventHandler((event): MenuListType[] => {
  return [
    {
      title: '帮助',
      path: '/help',
      children: [
        {
          title: '电子质保查询',
          path: '/help/warranty',
          children: [],
          keyWord: ['Z&O', '帮助', '电子质保查询', '电子质保查询'],
          isFoot: true,
        },
        {
          title: '保修信息',
          path: '/help/warranty',
          children: [],
          keyWord: ['Z&O', '帮助', '保修信息', '保修信息'],
          isFoot: true,
        },
        {
          title: '常见问题',
          path: '/help/warranty',
          children: [],
          keyWord: ['Z&O', '帮助', '常见问题', '常见问题'],
          isFoot: true,
        },
        {
          title: '膜面护理',
          path: '/help/warranty',
          children: [],
          keyWord: ['Z&O', '帮助', '膜面护理', '膜面护理'],
          isFoot: true,
        },
      ],
      keyWord: ['Z&O', '帮助', '帮助'],
      isFoot: true,
    },
    {
      title: '公司新闻',
      path: '/news',
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
      title: '专业施工套件',
      path: '/products/kit',
      children: [
        {
          title: '安装液',
          path: '/products/kit/anzhuangye',
          children: [],
          keyWord: ['Z&O', '产品介绍', '专业施工套件', '安装液'],
          isFoot: true,
        },
        {
          title: '洗车液',
          path: '/products/kit/xicheye',
          children: [],
          keyWord: ['Z&O', '产品介绍', '专业施工套件', '洗车液'],
          isFoot: true,
        },
        {
          title: '封装液',
          path: '/products/kit/ximoye',
          children: [],
          keyWord: ['Z&O', '产品介绍', '专业施工套件', '洗膜液'],
          isFoot: true,
        },
        {
          title: '封装液',
          path: '/products/kit/fengzhuangye',
          children: [],
          keyWord: ['Z&O', '产品介绍', '专业施工套件', '封装液'],
          isFoot: true,
        },
      ],
      keyWord: ['Z&O', '产品介绍', '专业施工套件', '施工套件'],
      isFoot: true,
    },
    {
      title: '解决方案',
      path: '/solution',
      children: [
        {
          title: '漆面保护膜培训',
          path: '/solution/train/car',
          children: [],
          keyWord: ['Z&O', '解决方案', '培训', '漆面保护膜培训'],
          isFoot: true,
        },
        {
          title: '专业安装人员',
          path: '/solution/dealer/installer',
          children: [],
          keyWord: ['Z&O', '解决方案', '成为经销商', '专业安装人员'],
          isFoot: true,
        },
      ],
      keyWord: ['Z&O', '解决方案', '解决方案'],
      isFoot: true,
    },
  ];
});
