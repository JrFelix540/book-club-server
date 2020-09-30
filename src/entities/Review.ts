import { Field, ObjectType } from "type-graphql";
import { Book } from "./Book";
import { User } from "./User";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";

@ObjectType()
@Entity()
export class Review extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    content: string;

    @Field()
    @Column()
    value!: number;

    @Field(() => User)
    @ManyToOne(() => User, user => user.reviews)
    creator!: User

    @Field(() => Book)
    @ManyToOne(() => Book, book => book.reviews)
    book!: Book

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date
    

}

