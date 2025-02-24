import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionDto } from 'src/auth/dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private readonly accountService: AccountService) { }



  @Get()
  @ApiOkResponse({
    type: AccountDto
  })
  getAccount(@SessionInfo() session: GetSessionDto) {
    return this.accountService.getAccount(session.id)
  }



  @Patch()
  @ApiOkResponse({
    type: AccountDto
  })
  patchAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionDto) { }
}
