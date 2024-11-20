import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm'; // Importação correta

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'devtraining',
  entities: [], // Insira suas entidades aqui
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return dataSourceOptions; // Retorna as opções de configuração
      },
    }),
  ],
})
export class DatabaseModule {}
