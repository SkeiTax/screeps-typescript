interface ICreepModelFactory
{
    /**
     * Создает добытчика (Harvester)
     */
    CreateHarvester(): void;

    /**
     * Создает строителя (Builder)
     */
    CreateBuilder (): void;

    /**
     * Создает обновляльщика (Updater)
     */
    CreateUpgrader (): void;

    /**
     * Создает ремонтрика (Repairer)
     */
    CreateRepairer (): void;

    /**
     * Создает перевозчика/транспантера (Transporter)
     */
    CreateTransporter (): void;

    /**
     * Создает копателя/шахтера (Miner)
     */
    CreateMiner (): void;

    /**
     * Создает разведчика (Scout)
     */
    CreateScout (): void;

    /**
     * Создает захватчика (Claimer)
     */
    CreateClaimer (): void;

    /**
     * Создает защитника (Defender)
     */
    CreateDefender (): void;

    /**
     * Создает удаленного добытчика (RemoteHarvester)
     */
    CreateRemoteHarvester (): void;
}
