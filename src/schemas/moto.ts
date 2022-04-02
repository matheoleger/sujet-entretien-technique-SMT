import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class MotorCycle {
    @Field()
    id!: number

    @Field()
    modelName!: string

    @Field()
    makeName!: string

    @Field()
    CategoryName!: string

    @Field()
    year!: string
}  

@InputType()
export class MotorCycleInput implements Partial<MotorCycle> {
    @Field()
    modelName!: string

    @Field()
    makeName!: string

    @Field()
    CategoryName!: string

    @Field()
    year!: string
}


//Default data
export const motorCycles = [
    {
        id: 0,
        modelName: "Cruiser Softail Standard",
        makeName: "Harley Davidson",
        CategoryName: "Cruiser",
        year: "2022"
    },
]