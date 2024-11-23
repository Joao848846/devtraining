import { PartialType } from '@nestjs/mapped-types';
import { UserCourseDTO } from './users-login.dto';

export class UpdateCourseDTO extends PartialType(UserCourseDTO) {}
