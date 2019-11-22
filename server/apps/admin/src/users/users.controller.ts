import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiUseTags } from '@nestjs/swagger';
 

@Crud({
    model: User
})
@ApiUseTags('用户')
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly model) {}
}
