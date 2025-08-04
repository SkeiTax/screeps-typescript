import { forEach } from "lodash";
import { MethodLogDecorator } from "../utils/Decorators";
import { LogHelper } from "../utils/LogHelper";


export class MemoryCleaner {

    @MethodLogDecorator
    public static Clean() {
        this.CreepsClean()
    }

    @MethodLogDecorator
    private static CreepsClean() {
        var creepsMemoryToClear = []
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                creepsMemoryToClear.push(name);
            }
        }
        LogHelper.Log(`Creeps to cleaning: ${creepsMemoryToClear.length}`);
        creepsMemoryToClear.forEach((e) => {
            delete Memory.creeps[e];
        })
    }
}
