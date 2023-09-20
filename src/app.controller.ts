import { Controller, Get, Param, Res, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  //parameter query
  // Get /users/:id /users/1 <- 여기서 :id 부분이 파라미터
  @Get('/:index')
  getUsernameByIndex(@Param('index') id: number, @Res() res: Response) {
    try {
      const username = this.appService.getUsernameByIndex(id);
      res.send(username);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  @Post('/:newusername')
  postUsernameByIndex(@Param('newusername') newUsername: string, @Res() res: Response) {
    try {
      const newuser = this.appService.postUsernameByIndex(newUsername);
      res.status(201).send(`${newuser}가 추가되었습니다.`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  @Delete('/:deleteusername')
  deleteUsernameByIndex(@Param('deleteusername') deleteUsername: string, @Res() res: Response) {
    try {
      const deleteuser = this.appService.deleteUsernameByIndex(deleteUsername);
      res.status(200).send(`${deleteuser}가 삭제되었습니다.`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
