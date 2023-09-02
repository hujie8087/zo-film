import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('contact')
@ApiTags('联系我们')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @Get()
  getContactInfo() {
    return this.contactService.findContactInfo();
  }
  @Post('message')
  submitMessage(@Body() body: any) {
    console.log(body);

    return this.contactService.postMessage(body);
  }
}
