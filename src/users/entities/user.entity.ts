import { LevelUsers } from '#/level-users/entities/level-users.entity';
import { Produk } from '#/produk/entities/produk.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "varchar", length:100})
  fullName: string;

  @Column({type: "varchar", length:255})
  email:string;

  @Column()
  salt: string;

  @Column({type:"varchar", length:100})
  password: string;

  @Column({type: "varchar", length: 15})
  phoneNumber: string;

  @Column({type: "text"})
  address: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
  })
  deletedAt: Date;

  @ManyToOne(() => LevelUsers, (level) => level.users)
  level:LevelUsers;

  @OneToMany(() => Produk, (product) => product.users)
  product: Produk;
}
