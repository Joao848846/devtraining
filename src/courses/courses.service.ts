/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Desenvolvimento',
      description: 'Estudando igual doido',
      tags: ['node.js'],
      whatsApp: 11911031972,
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((Course) => Course.id === id);
    if (!course) {
      throw new NotFoundException(`Registro ${id} não encontrado`);
    }
    return course;
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }

  update(id: number, updateCourseDTO: any) {
    const existing = this.findOne(id);
    console.log(existing);
    if (existing as any) {
      const index = this.courses.findIndex((Course) => Course.id === id);
      this.courses[index] = {
        id,
        ...existing,
        ...updateCourseDTO,
      };
    }
  }

  remove(id: number) {
    const index = this.courses.findIndex((course) => course.id === id);
    if (index <= 0) {
      this.courses.splice(index, 1);
    }
  }
}
