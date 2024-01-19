import { SubKategori } from "#/sub-kategori/entites/sub-kategori.entity";
import { Users } from "#/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum statusProduct{
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable"
}
@Entity()
export class Produk{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: "varchar", length:255})
    productName: string;

    @Column({type: "int"})
    stock: number;
    
    @Column({type: "bigint"})
    price: number; 

    @Column({type: "text"})
    photo: string;

    @Column({
        type: "enum",
        enum:statusProduct,
        default: statusProduct.AVAILABLE
    })
    status: statusProduct;

    @Column({type: "text"})
    description: string;

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

    @ManyToOne(() => SubKategori, (subKategori) => subKategori.product)
    subKategori: SubKategori;

    @ManyToOne(() => Users, (users) => users.product)
    users: Users;
}