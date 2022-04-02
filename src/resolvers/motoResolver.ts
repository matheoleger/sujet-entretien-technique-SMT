import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { MotorCycle, MotorCycleInput, motorCycles } from '../schemas/moto';

@Resolver((of) => MotorCycle)
export class MotoResolver {
    private motos: MotorCycle[] = motorCycles;

    @Query((returns) => [MotorCycle], { nullable: true })
    async getMotorCycles(): Promise<MotorCycle[]> {
        return await this.motos
    }

    @Mutation((returns) => MotorCycle)
    async addMotorCycle(
        @Arg('motorCycleInput') {modelName, makeName, CategoryName, year}: MotorCycleInput
    ): Promise<MotorCycle> {
        const moto = {
            id: this.motos.length,
            modelName,
            makeName,
            CategoryName,
            year
        }

        await this.motos.push(moto)
        return moto
    }

}


