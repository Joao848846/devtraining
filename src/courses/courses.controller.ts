import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Response,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Response() response) {
    return response.status(200).json({ message: 'Deu bom' });
  }

  @Get(':id/:name')
  findOne(@Param('id') id: string, @Param('name') name: string) {
    return `O pedido ${id} acabou de sair para entrega para o cliente ${name}`;
  }
  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() Body: any) {
    console.log(Body);
    return `Pedido atualizado e entregue ${id}`;
  }
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `${id}`;
  }
}
