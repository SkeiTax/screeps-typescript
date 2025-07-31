
/**
 * Набор методов для урощения работы с данными крипов
 */
export class BodyPartHelper {
    /**
     * Возвращает стоимость конкретной части тела крипа
     * @param bodyPart часть тела цену которого нужно узнать
     * @returns цена `number` части тела
     */
    public static Cost(bodyPart: BodyPartConstant) {
        return BODYPART_COST[bodyPart];
    }
}
