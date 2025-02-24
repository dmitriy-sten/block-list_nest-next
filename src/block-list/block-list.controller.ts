import { Controller } from '@nestjs/common';
import { BlockListService } from './block-list.service';

@Controller('block-list')
export class BlockListController {
  constructor(private readonly blockListService: BlockListService) {}
}
