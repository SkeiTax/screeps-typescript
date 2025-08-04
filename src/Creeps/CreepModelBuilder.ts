import { forEach } from "lodash";
import { CreepMemory, CreepModel } from "./CreepModel";
import { CreepRoles } from "./CreepRoles";

/**
 * Сборцик модели крипа
 */
export class CreepModelBuilder {
    /**
     * @see {@link CreepModel.body}
     */
    private Body: BodyPartConstant[]

    /**
     * @see {@link CreepModel.name}
     */
    private Name: string;

    /**
     * @see {@link CreepModel.memory}
     */
    private Memory!: CreepMemory;

    constructor() {
        this.Body = [];
        this.Name = "creep"
        this.Memory = new CreepMemory();
    }


    public SetName(name: string): CreepModelBuilder {
        this.Name = name;
        return this;
    }

    public SetRole(role: CreepRoles)
    {
        this.Memory.Role = role;
        return this;
    }

    private AddBodyPart(bodyPart:BodyPartConstant, partCount: number) {
        if (partCount < 1) throw "Недопустимо добавлять менее 1 части тела";
        for (var i = 0; i < partCount; i ++)
            this.Body.push(bodyPart);
    }

    public AddWork(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(WORK, count);
        return this;
    }

    public AddMove(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(MOVE, count)
        return this;
    }

    public AddCarry(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(CARRY, count)
        return this;
    }

    public AddAttack(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(ATTACK, count)
        return this;
    }

    public AddRangeAttack(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(ATTACK, count)
        return this;
    }

    public AddHeal(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(HEAL, count)
        return this;
    }

    public AddClaim(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(CLAIM, count)
        return this;
    }

    public AddTough(count:number = 1): CreepModelBuilder {
        this.AddBodyPart(TOUGH, count)
        return this;
    }

    public Build(): CreepModel {
        return new CreepModel(this.Body, this.Name, this.Memory);
    }
}
