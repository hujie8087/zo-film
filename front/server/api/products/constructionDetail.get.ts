import { useFetch } from 'nuxt/app';

export default defineEventHandler((event) => {
  let query = getQuery(event);
  let list = [
    {
      _id: '1',
      title: ' 安装液',
      imageUrl:
        'https://www.zo-film.com/Uploads/images/2020/11/10/1604997175_classify_img.png',
      content:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，Z&amp;O安装液更新到2.0的特殊配方，达到食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span>',
      description:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span><br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">如果你是专业的贴膜技师，由于细小的尘点掉落在漆面，而你又没有及时发现，含有凝胶成分的安装液能够圆润的包裹尘点避免损伤漆面。此外，厚厚的粘稠安装液被喷涂在漆面上不会马上滴落或者快速蒸发，大大降低揭膜的次数，避免因施工原因对膜面涂层的损伤。</span>',
      tmallLink: '',
      jdLink: '',
    },
    {
      _id: '2',
      title: ' 洗车液',
      imageUrl:
        'https://www.zo-film.com/Uploads/images/2020/11/10/1604997175_classify_img.png',
      content:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，Z&amp;O安装液更新到2.0的特殊配方，达到食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span>',
      description:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span><br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">如果你是专业的贴膜技师，由于细小的尘点掉落在漆面，而你又没有及时发现，含有凝胶成分的安装液能够圆润的包裹尘点避免损伤漆面。此外，厚厚的粘稠安装液被喷涂在漆面上不会马上滴落或者快速蒸发，大大降低揭膜的次数，避免因施工原因对膜面涂层的损伤。</span>',
      tmallLink: '',
      jdLink: '',
    },
    {
      _id: '3',
      title: ' 洗膜液',
      imageUrl:
        'https://www.zo-film.com/Uploads/images/2020/11/10/1604997175_classify_img.png',
      content:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，Z&amp;O安装液更新到2.0的特殊配方，达到食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span>',
      description:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span><br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">如果你是专业的贴膜技师，由于细小的尘点掉落在漆面，而你又没有及时发现，含有凝胶成分的安装液能够圆润的包裹尘点避免损伤漆面。此外，厚厚的粘稠安装液被喷涂在漆面上不会马上滴落或者快速蒸发，大大降低揭膜的次数，避免因施工原因对膜面涂层的损伤。</span>',
      tmallLink: '',
      jdLink: '',
    },
    {
      _id: '4',
      title: ' 封装液',
      imageUrl:
        'https://www.zo-film.com/Uploads/images/2020/11/10/1604997175_classify_img.png',
      content:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，Z&amp;O安装液更新到2.0的特殊配方，达到食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span>',
      description:
        '<span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">我们在贴膜过程中对每个环节都非常重视，食品级的专业贴膜施工安装液，避免不同地域水质对贴膜施工效果的影响。从而提供稳定高效的安装使用，在安装的过程中，也无需任何稀释添加。独有的配方不会和胶层发生反应使其发黄，每一项都是为完美贴膜打造。</span><br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <br style="box-sizing:border-box;color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"=""> <span style="color:#333333;font-family:" font-size:16px;white-space:normal;background-color:#ffffff;"="">如果你是专业的贴膜技师，由于细小的尘点掉落在漆面，而你又没有及时发现，含有凝胶成分的安装液能够圆润的包裹尘点避免损伤漆面。此外，厚厚的粘稠安装液被喷涂在漆面上不会马上滴落或者快速蒸发，大大降低揭膜的次数，避免因施工原因对膜面涂层的损伤。</span>',
      tmallLink: '',
      jdLink: '',
    },
  ];
  let data = list.find((item) => item._id == query.id);
  return data;
});
