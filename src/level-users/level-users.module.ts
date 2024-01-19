import { Module } from '@nestjs/common';
import { LevelUsersController } from './level-users.controller';
import { LevelUsersService } from './level-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelUsers } from './entities/level-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LevelUsers])],
  controllers: [LevelUsersController],
  providers: [LevelUsersService]
})
export class LevelUsersModule {}
