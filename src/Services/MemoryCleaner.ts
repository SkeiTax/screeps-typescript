import { MethodLogDecorator } from "../utils/Decorators";
import { LogHelper } from "../utils/LogHelper";


export class MemoryCleaner {

    @MethodLogDecorator
    public static Clean() {
        this.CreepsClean()
    }

    @MethodLogDecorator
    private static CreepsClean() {
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
    }
}
