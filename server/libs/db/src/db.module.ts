import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';

const models = TypegooseModule.forFeature([User])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/cilicili', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
