import { Kategori } from "#/kategori/entities/kategori.entity";
import { Produk } from "#/produk/entities/produk.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class SubKategori{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    subCategoryName: string;

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
    deletedAt: Date;

    @ManyToOne(() => Kategori, (kategori) => kategori.subKategori)
    kategori: Kategori;

    @OneToMany(() => Produk, (product) => product.subKategori)
    product: Produk;
}