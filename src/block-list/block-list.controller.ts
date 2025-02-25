import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AddBlockItemDto, BlockItemDto, BlockListDto, BlockListQueryDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionDto } from 'src/auth/dto';

@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private readonly blockListService: BlockListService) { }


  @Get()
  @ApiOkResponse({
    type: BlockListDto
  })
  getList(@Query() query: BlockListQueryDto,
    @SessionInfo() session: GetSessionDto): Promise<BlockListDto> {

    return this.blockListService.getByUser(session.id, query)
  }


  @Post('item')
  @ApiCreatedResponse({
    type: AddBlockItemDto
  })
  addBlockItem(
    @Body() body: AddBlockItemDto,
    @SessionInfo() session: GetSessionDto): Promise<BlockItemDto> {

    return this.blockListService.addItem(session.id, body)
  }

  
  @Delete('item/:id')
  @ApiOkResponse({
    type: BlockItemDto
  })
  removeBlockItem(
    @Param('idn', ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionDto
  ): Promise<BlockItemDto> {
    return this.blockListService.removeItem(session.id, id)
  }
}
