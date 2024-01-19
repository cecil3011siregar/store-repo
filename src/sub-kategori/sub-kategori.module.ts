import { Module } from '@nestjs/common';
import { SubKategoriController } from './sub-kategori.controller';
import { SubKategoriService } from './sub-kategori.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubKategori } from './entites/sub-kategori.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubKategori])],
  controllers: [SubKategoriController],
  providers: [SubKategoriService]
})
export class SubKategoriModule {}
