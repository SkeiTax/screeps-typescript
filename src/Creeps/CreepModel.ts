import { CreepRoles } from "./CreepRoles";

export class CreepModel {
    /**
     * Части тела крипа описывающие возможности крипа
     */
    readonly body: BodyPartConstant[]

    /**
     * Имя крипа
     */
    readonly name: string

    /**
     * Память крипа - все что нужно знать о крипе
     * Пожалуй нужно заменить any на конкретный тип специализации или типа того.
     */
    readonly memory!: CreepMemory

    public constructor(body: BodyPartConstant[], name: string, memory: CreepMemory) {
        this.body = body;
        this.name = name;
        this.memory = memory
    }
}

export class CreepMemory{
    Role?: CreepRoles;
}
