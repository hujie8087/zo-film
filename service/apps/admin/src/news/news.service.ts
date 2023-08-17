import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll() {
    return [
      {
        id: 1,
        title: 'news1',
      },
      {
        id: 2,
        title: 'news2',
      },
    ];
  }
}
