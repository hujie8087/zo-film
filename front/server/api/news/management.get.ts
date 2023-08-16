export default defineEventHandler((event) => {
  return [
    {
      _id: '1',
      title: 'Z&O美国董事会',
      list: [
        {
          _id: '1',
          title: 'Ryan Pape',
          post: 'President & CEO',
        },
        {
          _id: '2',
          title: 'Mike Klonne',
          post: 'Director',
        },
      ],
    },
    {
      _id: '2',
      title: 'Z&O美国管理团队成员',
      list: [
        {
          _id: '3',
          title: 'Mat Moreau',
          post: 'Vice President',
        },
        {
          _id: '4',
          title: 'Ryan Pape',
          post: 'President & CEO',
        },
      ],
    },
  ];
});
