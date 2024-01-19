import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LevelUsers } from './entities/level-users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LevelUsersService {
    constructor(
        @InjectRepository(LevelUsers)
        private levelRepo: Repository<LevelUsers>
    ){}

    findAll(){
        return this.levelRepo.findAndCount()
    }
}
