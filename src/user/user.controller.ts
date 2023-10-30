import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    
    @Get('/:id')
    async findById(@Param('id') id: number) {
        return await this.userService.findById(id);
    }
}