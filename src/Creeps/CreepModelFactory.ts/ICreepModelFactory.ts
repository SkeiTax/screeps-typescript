import { CreepModel } from "Creeps/CreepModel";

export interface ICreepModelFactory
{
    /**
     * Создает добытчика (Harvester)
     */
    CreateHarvester(): CreepModel;

    /**
     * Создает строителя (Builder)
     */
    CreateBuilder (): CreepModel;

    /**
     * Создает обновляльщика (Updater)
     */
    CreateUpgrader (): CreepModel;

    /**
     * Создает ремонтрика (Repairer)
     */
    CreateRepairer (): CreepModel;

    /**
     * Создает перевозчика/транспантера (Transporter)
     */
    CreateTransporter (): CreepModel;

    /**
     * Создает копателя/шахтера (Miner)
     */
    CreateMiner (): CreepModel;

    /**
     * Создает разведчика (Scout)
     */
    CreateScout (): CreepModel;

    /**
     * Создает захватчика (Claimer)
     */
    CreateClaimer (): CreepModel;

    /**
     * Создает защитника (Defender)
     */
    CreateDefender (): CreepModel;

    /**
     * Создает удаленного добытчика (RemoteHarvester)
     */
    CreateRemoteHarvester (): CreepModel;
}
