
import { SubKategori } from "#/sub-kategori/entites/sub-kategori.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Kategori{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    categoryName: string;

    @CreateDateColumn({
        type: "timestamp with time zone",
        nullable: false
    })
    createdAt: Date

    @UpdateDateColumn({
        type:"timestamp with time zone",
        nullable: false
    })
    updatedAt: Date

    @DeleteDateColumn({
        type:"timestamp with time zone",
        nullable: true
    })
    deletedAt: Date

    @OneToMany(() => SubKategori, (subKategori) => subKategori.kategori)
    subKategori: SubKategori;
}