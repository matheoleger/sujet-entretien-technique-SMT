import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { MotorCycle, Maker } from '../schemas/moto';

@Resolver((of) => MotorCycle)
export class MotoResolver {
    private motos: MotorCycle[] = []

    @Query((returns) => [MotorCycle], { nullable: true })
    async getMotorCycles(): Promise<MotorCycle[]> {
        return await this.motos
    }

}


