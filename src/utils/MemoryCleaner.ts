export class MemoryCleaner {
    public static Clean()
    {
        this.CreepsClean()
    }
    private static CreepsClean() {
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
    }
}
