import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, BaseEntity} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Book } from "./Book";

@ObjectType()
@Entity()
export class Author extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    firstName!: string;

    @Field()
    @Column()
    lastName!: string;

    @Field(() => [Book])
    @ManyToMany(() => Book, book => book.authors )
    @JoinTable()
    books: Book[]

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date






}

