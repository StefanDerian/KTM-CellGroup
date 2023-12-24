import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';
import { CellgroupModule } from './cellgroup/cellgroup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './people/entities/people.entity';
import { DataSource } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';

@Module({
  imports: [
    PeopleModule,
    CellgroupModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
