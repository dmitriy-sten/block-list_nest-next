import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetSessionDto, SignIpBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieService } from './cookie.service';
import { AuthGuard } from './auth.guard';
import { SessionInfo } from './session-info.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private cookieService: CookieService
  ) { }

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
    @Body() body: SignUpBodyDto,
    @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.signUp(
      body.email,
      body.password
    )

    this.cookieService.setToken(res, accessToken)


  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() body: SignIpBodyDto,
    @Res({ passthrough: true }) res: Response) {

    const { accessToken } = await this.authService.signIn(
      body.email,
      body.password
    )

    this.cookieService.setToken(res, accessToken)

  }


  @Post('sign-out')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res)
  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessionDto
  })
  @UseGuards(AuthGuard)
  getSessionInfo(@SessionInfo() session: GetSessionDto) {
    return session

  }

}
