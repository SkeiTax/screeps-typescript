export class CreepModel {
    /**
     * Части тела крипа описывающие возможности крипа
     */
    readonly Body: BodyPartConstant[]

    /**
     * Имя крипа
     */
    readonly Name?: string

    /**
     * Память крипа - все что нужно знать о крипе
     * Пожалуй нужно заменить any на конкретный тип специализации или типа того.
     */
    readonly Memory: any

    public constructor(body: BodyPartConstant[], name?: string, memory?: any) {
        this.Body = body;
        this.Name = name;
        this.Memory = memory
    }
}
