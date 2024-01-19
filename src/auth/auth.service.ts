import { Users } from '#/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register-users.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private usersRepo: Repository<Users>
    ){}

    async register(registerDto: RegisterDto){
        try{
            
        }catch(error){
            
        }
    }
}
