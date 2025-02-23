import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiDefaultResponse, ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { DbService } from './db/db.service';

class HelloWorldDto {
  @ApiProperty()
  users: User[]
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private dbService: DbService) { }

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto
  })
  async getHello(): Promise<HelloWorldDto> {

    const users = await this.dbService.user.findMany()

    return { users }
  }
}
