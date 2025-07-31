import { CreepModel } from "./CreepModel";

/**
 * Сборцик модели крипа
 */
export class CreepModelBuilder {
    /**
     * @see {@link CreepModel.Body}
     */
    private Body: BodyPartConstant[]

    /**
     * @see {@link CreepModel.Name}
     */
    private Name?: string

    /**
     * @see {@link CreepModel.Memory}
     */
    private Memory: any

    constructor() {
        this.Body = [];
    }


    public SetName(name: string) {
        this.Name = name;
    }

    public AddWork(): CreepModelBuilder {
        this.Body.push(WORK)
        return this;
    }

    public AddMove(): CreepModelBuilder {
        this.Body.push(MOVE)
        return this;
    }

    public AddCarry(): CreepModelBuilder {
        this.Body.push(CARRY)
        return this;
    }

    public AddAttack(): CreepModelBuilder {
        this.Body.push(ATTACK)
        return this;
    }

    public AddRangeAttack(): CreepModelBuilder {
        this.Body.push(ATTACK)
        return this;
    }

    public AddHeal(): CreepModelBuilder {
        this.Body.push(HEAL)
        return this;
    }

    public AddClaim(): CreepModelBuilder {
        this.Body.push(CLAIM)
        return this;
    }

    public AddTough(): CreepModelBuilder {
        this.Body.push(TOUGH)
        return this;
    }

    public Build(): CreepModel {
        return new CreepModel(this.Body, this.Name, this.Memory);
    }
}
