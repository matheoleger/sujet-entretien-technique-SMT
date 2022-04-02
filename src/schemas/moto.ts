import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class MotorCycle {
    @Field()
    id!: number

    @Field()
    modelName!: string

    @Field()
    makeID!: number

    @Field()
    CategoryName!: string

    @Field()
    year!: string
}  

@ObjectType()
export class Maker {
    @Field()
    id!: number

    @Field()
    year!: string

    @Field()
    location!: string
} 