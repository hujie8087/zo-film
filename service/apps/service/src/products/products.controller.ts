import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags('商品')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  findProductType() {
    return this.productService.findProduct();
  }
  @Get('cover')
  findCoverType(@Query() query: { id: string }) {
    return this.productService.findCover(query.id);
  }
  @Get('good-detail')
  findGoodDetail(@Query() query: { id: string }) {
    return this.productService.findGoodDetail(query.id);
  }
  @Get('construction')
  findConstruction() {
    return this.productService.findConstruction();
  }
  @Get('construction/:id')
  findConstructionDetail(@Param() param: { id: string }) {
    return this.productService.findConstructionDetail(param.id);
  }
  @Get('car')
  findCarList() {
    return this.productService.findCarList();
  }
}
