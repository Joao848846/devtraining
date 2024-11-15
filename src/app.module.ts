import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { CoursesModule } from './courses/courses.module';
import { UsersService } from './courses/user.service';
import { UserController } from './courses/user.controller';

@Module({
  imports: [CoursesModule],
  controllers: [AppController, CoursesController, UserController],
  providers: [AppService, CoursesService, UsersService],
})
export class AppModule {}
