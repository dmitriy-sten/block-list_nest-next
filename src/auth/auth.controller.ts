import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetSessionDto, SignIpBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
      @Body() body: SignUpBodyDto, 
      @Res() res: Response) 
    {
    const { accessToken } = await this.authService.signUp(body.email, body.password)
    res.cookie
    return { accessToken }

  }

  @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignIpBodyDto) {
    return null

  }
  @Post('sign-out')
  @HttpCode(HttpStatus.OK)
  signOut() {

  }

  @Get('session')
  @ApiOkResponse({
    type: GetSessionDto
  })
  getSessionInfo() {
    return null

  }

}
